import React from 'react';
import type { FC } from 'react';
import { Transition } from '@headlessui/react';
import type { TransitionClasses } from '@headlessui/react';

interface TransitionChildWrapperProps {
  children: React.ReactNode;
  transitionClasses?: TransitionClasses;
}

export const TransitionChildWrapper: FC<TransitionChildWrapperProps> = ({
  children,
  transitionClasses = {
    enter: 'ease-out duration-300',
    enterFrom: 'opacity-0',
    enterTo: 'opacity-100',
    leave: 'ease-in duration-200',
    leaveFrom: 'opacity-100',
    leaveTo: 'opacity-0',
  },
}) => {
  return (
    <Transition.Child as={React.Fragment} {...transitionClasses}>
      {children}
    </Transition.Child>
  );
};
