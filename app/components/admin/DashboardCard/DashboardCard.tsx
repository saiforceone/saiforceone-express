import React from "react";
import type {FC} from "react";

interface DashboardCardProps {
  action?: () => void;
  description: string;
  primaryText: string;
}

export const DashboardCard: FC<DashboardCardProps> = ({action, description, primaryText}) => {
  return (
    <div
      className="bg-slate-50 hover:bg-slate-100 duration-300 cursor-pointer rounded p-4"
      onClick={action}
    >
      <h1 className="text-slate-700 text-9xl font-light ml-0">
        {primaryText}
      </h1>
      <p className="text-lg text-slate-600">{description}</p>
    </div>
  )
}