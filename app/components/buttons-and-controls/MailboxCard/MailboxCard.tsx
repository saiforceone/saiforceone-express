import React, { useState } from 'react';
import type { FC } from 'react';
import type { Mailbox } from '@prisma/client';
import { BsTrash } from 'react-icons/all';
import { IconButton } from '~/components/shared/IconButton/IconButton';
import { StackedLabel } from '~/components/badges-and-labels/StackedLabel/StackedLabel';
import { ConfirmDialog } from '~/components/dialogs/ConfirmDialog/ConfirmDialog';

interface MailboxCardProps {
  mailBoxData: Mailbox;
}

export const MailboxCard: FC<MailboxCardProps> = ({ mailBoxData }) => {
  const [promptDelete, setPromptDelete] = useState(false);
  return (
    <div className="flex flex-col bg-slate-50 p-2 rounded">
      <div className="flex flex-1 items-center justify-between">
        <h2 className="text-lg uppercase">Mailbox</h2>
        <div className="flex gap-x-2">
          <IconButton
            icon={<BsTrash className="self-center" />}
            onClick={() => setPromptDelete(true)}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
        <div className="flex flex-1">
          <StackedLabel labelText="Unit #" valueText={mailBoxData.unitCode} />
        </div>
        <div className="flex flex-1">
          <StackedLabel
            labelText="Address Line 1"
            valueText={mailBoxData.addressLine1}
          />
        </div>
        <div className="flex flex-1">
          <StackedLabel
            labelText="Address Line 2"
            valueText={
              mailBoxData.addressLine2 ? mailBoxData.addressLine2 : 'N/A'
            }
          />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
        <StackedLabel labelText="ZipCode" valueText={mailBoxData.zipCode} />
        <StackedLabel labelText="State" valueText={mailBoxData.state} />
        <StackedLabel labelText="City" valueText={mailBoxData.city} />
        <StackedLabel labelText="Country" valueText={mailBoxData.country} />
      </div>
      <ConfirmDialog
        cancelAction={() => setPromptDelete(false)}
        confirmAction={() => {}}
        promptText={`You are about to delete the mailbox ${mailBoxData.unitCode}. This action is permanent. Would you like to continue?`}
        titleText="Delete Mailbox?"
        visible={promptDelete}
      />
    </div>
  );
};
