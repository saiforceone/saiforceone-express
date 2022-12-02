import React from "react";
import type {FC} from "react";
import {BsInfoSquareFill} from "react-icons/bs";

import type {ShipmentStatus} from "@prisma/client";

interface ShipmentNotificationProps {
  shipmentStatus: ShipmentStatus
}

export const ShipmentNotification: FC<ShipmentNotificationProps> = ({shipmentStatus}) => {
  return (
    <div className="flex px-2 py-1 w-fit items-center rounded bg-slate-200">
      <BsInfoSquareFill className="text-slate-600" size={16} />
      <div className="ml-2">
        <h4 className="text-slate-700 text-sm">{shipmentStatus.packageStatus}</h4>
        <p className="text-slate-500 text-xs font-medium">{shipmentStatus.createdAt.toDateString()}</p>
      </div>
    </div>
  );
};
