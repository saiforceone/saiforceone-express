import { Outlet, useLoaderData } from '@remix-run/react';
import type { LoaderFunction } from '@remix-run/node';
import { getMailboxesForUser } from '~/models/mailbox.server';
import type { UserProfile } from '~/shared/interfaces/user.interface';
import { getUser } from '~/utils/session.server';
import { json, redirect } from '@remix-run/node';
import { ListPageWrapper } from '~/pageComponents/ListPageWrapper/ListPageWrapper';
import { MailboxCard } from '~/components/buttons-and-controls/MailboxCard/MailboxCard';
import { NoDataCard } from '~/components/shared/NoDataCard/NoDataCard';

type LoaderData = {
  mailboxes: Awaited<ReturnType<typeof getMailboxesForUser>>;
  user: UserProfile;
};

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);
  if (!user) return redirect('/auth');

  const mailboxes = await getMailboxesForUser(user.id);
  return json({ mailboxes, user });
};

export default function MailboxesIndex() {
  const { mailboxes } = useLoaderData<LoaderData>();

  const mailboxList = Array.isArray(mailboxes) ? (
    mailboxes.map((box) => (
      <MailboxCard
        key={`mailbox-${box.id}`}
        mailBoxData={{
          ...box,
          createdAt: new Date(box.createdAt),
          updatedAt: new Date(box.updatedAt),
        }}
      />
    ))
  ) : (
    <NoDataCard primaryText="No Mailboxes" />
  );

  return (
    <ListPageWrapper
      contentLeft={mailboxList}
      contentRight={<Outlet />}
      pageTitle="Mailboxes"
      showContentRightOnly={false}
    />
  );
}
