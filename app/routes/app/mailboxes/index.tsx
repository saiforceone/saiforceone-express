import { ContentPageWrapper } from '~/pageComponents/ContentPageWrapper/ContentPageWrapper';
import { NoDataCard } from '~/components/shared/NoDataCard/NoDataCard';

export default function MailboxIndexPage() {
  return (
    <ContentPageWrapper
      content={
        <div className="bg-white flex flex-1 w-full items-center justify-center">
          <NoDataCard primaryText="No mailbox has been selected" />
        </div>
      }
    />
  );
}
