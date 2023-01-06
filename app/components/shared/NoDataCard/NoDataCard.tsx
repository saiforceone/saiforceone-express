import React from 'react';
import type { FC } from 'react';
import { IconButton } from '~/components/shared/IconButton/IconButton';
import { BsCheckSquareFill } from 'react-icons/bs';

interface NoDataCardProps {
  action?: () => void;
  actionElement?: React.ReactElement;
  iconElement?: React.ReactElement;
  primaryText: string;
  secondaryText?: string;
}

export const NoDataCard: FC<NoDataCardProps> = ({
  action,
  actionElement,
  iconElement,
  primaryText,
  secondaryText,
}) => {
  const icon = actionElement ? (
    actionElement
  ) : (
    <BsCheckSquareFill className="self-center" />
  );
  return (
    <div className="bg-slate-50 border-1 border-slate-200 p-2 rounded">
      {iconElement ? (
        <div className="flex flex-1 flex-col items-center">{iconElement}</div>
      ) : null}
      <div className="flex flex-col items-center mt-2">
        <h2 className="text-slate-600 text-2xl">{primaryText}</h2>
        {secondaryText ? (
          <p className="text-slate-500 text-lg">{secondaryText}</p>
        ) : null}
      </div>
      {action ? (
        <div className="flex flex-col items-center mt-4">
          <IconButton icon={icon} onClick={action} />
        </div>
      ) : null}
    </div>
  );
};
