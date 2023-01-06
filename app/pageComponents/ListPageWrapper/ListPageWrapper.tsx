import React from 'react';
import type { FC } from 'react';

interface ListPageWrapperProps {
  contentLeft: React.ReactNode;
  contentLeftHeader?: React.ReactNode;
  contentRight: React.ReactElement;
  pageTitle: string;
  showContentRightOnly: boolean;
  titleExtra?: React.ReactElement;
}

export const ListPageWrapper: FC<ListPageWrapperProps> = ({
  contentLeft,
  contentLeftHeader,
  contentRight,
  pageTitle,
  showContentRightOnly,
  titleExtra,
}) => {
  return (
    <div className="flex flex-1 h-screen">
      <div
        className={[
          'bg-slate-50 gap-y-2 px-2 w-full md:w-2/5',
          showContentRightOnly ? 'hidden' : 'flex flex-col',
        ].join(' ')}
      >
        <div className="flex items-center p-1 justify-between">
          <h1 className="ml-0 font-light text-3xl">{pageTitle}</h1>
          {titleExtra}
        </div>
        {contentLeftHeader}
        <hr />
        <div className="bg-white flex flex-col flex-grow gap-y-4 overflow-y-scroll p-1">
          {contentLeft}
        </div>
      </div>
      <div
        className={[
          'bg-slate-100 flex flex-1',
          // showContentRightOnly ? 'flex' : 'hidden',
        ].join(' ')}
      >
        {contentRight}
      </div>
    </div>
  );
};
