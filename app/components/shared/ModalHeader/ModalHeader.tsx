import React from 'react';
import type { FC } from 'react';
import { IconButton } from '~/components/shared/IconButton/IconButton';
import { BsX } from 'react-icons/all';

interface ModalHeaderProps {
  dismissAction: () => void;
  extraActions?: React.ReactNode;
  title: string;
}

export const ModalHeader: FC<ModalHeaderProps> = ({
  dismissAction,
  extraActions,
  title,
}) => {
  return (
    <div className="flex flex-1 items-center justify-between">
      <h1 className="ml-0 text-2xl text-slate-600">{title}</h1>
      {extraActions ? (
        <div className="flex flex-row items-center mr-1">{extraActions}</div>
      ) : null}
      <IconButton
        icon={<BsX className="self-center text-white" size={24} />}
        onClick={dismissAction}
      />
    </div>
  );
};
