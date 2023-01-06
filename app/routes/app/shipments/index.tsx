import { NoDataCard } from '~/components/shared/NoDataCard/NoDataCard';
import { ContentPageWrapper } from '~/pageComponents/ContentPageWrapper/ContentPageWrapper';

export default function ShipmentsIndex() {
  return (
    <ContentPageWrapper
      content={
        <div className="bg-white flex flex-1 w-full items-center justify-center">
          <NoDataCard primaryText="No shipment selected" />
        </div>
      }
    />
  );
}
