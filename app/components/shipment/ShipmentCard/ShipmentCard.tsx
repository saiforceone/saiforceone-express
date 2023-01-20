import React from 'react';
import type { FC } from 'react';
import { Label } from '~/components/badges-and-labels/Label/Label';
import { StackedLabel } from '~/components/badges-and-labels/StackedLabel/StackedLabel';
import { BsInfoSquareFill } from 'react-icons/bs';
import Formatters from '~/utils/Formatters';
import type { CompositeShipment } from '~/types';
import { Link } from '@remix-run/react';

interface ShipmentCardProps {
  action?: () => void;
  active: Boolean;
  shipment: CompositeShipment;
}

export const ShipmentCard: FC<ShipmentCardProps> = ({
  action,
  active = false,
  shipment,
}) => {
  const shipmentLastStatus = shipment.lastStatus ? shipment.lastStatus : 'N/A';
  return (
    <Link to={`${shipment.id}`}>
      <div
        className={[
          active ? 'border-purple-700' : 'border-slate-300',
          'cursor-pointer rounded border-2 hover:bg-gray-100 duration-300 p-4',
        ].join(' ')}
        onClick={action}
      >
        <div className="sm:hidden">
          <div>
            <Label
              iconElement={<BsInfoSquareFill />}
              labelText={shipmentLastStatus}
            />
            <div className="flex items-center justify-between mt-4">
              <StackedLabel
                labelText="Category"
                valueText={shipment.shipmentCategory.category}
              />
              <StackedLabel
                labelText="Date Added"
                valueText={Formatters.formatDate(shipment.createdAt)}
              />
            </div>
            <div className="mt-4">
              <StackedLabel
                labelText="Tracking Number"
                valueText={shipment.trackingNumber}
              />
            </div>
            <div className="mt-4">
              <div className="flex flex-1 p-2 rounded bg-slate-50 items-center justify-between">
                <p className="text-slate-600 mr-2 text-sm font-medium uppercase">
                  Last Status
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:flex flex-col">
          <div className="flex justify-between items-center">
            <StackedLabel
              labelText="Category"
              valueText={shipment.shipmentCategory.category}
            />
            <Label
              iconElement={<BsInfoSquareFill />}
              labelText={shipmentLastStatus}
            />
          </div>
          <div className="flex gap-x-2 justify-between items-center mt-4">
            <StackedLabel labelText="Source" valueText={shipment.source} />
            <StackedLabel
              labelText="Tracking Num."
              valueText={shipment.trackingNumber}
            />
            <StackedLabel
              labelText="Date Added"
              valueText={Formatters.formatDate(shipment.createdAt)}
            />
          </div>
          <div className="flex justify-between items-center mt-4">
            <StackedLabel
              labelText="Package Weight"
              valueText={`${shipment.shippingWeight}`}
            />
            <div className="flex w-fit p-2 rounded bg-slate-50 items-center">
              <p className="text-slate-600 mr-2 text-sm font-medium uppercase">
                Last Status
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
