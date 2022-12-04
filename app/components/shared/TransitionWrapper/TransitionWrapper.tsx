import React from 'react';
import type { FC } from 'react';
import { Transition } from '@headlessui/react';

interface TransitionWrapperProps {
  children: React.ReactNode;
  show: boolean;
}

export const TransitionWrapper: FC<TransitionWrapperProps> = ({
  children,
  show,
}) => {
  return (
    <Transition as={React.Fragment} show={show}>
      {children}
    </Transition>
  );
};
