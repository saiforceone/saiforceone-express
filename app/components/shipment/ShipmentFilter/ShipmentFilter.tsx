import React, { useCallback, useState } from 'react';
import type { FC } from 'react';
import { Input } from '~/components/fields/Input/Input';
import { IconButton } from '~/components/shared/IconButton/IconButton';
import { FaUndo } from 'react-icons/all';
import { SelectV2 } from '~/components/fields/SelectV2/SelectV2';
import type { SelectOption } from '~/shared/interfaces/uiElements.interface';

interface ShipmentFilterProps {
  statusOptions: SelectOption[];
}

export const ShipmentFilter: FC<ShipmentFilterProps> = ({
  statusOptions = [],
}) => {
  const [filterText, setFilterText] = useState('');

  const [selectedOption, setSelectedOption] = useState<
    SelectOption | undefined
  >();

  const resetFilters = useCallback(() => {
    setFilterText('');
    setSelectedOption(undefined);
  }, []);

  return (
    <div className="bg-slate-50 flex flex-col gap-y-2 p-2 rounded">
      <div className="flex items-center gap-x-4">
        <Input
          onChange={(e) => setFilterText(e.target.value)}
          placeholder="Filter shipments"
          value={filterText}
        />
        <IconButton
          icon={<FaUndo className="self-center" />}
          onClick={resetFilters}
        />
      </div>
      <SelectV2
        placeholder="Choose status"
        onSelectOption={(opt) => setSelectedOption(opt)}
        selectOptions={statusOptions}
        selectedOption={selectedOption}
      />
    </div>
  );
};
