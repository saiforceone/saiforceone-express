import React from 'react';
import type { FC } from 'react';

interface ModalContentWrapperProps {
  children: React.ReactNode;
}

export const ModalContentWrapper: FC<ModalContentWrapperProps> = ({
  children,
}) => {
  return (
    <div className="fixed inset-0 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        {children}
      </div>
    </div>
  );
};
