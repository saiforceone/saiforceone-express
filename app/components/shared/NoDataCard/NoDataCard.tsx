import React from 'react';
import type { FC } from 'react';
import { IconButton } from '~/components/shared/IconButton/IconButton';
import { BsCheckSquareFill } from 'react-icons/bs';

interface NoDataCardProps {
  action?: () => void;
  actionElement?: React.ReactElement;
  iconElement?: React.ReactElement;
  noBorder?: boolean;
  primaryText: string;
  secondaryIconElement?: React.ReactElement;
  secondaryText?: string;
}

export const NoDataCard: FC<NoDataCardProps> = ({
  action,
  actionElement,
  iconElement,
  noBorder,
  primaryText,
  secondaryIconElement,
  secondaryText,
}) => {
  const icon = actionElement ? (
    actionElement
  ) : (
    <BsCheckSquareFill className="self-center" />
  );
  return (
    <div
      className={[
        'bg-slate-50 p-2 rounded',
        noBorder ? '' : 'border-1 border-slate-200',
      ].join(' ')}
    >
      {iconElement ? (
        <div className="flex flex-1 flex-col items-center">{iconElement}</div>
      ) : null}
      <div className="flex flex-col items-center mt-2">
        <h2 className="text-slate-400 text-2xl">{primaryText}</h2>
        {secondaryText ? (
          <p className="text-slate-400 text-lg">{secondaryText}</p>
        ) : null}
      </div>
      {action ? (
        <div className="flex flex-col items-center mt-4">
          <IconButton icon={icon} onClick={action} />
        </div>
      ) : null}
      {secondaryIconElement && (
        <div className="flex items-center justify-center mt-4">
          {secondaryIconElement}
        </div>
      )}
    </div>
  );
};
