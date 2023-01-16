import React, { useCallback, useState } from 'react';
import type { FC } from 'react';
import { Form, useNavigate } from '@remix-run/react';
import { Input } from '~/components/fields/Input/Input';
import { IconButton } from '~/components/shared/IconButton/IconButton';
import { FaUndo } from 'react-icons/fa';
import type { SelectOption } from '~/shared/interfaces/uiElements.interface';
import { BasicButton } from '~/components/shared/BasicButton/BasicButton';
import { Select } from '~/components/fields/Select/Select';

interface ShipmentFilterProps {
  statusOptions: SelectOption[];
}

export const ShipmentFilter: FC<ShipmentFilterProps> = ({
  statusOptions = [],
}) => {
  const navigate = useNavigate();
  const [filterText, setFilterText] = useState('');

  const [selectedOption, setSelectedOption] = useState<string | undefined>();

  const resetFilters = useCallback(() => {
    console.log('reset filters or something...');
    setFilterText('');
    setSelectedOption('all');
    navigate('/app/shipments?filter=&status=');
  }, [navigate]);

  return (
    <div className="bg-slate-50 flex flex-col gap-y-2 p-2 rounded">
      <Form action="" method="get">
        <div className="flex items-center gap-x-4">
          <Input
            onChange={(e) => setFilterText(e.target.value)}
            name="filter"
            placeholder="Filter shipments"
            value={filterText}
          />
        </div>
        <Select
          name="status"
          onChange={(e) => setSelectedOption(e.target.value)}
          selectOptions={statusOptions}
          value={selectedOption}
        />
        <div className="flex flex-1 p-1 gap-x-2">
          <BasicButton
            overrideButtonClass="h-8 items-center justify-center w-full"
            title="Apply Filter"
            type="submit"
          />
          <IconButton
            icon={<FaUndo className="self-center" />}
            onClick={resetFilters}
          />
        </div>
      </Form>
    </div>
  );
};
