import React from 'react';
import type { FC } from 'react';

interface CardWrapperProps {
  cardActions?: React.ReactNode;
  cardHeader?: React.ReactNode;
  children: React.ReactNode;
}

export const CardWrapper: FC<CardWrapperProps> = ({
  cardActions,
  children,
  cardHeader,
}) => {
  return (
    <div className="bg-slate-50 border-1 border-slate-200 p-2 rounded">
      {cardHeader ? <div className="flex flex-1 p-1">{cardHeader}</div> : null}
      <div>{children}</div>
      {cardActions ? <div className="flex flex-1">{cardActions}</div> : null}
    </div>
  );
};
