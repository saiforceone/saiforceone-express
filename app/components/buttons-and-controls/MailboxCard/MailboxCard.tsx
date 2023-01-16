import React, { useState } from 'react';
import type { FC } from 'react';
import { BsBox, BsTrash } from 'react-icons/bs';
import { IconButton } from '~/components/shared/IconButton/IconButton';
import { StackedLabel } from '~/components/badges-and-labels/StackedLabel/StackedLabel';
import { ConfirmDialog } from '~/components/dialogs/ConfirmDialog/ConfirmDialog';
import type { CompositeMailboxListItem } from '~/types';
import { Label } from '~/components/badges-and-labels/Label/Label';

interface MailboxCardProps {
  mailBoxData: CompositeMailboxListItem;
  showDelete: boolean;
}

export const MailboxCard: FC<MailboxCardProps> = ({
  mailBoxData,
  showDelete,
}) => {
  const [promptDelete, setPromptDelete] = useState(false);
  return (
    <a href={`/app/mailboxes/${mailBoxData.id}`}>
      <div className="flex flex-col bg-slate-50 p-2 rounded">
        <div className="flex flex-1 items-center justify-between">
          <div className="flex flex-1 items-center">
            <h2 className="mr-2 text-lg uppercase">Mailbox </h2>
            <Label
              iconElement={<BsBox />}
              labelText={`${mailBoxData._count.shipments}`}
            />
          </div>
          {showDelete && (
            <div className="flex gap-x-2">
              <IconButton
                icon={<BsTrash className="self-center" />}
                onClick={() => setPromptDelete(true)}
              />
            </div>
          )}
        </div>

        <div className="flex gap-x-4 mt-2">
          <StackedLabel labelText="Unit #" valueText={mailBoxData.unitCode} />
          <div className="flex flex-1">
            <StackedLabel
              labelText="Address Line 1"
              valueText={mailBoxData.addressLine1}
            />
          </div>
        </div>
        <ConfirmDialog
          cancelAction={() => setPromptDelete(false)}
          confirmAction={() => {}}
          promptText={`You are about to delete the mailbox ${mailBoxData.unitCode}. This action is permanent. Would you like to continue?`}
          titleText="Delete Mailbox?"
          visible={promptDelete}
        />
      </div>
    </a>
  );
};
