import React from 'react';
import type { FC } from 'react';

interface DashboardPageWrapperProps {
  content: React.ReactNode;
  title: string;
}

export const DashboardPageWrapper: FC<DashboardPageWrapperProps> = ({
  content,
  title,
}) => {
  return (
    <div className="flex flex-col gap-y-2">
      <h1 className="ml-0 font-light text-3xl">{title}</h1>
      {content}
    </div>
  );
};
