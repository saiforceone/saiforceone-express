import React from 'react';
import type { FC } from 'react';
import type { DisplayContent } from '~/types';

interface ListPageWrapperProps {
  contentLeft: React.ReactNode;
  contentRight: React.ReactElement;
  displayContent: DisplayContent;
}

const renderContent = (
  contentLeft: React.ReactNode,
  contentRight: React.ReactNode,
  displayContent: DisplayContent
): React.ReactNode => {
  const renderObjects: Record<DisplayContent, () => React.ReactNode> = {
    left: () => <div className="w-full">{contentLeft}</div>,
    right: () => <div className="w-full">{contentRight}</div>,
    both: () => (
      <div className="flex flex-1 h-screen">
        <div className="bg-slate-50 gap-y-2 px-2 md:w-1/3 flex flex-col w-full">
          {contentLeft}
        </div>
        <div className="bg-slate-100 flex flex-1">{contentRight}</div>
      </div>
    ),
  };
  return renderObjects[displayContent]();
};

export const ListPageWrapper: FC<ListPageWrapperProps> = ({
  contentLeft,
  contentRight,
  displayContent = 'both',
}) => {
  return <>{renderContent(contentLeft, contentRight, displayContent)}</>;
};
