import React from 'react';
import { Popover } from '@headlessui/react';
import { TransitionChildWrapper } from '~/components/shared/TransitionChildWrapper/TransitionChildWrapper';
import { MenuItem } from '~/components/buttons-and-controls/MenuItem/MenuItem';
import { BsBox } from 'react-icons/bs';

export const AdminMenu = (): React.ReactElement => {
  return (
    <Popover className="relative w-full">
      <Popover.Button>
        <p className="text-slate-100 text-xl hover:underline">More</p>
      </Popover.Button>
      <TransitionChildWrapper>
        <Popover.Panel className="absolute right-0 mt-7 w-full z-10">
          <div className="bg-slate-50 border-1 border-slate-300 p-2 rounded w-[18.75rem]">
            <div className="flex flex-col gap-y-2">
              <MenuItem iconElement={<BsBox />} itemText="Reports" />
              <MenuItem iconElement={<BsBox />} itemText="User Management" />
            </div>
          </div>
        </Popover.Panel>
      </TransitionChildWrapper>
    </Popover>
  );
};
