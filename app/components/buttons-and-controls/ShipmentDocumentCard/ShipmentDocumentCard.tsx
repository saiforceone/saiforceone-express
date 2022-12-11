import React, { useCallback, useState } from 'react';
import type { FC } from 'react';
import type { ShipmentDocument } from '@prisma/client';
import { IconButton } from '~/components/shared/IconButton/IconButton';
import { BsFillFileEarmarkFill, BsX } from 'react-icons/all';
import { ConfirmDialog } from '~/components/dialogs/ConfirmDialog/ConfirmDialog';

interface ShipmentDocumentCardProps {
  deleteAction: () => void;
  extraCss?: string;
  shipmentDocument: ShipmentDocument;
}

export const ShipmentDocumentCard: FC<ShipmentDocumentCardProps> = ({
  deleteAction,
  extraCss,
  shipmentDocument,
}) => {
  const [showDeletePrompt, setShowDeletePrompt] = useState(false);

  const confirmDelete = useCallback(() => {
    deleteAction();
    setShowDeletePrompt(false);
  }, [shipmentDocument]);

  return (
    <div className={['bg-slate-100 flex rounded', extraCss].join(' ')}>
      <div className="bg-slate-400 flex flex-col w-14 justify-center">
        <BsFillFileEarmarkFill className="self-center text-white" size={24} />
      </div>
      <div className="flex flex-1 items-center p-2">
        <div className="flex flex-1 flex-col mr-1">
          <h3 className="text-lg text-slate-600 font-medium">
            {shipmentDocument.name}
          </h3>
          <p className="text-slate-400 text-sm font-bold">
            Uploaded: {shipmentDocument.createdAt.toDateString()}
          </p>
        </div>
        <IconButton
          icon={<BsX className="self-center text-white" size={24} />}
          onClick={() => setShowDeletePrompt(true)}
        />
      </div>
      <ConfirmDialog
        cancelAction={() => setShowDeletePrompt(false)}
        confirmAction={confirmDelete}
        promptText="You are about to delete this document, would you like to continue?"
        titleText={'Delete Document?'}
        visible={showDeletePrompt}
      />
    </div>
  );
};
