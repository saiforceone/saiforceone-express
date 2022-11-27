import type { FC } from "react";
import { BsInfoSquareFill, BsXSquareFill } from "react-icons/bs";

interface NotificationItemProps {
  detail: string;
  dismissAction?: () => void;
  timeSince: string;
  title: string;
}

export const NotificationItem: FC<NotificationItemProps> = ({
  timeSince,
  detail,
  dismissAction,
  title
}) => {
  return (
    <div className="flex flex-1 bg-slate-100 rounded px-2 py-1 items-center">
      <BsInfoSquareFill className="text-slate-600" size={24} />
      <div className="flex flex-col flex-1 ml-2">
        <div className="flex flex-1 items-center justify-between">
          <p className="text-base font-medium text-slate-700">{title}</p>
          <span className="text-sm text-slate-500">{timeSince}</span>
        </div>
        <span className="text-sm text-slate-600 font-medium mt-0.5">{detail}</span>
      </div>
      {dismissAction ? (<BsXSquareFill className="cursor-pointer ml-4" size={24} onClick={dismissAction} />) : null}
    </div>
  )
}