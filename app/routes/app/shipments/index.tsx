import { NoDataCard } from '~/components/shared/NoDataCard/NoDataCard';
import { ContentPageWrapper } from '~/pageComponents/ContentPageWrapper/ContentPageWrapper';
import { FaArrowCircleLeft, FaBoxOpen } from 'react-icons/fa';

export default function ShipmentsIndex() {
  return (
    <ContentPageWrapper
      content={
        <div className="bg-slate-50 flex flex-1 w-full items-center justify-center">
          <NoDataCard
            iconElement={<FaBoxOpen className="text-slate-400" size={64} />}
            noBorder
            primaryText="No shipment selected"
            secondaryIconElement={
              <FaArrowCircleLeft className="text-slate-400" size={32} />
            }
            secondaryText="Select a shipment on the left to view the details..."
          />
        </div>
      }
    />
  );
}
