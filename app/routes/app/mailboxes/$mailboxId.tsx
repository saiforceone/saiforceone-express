import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { getMailboxById } from '~/models/mailbox.server';
import { useLoaderData } from '@remix-run/react';
import { ContentPageWrapper } from '~/pageComponents/ContentPageWrapper/ContentPageWrapper';
import { SectionHeader } from '~/components/shared/SectionHeader/SectionHeader';
import { StackedLabel } from '~/components/badges-and-labels/StackedLabel/StackedLabel';
import { NoDataCard } from '~/components/shared/NoDataCard/NoDataCard';
import { Alert } from '~/components/shared/Alert/Alert';

type LoaderData = {
  mailbox: Awaited<ReturnType<typeof getMailboxById>>;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const { mailboxId } = params;
  if (!mailboxId) return json({ error: 'invalid mailbox' });
  const mailbox = await getMailboxById(mailboxId);
  return json({ mailbox });
};

export default function MailboxPage() {
  const { mailbox } = useLoaderData<LoaderData>();
  return (
    <ContentPageWrapper
      content={
        <div className="p-4 flex flex-1 flex-col">
          {mailbox ? (
            <div className="flex flex-col gap-y-4">
              <SectionHeader heading="General Information" />
              <div className="flex flex-1 items-center">
                <Alert
                  alertText={`Number of shipments at this address: ${
                    mailbox?._count.shipments || 'N/A'
                  }`}
                  alertType="info"
                />
              </div>
              <div className="grid grid-cols-3 gap-x-2">
                <StackedLabel
                  labelText="Unit Code"
                  valueText={mailbox.unitCode}
                />
                <StackedLabel
                  labelText="Address Line 1"
                  valueText={mailbox.addressLine1}
                />
                <StackedLabel
                  labelText="Address Line 2"
                  valueText={
                    mailbox.addressLine2 ? mailbox.addressLine2 : 'N/A'
                  }
                />
              </div>
              <div className="grid grid-cols-3 gap-x-2">
                <StackedLabel labelText="city" valueText={mailbox.city} />
                <StackedLabel labelText="State" valueText={mailbox.state} />
                <StackedLabel
                  labelText="Zip Code"
                  valueText={mailbox.zipCode}
                />
              </div>
              <div className="flex flex-1 items-center">
                <StackedLabel labelText="Country" valueText={mailbox.country} />
              </div>
            </div>
          ) : (
            <NoDataCard primaryText="Mailbox not found" />
          )}
        </div>
      }
    />
  );
}
