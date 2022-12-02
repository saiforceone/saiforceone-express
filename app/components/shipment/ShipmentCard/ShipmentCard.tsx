import React from "react";
import type {FC} from "react";
import type {Shipment} from "@prisma/client";
import {Label} from "~/components/badges-and-labels/Label/Label";
import {ShipmentNotification} from "~/components/shipment/ShipmentNotification/ShipmentNotification";
import {StackedLabel} from "~/components/badges-and-labels/StackedLabel/StackedLabel";
import {BsInfoSquareFill} from "react-icons/bs";
import type {ShipmentStatus} from "@prisma/client";
import Formatters from "~/utils/Formatters";

interface ShipmentCardProps {
  action?: () => void;
  shipment: Shipment,
  shipmentCategory: string;
  shipmentStatuses: ShipmentStatus[];
}

export const ShipmentCard: FC<ShipmentCardProps> = ({action, shipment, shipmentCategory, shipmentStatuses}) => {
  return (
    <div
      className="cursor-pointer rounded border-1 border-slate-300 hover:bg-gray-100 duration-300 p-4"
      onClick={action}
    >
      <div className="md:hidden">
        <div>
          <Label
            iconElement={<BsInfoSquareFill/>}
            labelText={shipmentStatuses.length ? shipmentStatuses[0].packageStatus : ""}
          />
          <div className="flex items-center justify-between mt-4">
            <StackedLabel labelText="Category" valueText={shipmentCategory} />
            <StackedLabel labelText="Date Added" valueText={shipment.createdAt.toDateString()} />
          </div>
          <div className="mt-4">
            <StackedLabel labelText="Tracking Number" valueText={shipment.trackingNumber} />
          </div>
          <div className="mt-4">
            <div className="flex flex-1 p-2 rounded bg-slate-50 items-center justify-between">
              <p className="text-slate-600 mr-2 text-sm font-medium uppercase">Last Status</p>
              {
                shipmentStatuses.length
                  ? <ShipmentNotification shipmentStatus={shipmentStatuses[0]}/>
                  : null
              }
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex flex-col">
        <div className="flex justify-between items-center">
          <StackedLabel labelText="Category" valueText={shipmentCategory}/>
          <Label
            iconElement={<BsInfoSquareFill/>}
            labelText={shipmentStatuses.length ? shipmentStatuses[0].packageStatus : ""}
          />
        </div>
        <div className="flex justify-between items-center mt-4">
          <StackedLabel labelText="Source" valueText={shipment.source}/>
          <StackedLabel labelText="Tracking Num." valueText={shipment.trackingNumber}/>
          <StackedLabel labelText="Date Added" valueText={shipment.createdAt.toDateString()}/>
        </div>
        <div className="flex justify-between items-center mt-4">
          <StackedLabel labelText="Package Weight" valueText={Formatters.formatWeight(shipment.shippingWeight)}/>
          <div className="flex w-fit p-2 rounded bg-slate-50 items-center">
            <p className="text-slate-600 mr-2 text-sm font-medium uppercase">Last Status</p>
            {
              shipmentStatuses.length
                ? <ShipmentNotification shipmentStatus={shipmentStatuses[0]}/>
                : null
            }
          </div>
        </div>
      </div>
    </div>
  );
};
