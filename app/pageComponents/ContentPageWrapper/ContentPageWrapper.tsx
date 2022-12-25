import React from 'react';
import type { FC } from 'react';

interface ContentPageWrapperProps {
  content: React.ReactNode;
}

export const ContentPageWrapper: FC<ContentPageWrapperProps> = ({
  content,
}) => {
  return <div className="p-2">{content}</div>;
};
