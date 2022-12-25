import React from 'react';
import type { FC } from 'react';
import { Listbox } from '@headlessui/react';
import { FieldWrapper } from '~/components/fields/FieldWrapper/FieldWrapper';
import type { SelectOption } from '~/shared/interfaces/uiElements.interface';
import { BsCheck2, BsChevronExpand } from 'react-icons/all';

interface SelectV2Props {
  disabled?: boolean;
  fieldLabel?: string;
  onSelectOption: (opt: SelectOption) => void;
  placeholder: string;
  required?: boolean;
  selectOptions: SelectOption[];
  selectedOption?: SelectOption;
}

export const SelectV2: FC<SelectV2Props> = ({
  disabled,
  fieldLabel,
  onSelectOption,
  placeholder,
  required,
  selectOptions,
  selectedOption,
}) => {
  const ListElement: React.ReactNode = (
    <Listbox
      as="div"
      className="relative"
      disabled={disabled}
      onChange={onSelectOption}
      value={selectedOption}
    >
      <Listbox.Button className="cursor-pointer w-full">
        <div className="bg-white flex flex-1 h-10 items-center justify-between p-2 rounded">
          <span>{selectedOption ? selectedOption.label : placeholder}</span>
          <BsChevronExpand className="text-slate-600" size={20} />
        </div>
      </Listbox.Button>
      <Listbox.Options className="absolute bg-white border-slate-100 border-2 mt-2 outline-0 p-1 rounded w-full z-10">
        {selectOptions.map((option) => (
          <Listbox.Option key={option.key} value={option}>
            {({ active, selected }) => (
              <div
                className={[
                  'flex items-center h-8 mt-1 justify-between rounded p-1',
                  `${
                    active
                      ? 'bg-slate-50 text-slate-600'
                      : 'bg-white text-slate-400'
                  }`,
                ].join(' ')}
              >
                {option.label}
                {selected && <BsCheck2 />}
              </div>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );

  return (
    <FieldWrapper
      disabled={disabled}
      fieldLabel={fieldLabel}
      field={ListElement}
      required={required}
    />
  );
};
