import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { ContentPageWrapper } from '~/pageComponents/ContentPageWrapper/ContentPageWrapper';
import { getShipmentById } from '~/models/shipment.server';
import { useLoaderData } from '@remix-run/react';
import { SectionHeader } from '~/components/shared/SectionHeader/SectionHeader';
import { IconButton } from '~/components/shared/IconButton/IconButton';
import { BsX } from 'react-icons/bs';
import { BasicButton } from '~/components/shared/BasicButton/BasicButton';
import { StackedLabel } from '~/components/badges-and-labels/StackedLabel/StackedLabel';
import { NoDataCard } from '~/components/shared/NoDataCard/NoDataCard';
import { getShipmentStatuses } from '~/models/shipmentStatus.server';
import { PackageAlert } from '~/components/badges-and-labels/PackageAlert/PackageAlert';
import { getShipmentDocuments } from '~/models/shipmentDocuments.server';

type LoaderData = {
  shipment: Awaited<ReturnType<typeof getShipmentById>>;
  shipmentDocuments: Awaited<ReturnType<typeof getShipmentDocuments>>;
  shipmentStatuses: Awaited<ReturnType<typeof getShipmentStatuses>>;
};

export const loader: LoaderFunction = async ({ params }) => {
  const { id } = params;
  if (!id) return json({ error: 'no data' });
  const shipment = await getShipmentById(id);
  const shipmentDocuments = await getShipmentDocuments(id);
  const shipmentStatuses = await getShipmentStatuses(id);
  return json({ shipment, shipmentDocuments, shipmentStatuses });
};

export default function ShipmentPage() {
  const { shipment, shipmentStatuses } = useLoaderData<LoaderData>();

  return (
    <ContentPageWrapper
      content={
        <div className="p-4 flex flex-col gap-y-4">
          <SectionHeader
            heading="Shipment Details"
            rightActions={
              <div className="flex items-center gap-x-4">
                <BasicButton
                  className="bg-slate-600 rounded px-2 py-1 text-white"
                  title="Manage Docs"
                />
                <IconButton icon={<BsX className="self-center" size={20} />} />
              </div>
            }
          />
          {shipment ? (
            <div className="flex flex-col gap-y-4">
              <SectionHeader heading="General Information" />
              <StackedLabel
                labelText="Item Description"
                valueText="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
              />
              <div className="flex flex-1 items-center gap-x-2 py-2">
                <div className="flex flex-1">
                  <StackedLabel labelText="Received by" valueText="N/A" />
                </div>
                <div className="flex flex-1">
                  <StackedLabel
                    labelText="Received at"
                    valueText={shipment.createdAt}
                  />
                </div>
                <div className="flex flex-1">
                  <StackedLabel
                    labelText="Amount Due"
                    valueText={shipment.totalDue}
                  />
                </div>
              </div>
              <SectionHeader heading="Package Details" />
              <div className="flex flex-1 items-center gap-x-2 py-2 w-2/3">
                <div className="flex flex-1">
                  <StackedLabel labelText="Package Type" valueText="Box" />
                </div>
                <div className="flex flex-1">
                  <StackedLabel
                    labelText="Package Weight"
                    valueText={shipment.shippingWeight}
                  />
                </div>
              </div>
              <SectionHeader heading="Package Status Updates" />
              <div className="flex flex-col gap-y-4">
                {shipmentStatuses.length ? (
                  shipmentStatuses.map((status) => (
                    <PackageAlert
                      key={status.id}
                      packageStatus={status.packageStatus}
                      alertTitle={status.packageStatus}
                      alertText={status.createdAt}
                    />
                  ))
                ) : (
                  <NoDataCard
                    primaryText="No Package Updates"
                    secondaryText="There are currently no package updates available at this time"
                  />
                )}
              </div>
            </div>
          ) : null}
        </div>
      }
    />
  );
}
