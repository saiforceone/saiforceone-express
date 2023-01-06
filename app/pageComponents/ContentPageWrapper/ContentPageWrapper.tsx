import React from 'react';
import type { FC } from 'react';

interface ContentPageWrapperProps {
  content: React.ReactNode;
}

export const ContentPageWrapper: FC<ContentPageWrapperProps> = ({
  content,
}) => {
  return <div className="flex flex-col flex-1">{content}</div>;
};
