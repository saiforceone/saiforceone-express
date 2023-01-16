import React from 'react';
import type { FC } from 'react';
import type { AlertType } from '~/shared/types/types';
import {
  BsExclamationOctagonFill,
  BsInfoSquareFill,
  BsCheckSquareFill,
  BsExclamationSquareFill,
} from 'react-icons/bs';

interface AlertProps {
  alertText: string;
  alertType: AlertType;
}

const IconClasses = 'text-slate-600';

const Icons = {
  error: <BsExclamationOctagonFill className={IconClasses} />,
  info: <BsInfoSquareFill className={IconClasses} />,
  success: <BsCheckSquareFill className={IconClasses} />,
  warning: <BsExclamationSquareFill className={IconClasses} />,
};

const getIcon = (alertType: AlertType): React.ReactElement => {
  return Icons[alertType];
};

export const Alert: FC<AlertProps> = ({ alertText, alertType }) => {
  return (
    <div
      className={[
        'bg-slate-100 border-1 border-slate-400 flex flex-1 items-center my-1 p-2 rounded',
      ].join(' ')}
    >
      {getIcon(alertType)}
      <span className="ml-2 text-lg text-slate-600">{alertText}</span>
    </div>
  );
};
