import React from 'react';
import type { FC } from 'react';

interface SectionHeaderProps {
  iconElement?: React.ReactElement;
  heading: string;
  rightActions?: React.ReactNode;
}

export const SectionHeader: FC<SectionHeaderProps> = ({
  iconElement,
  heading,
  rightActions,
}) => {
  return (
    <div className="border-b-1 border-slate-200 pb-2 flex flex-1 items-center">
      <div className="flex flex-1">
        {iconElement}
        <h2 className="text-slate-600 text-2xl">{heading}</h2>
      </div>
      {rightActions ? (
        <div className="flex gap-x-2 ml-2">{rightActions}</div>
      ) : null}
    </div>
  );
};
