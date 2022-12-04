import React from 'react';
import type { FC } from 'react';
import { Dialog } from '@headlessui/react';
import { BasicButton } from '~/components/shared/BasicButton/BasicButton';
import { TransitionChildWrapper } from '~/components/shared/TransitionChildWrapper/TransitionChildWrapper';
import { TransitionWrapper } from '~/components/shared/TransitionWrapper/TransitionWrapper';

interface ConfirmDialogProps {
  cancelAction: () => void;
  confirmAction: () => void;
  overrideCancelText?: string;
  overrideConfirmText?: string;
  promptText: string;
  titleText: string;
  visible: boolean;
}

export const ConfirmDialog: FC<ConfirmDialogProps> = ({
  cancelAction,
  confirmAction,
  overrideConfirmText,
  overrideCancelText,
  promptText,
  titleText,
  visible = false,
}) => {
  return (
    <TransitionWrapper show={visible}>
      <Dialog onClose={cancelAction} open={visible}>
        <TransitionChildWrapper>
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        </TransitionChildWrapper>
        <TransitionChildWrapper>
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="mx-auto max-w-sm rounded bg-white p-4 rounded">
              <div className="flex flex-col items-center">
                <Dialog.Title>
                  <h1 className="font-normal text-2xl text-slate-600 ml-0">
                    {titleText}
                  </h1>
                </Dialog.Title>
              </div>
              <div className="mt-2">
                <p className="text-center text-lg text-slate-600">
                  {promptText}
                </p>
              </div>
              <div className="flex flex-1 flex-col mt-6 items-center">
                <div className="flex">
                  <BasicButton
                    onClick={cancelAction}
                    overrideButtonClass="bg-slate-400 hover:bg-slate-500"
                    title={overrideCancelText ? overrideCancelText : 'Cancel'}
                  />
                  <BasicButton
                    onClick={confirmAction}
                    title={
                      overrideConfirmText ? overrideConfirmText : 'Confirm'
                    }
                  />
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </TransitionChildWrapper>
      </Dialog>
    </TransitionWrapper>
  );
};
