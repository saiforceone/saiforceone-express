import React from 'react';
import type { FC } from 'react';
import {
  BsCheckSquareFill,
  BsExclamationSquareFill,
  BsX,
} from 'react-icons/all';
import { BsInfoSquareFill } from 'react-icons/bs';

enum PackageStatus {
  'receivedWarehouse' = 'RECEIVED_WAREHOUSE',
  'receivedCustoms' = 'RECEIVED_CUSTOMS',
  'customsDetained' = 'CUSTOMS_DETAINED',
  'receivedStore' = 'RECEIVED_STORE',
  'delivered' = 'DELIVERED',
}

const commonIconClasses = 'self-center text-slate-500';
const commonIconSize = 20;

const getIcon = (status: PackageStatus): React.ReactElement => {
  switch (status) {
    case PackageStatus.customsDetained:
      return (
        <BsExclamationSquareFill
          className={commonIconClasses}
          size={commonIconSize}
        />
      );
    case PackageStatus.delivered:
      return (
        <BsCheckSquareFill
          className={commonIconClasses}
          size={commonIconSize}
        />
      );
    default:
      return (
        <BsInfoSquareFill className={commonIconClasses} size={commonIconSize} />
      );
  }
};

interface AlertProps {
  alertText: string;
  alertTitle: string;
  dismissAction?: () => void;
  packageStatus: PackageStatus;
}

export const PackageAlert: FC<AlertProps> = ({
  alertTitle,
  alertText,
  dismissAction,
  packageStatus,
}) => {
  return (
    <div className="bg-slate-50 hover:bg-slate-100 duration-300 border-1 border-slate-300 flex flex-1 items-cneter rounded p-2">
      {getIcon(packageStatus)}
      <div className="flex flex-1 flex-col ml-2">
        <h4 className="text-slate-600 text-lg">{alertTitle}</h4>
        <p className="text-slate-400 text-sm font-bold">{alertText}</p>
      </div>
      {dismissAction ? (
        <BsX className="text-slate-500 self-center cursor-pointer" size={32} />
      ) : null}
    </div>
  );
};
