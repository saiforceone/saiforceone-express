import React, { useState } from 'react';
import type { FC } from 'react';
import { TransitionWrapper } from '~/components/shared/TransitionWrapper/TransitionWrapper';
import { Dialog } from '@headlessui/react';
import { TransitionChildWrapper } from '~/components/shared/TransitionChildWrapper/TransitionChildWrapper';
import { IconButton } from '~/components/shared/IconButton/IconButton';
import { BsPlus, BsUpload, BsX } from 'react-icons/all';
import { SectionHeader } from '~/components/shared/SectionHeader/SectionHeader';
import { Input } from '~/components/fields/Input/Input';
import { Select } from '~/components/fields/Select/Select';
import type { ShipmentDocument } from '@prisma/client';
import { NoDataCard } from '~/components/shared/NoDataCard/NoDataCard';
import { ShipmentDocumentCard } from '~/components/buttons-and-controls/ShipmentDocumentCard/ShipmentDocumentCard';
import { ShipmentDocTypes } from '~/constants';
import { ModalHeader } from '~/components/shared/ModalHeader/ModalHeader';

interface ShipmentDocumentModalProps {
  cancelAction: () => void;
  isUploading: boolean;
  shipmentDocuments: ShipmentDocument[];
  uploadAction: () => void;
  visible: boolean;
}

export const ShipmentDocumentModal: FC<ShipmentDocumentModalProps> = ({
  cancelAction,
  isUploading,
  shipmentDocuments,
  uploadAction,
  visible,
}) => {
  const [isAddingFile, setIsAddingFile] = useState(false);
  const [shipmentDocType, setShipmentDocType] = useState('');
  return (
    <TransitionWrapper show={visible}>
      <Dialog onClose={cancelAction} open={visible}>
        <TransitionChildWrapper>
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        </TransitionChildWrapper>
        <TransitionChildWrapper>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Dialog.Panel className="mx-auto rounded bg-white p-4 rounded w-full md:w-2/3">
                <div className="bg-white p-2">
                  <ModalHeader
                    dismissAction={cancelAction}
                    title="Manage Files"
                  />
                  <div className="mt-4">
                    <SectionHeader
                      heading={`Attached Documents`}
                      rightActions={
                        <>
                          <IconButton
                            icon={
                              <BsPlus
                                className="self-center text-white"
                                size={24}
                              />
                            }
                            onClick={() => setIsAddingFile(true)}
                          />
                        </>
                      }
                    />

                    {isAddingFile ? (
                      <div className="flex flex-col flex-1 bg-slate-50 justify-between mt-2 p-2 rounded">
                        <div className="flex flex-1 items-center justify-between">
                          <h2 className="text-lg text-slate-600">
                            Add new attachment
                          </h2>
                          <IconButton
                            icon={
                              <BsX
                                className="self-center text-white"
                                size={24}
                              />
                            }
                            onClick={() => setIsAddingFile(false)}
                          />
                        </div>
                        <div className="flex flex-1 flex-col md:flex-row items-center justify-between">
                          <div className="mr-2 flex flex-col flex-1">
                            <Input placeholder="Choose file..." type="file" />
                            <Select
                              fieldLabel="Document Type"
                              onChange={(e) =>
                                setShipmentDocType(e.target.value)
                              }
                              selectOptions={ShipmentDocTypes}
                              value={shipmentDocType}
                            />
                            {/*<Listbox*/}
                            {/*  onChange={(opt) => setShipmentDocType(opt)}*/}
                            {/*  value={shipmentDocType}*/}
                            {/*>*/}
                            {/*  <div className="relative mt-1">*/}
                            {/*    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">*/}
                            {/*      <span className="block truncate">*/}
                            {/*        {shipmentDocType}*/}
                            {/*      </span>*/}
                            {/*      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">*/}
                            {/*        <BsArrowDownUp*/}
                            {/*          className="h-5 w-5 text-gray-400"*/}
                            {/*          aria-hidden="true"*/}
                            {/*        />*/}
                            {/*      </span>*/}
                            {/*    </Listbox.Button>*/}
                            {/*    <Transition*/}
                            {/*      as={React.Fragment}*/}
                            {/*      leave="transition ease-in duration-100"*/}
                            {/*      leaveFrom="opacity-100"*/}
                            {/*      leaveTo="opacity-0"*/}
                            {/*    >*/}
                            {/*      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">*/}
                            {/*        {ShipmentDocTypes.map((docType) => (*/}
                            {/*          <Listbox.Option*/}
                            {/*            key={docType.label}*/}
                            {/*            className={({ active }) =>*/}
                            {/*              `relative cursor-default select-none py-2 pl-10 pr-4 ${*/}
                            {/*                active*/}
                            {/*                  ? 'bg-amber-100 text-amber-900'*/}
                            {/*                  : 'text-gray-900'*/}
                            {/*              }`*/}
                            {/*            }*/}
                            {/*            value={docType.value}*/}
                            {/*          >*/}
                            {/*            {({ selected }) => (*/}
                            {/*              <>*/}
                            {/*                <span*/}
                            {/*                  className={`block truncate ${*/}
                            {/*                    selected*/}
                            {/*                      ? 'font-medium'*/}
                            {/*                      : 'font-normal'*/}
                            {/*                  }`}*/}
                            {/*                >*/}
                            {/*                  {docType.label}*/}
                            {/*                </span>*/}
                            {/*                {selected ? (*/}
                            {/*                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">*/}
                            {/*                    <BsCheck*/}
                            {/*                      className="h-5 w-5"*/}
                            {/*                      aria-hidden="true"*/}
                            {/*                    />*/}
                            {/*                  </span>*/}
                            {/*                ) : null}*/}
                            {/*              </>*/}
                            {/*            )}*/}
                            {/*          </Listbox.Option>*/}
                            {/*        ))}*/}
                            {/*      </Listbox.Options>*/}
                            {/*    </Transition>*/}
                            {/*  </div>*/}
                            {/*</Listbox>*/}
                          </div>
                          <IconButton
                            icon={
                              <BsUpload className="self-center" size={24} />
                            }
                            onClick={uploadAction}
                          />
                        </div>
                      </div>
                    ) : null}
                    <div>
                      {shipmentDocuments?.length ? (
                        shipmentDocuments.map((doc) => (
                          <ShipmentDocumentCard
                            key={`doc-${doc.id}`}
                            deleteAction={() => {}}
                            extraCss="mt-2"
                            shipmentDocument={doc}
                          />
                        ))
                      ) : (
                        <NoDataCard primaryText="No documents have been uploaded" />
                      )}
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </TransitionChildWrapper>
      </Dialog>
    </TransitionWrapper>
  );
};
