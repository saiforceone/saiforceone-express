import React, { useCallback, useEffect, useState } from 'react';
import type { Mailbox, User } from '@prisma/client';
import type { FC } from 'react';
import { TransitionWrapper } from '~/components/shared/TransitionWrapper/TransitionWrapper';
import { SectionHeader } from '~/components/shared/SectionHeader/SectionHeader';
import { BasicButton } from '~/components/shared/BasicButton/BasicButton';
import { Dialog } from '@headlessui/react';
import { TransitionChildWrapper } from '~/components/shared/TransitionChildWrapper/TransitionChildWrapper';
import { Input } from '~/components/fields/Input/Input';
import { Checkbox } from '~/components/fields/Checkbox/Checkbox';
import { IconButton } from '~/components/shared/IconButton/IconButton';
import { BsPlus } from 'react-icons/all';
import { NoDataCard } from '~/components/shared/NoDataCard/NoDataCard';
import { ModalHeader } from '~/components/shared/ModalHeader/ModalHeader';
import type { CommonFormInterface } from '~/shared/interfaces/form.interface';
import { ModalContentWrapper } from '~/components/shared/ModalContentWrapper/ModalContentWrapper';
import { ConfirmDialog } from '~/components/dialogs/ConfirmDialog/ConfirmDialog';
import { MailboxCard } from '~/components/buttons-and-controls/MailboxCard/MailboxCard';

interface UserFormProps extends CommonFormInterface {
  mailboxes: Mailbox[];
  saveAction: (data: unknown) => void;
  userData?: User;
}

export const UserForm: FC<UserFormProps> = ({
  cancelAction,
  mailboxes,
  saveAction,
  userData,
  visible = false,
}) => {
  const [promptNewMailbox, setPromptNewMailbox] = useState(false);

  // on component load, copy user data
  useEffect(() => {
    // copy the data from UserData
  }, []);

  const executeSave = useCallback(() => {
    // TODO: add validation for user data object
    // Call save
    saveAction(userData);
  }, [saveAction, userData]);
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
                <div className="bg-white flex flex-col gap-y-2">
                  <ModalHeader
                    dismissAction={cancelAction}
                    title={`${userData ? 'Edit' : 'New'} User Account`}
                  />
                  <SectionHeader heading="General Information" />
                  <div className="grid grid-cols-1 md:grid-cols-2 justify-between">
                    <div className="flex flex-1">
                      <Checkbox
                        checked={userData?.accountType === 'CUSTOMER'}
                        disabled={!!userData}
                        labelText="Customer / Normal User"
                      />
                    </div>
                    <div className="flex flex-1">
                      <Checkbox
                        checked={userData?.accountType === 'STAFF'}
                        disabled={!!userData}
                        labelText="Admin / Staff"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2  justify-between">
                    <Input
                      fieldLabel="First / Given Name"
                      placeholder="Type the user's first name..."
                      value={userData?.firstName}
                    />
                    <Input
                      fieldLabel="Last Name / Surname"
                      placeholder="Type the user's last name..."
                      value={userData?.lastName}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2  justify-between mt-2">
                    <Input
                      fieldLabel="Email Address"
                      placeholder="Type an email address..."
                      type="email"
                      value={userData?.emailAddress}
                    />
                    <Input
                      fieldLabel="Password"
                      placeholder="********"
                      type="password"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-y-2 mt-4">
                  {userData?.accountType === 'CUSTOMER' ? (
                    <>
                      <SectionHeader
                        heading="Mailboxes (for non staff users)"
                        rightActions={
                          <>
                            {userData ? (
                              <IconButton
                                icon={
                                  <BsPlus
                                    className="self-center text-white"
                                    size={24}
                                  />
                                }
                                onClick={() => setPromptNewMailbox(true)}
                              />
                            ) : null}
                          </>
                        }
                      />
                      <div className="mt-4">
                        {mailboxes?.length ? (
                          mailboxes.map((mailbox) => (
                            <MailboxCard mailBoxData={mailbox} />
                          ))
                        ) : (
                          <NoDataCard primaryText="No mailboxes have been added" />
                        )}
                      </div>
                    </>
                  ) : null}
                </div>
                <div className="flex flex-col items-center mt-4">
                  <BasicButton
                    onClick={executeSave}
                    title="Save User Account"
                  />
                </div>
              </Dialog.Panel>
            </ModalContentWrapper>
            <ConfirmDialog
              cancelAction={() => setPromptNewMailbox(false)}
              confirmAction={() => {}}
              promptText="You are about to add a new mailbox for this user account. Would you like to continue?"
              titleText="Add New Mailbox"
              visible={promptNewMailbox}
            />
          </div>
        </TransitionChildWrapper>
      </Dialog>
    </TransitionWrapper>
  );
};
