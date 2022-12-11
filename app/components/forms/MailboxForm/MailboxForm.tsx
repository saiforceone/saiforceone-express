import React from 'react';
import type { FC } from 'react';
import type { Mailbox } from '@prisma/client';
import type { CommonFormInterface } from '~/shared/interfaces/form.interface';
import { TransitionWrapper } from '~/components/shared/TransitionWrapper/TransitionWrapper';
import { Dialog } from '@headlessui/react';
import { TransitionChildWrapper } from '~/components/shared/TransitionChildWrapper/TransitionChildWrapper';
import { ModalContentWrapper } from '~/components/shared/ModalContentWrapper/ModalContentWrapper';
import { ModalHeader } from '~/components/shared/ModalHeader/ModalHeader';
import { User } from '@prisma/client';
import { Input } from '~/components/fields/Input/Input';

interface MailboxFormProps extends CommonFormInterface {
  mailbox?: Mailbox;
  user: User;
}

export const MailboxForm: FC<MailboxFormProps> = ({
  cancelAction,
  extraActions,
  mailbox,
  saveAction,
  title,
  user,
  visible,
}) => {
  return (
    <TransitionWrapper show={visible}>
      <Dialog onClose={cancelAction} open={visible}>
        <TransitionChildWrapper>
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        </TransitionChildWrapper>
        <TransitionChildWrapper>
          <div>
            <ModalContentWrapper>
              <Dialog.Panel className="mx-auto w-full md:w-4/5 rounded bg-white p-4 rounded">
                <ModalHeader
                  dismissAction={cancelAction}
                  title={`${mailbox ? 'Edit' : 'Create New'} Mailbox`}
                />
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <Input
                    disabled
                    fieldLabel="Mailbox Number"
                    placeholder="Mailbox Number (generated)"
                    value={mailbox?.id}
                  />
                  <Input
                    disabled
                    fieldLabel="User"
                    value={`${user.firstName} ${user.lastName}`}
                  />
                  <Input
                    fieldLabel="Address Line 1"
                    value={mailbox?.addressLine1}
                  />
                  <Input
                    fieldLabel="Address Line 2"
                    value={mailbox?.addressLine2}
                  />
                  <Input fieldLabel="Town / City" value={mailbox?.city} />
                  <Input fieldLabel="State" value={mailbox?.state} />
                  <Input fieldLabel="Country" value={mailbox?.country} />
                </div>
              </Dialog.Panel>
            </ModalContentWrapper>
          </div>
        </TransitionChildWrapper>
      </Dialog>
    </TransitionWrapper>
  );
};
