import React from 'react';
import type { FC } from 'react';
import type { UserProfile } from '~/shared/interfaces/user.interface';
import { Popover } from '@headlessui/react';
import { UserProfileCard } from '~/components/buttons-and-controls/UserProfileCard/UserProfileCard';
import { TransitionChildWrapper } from '~/components/shared/TransitionChildWrapper/TransitionChildWrapper';
import { MenuItem } from '~/components/buttons-and-controls/MenuItem/MenuItem';
import { BsBox } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';
import { FaCogs } from 'react-icons/fa';
import { StackedLabel } from '~/components/badges-and-labels/StackedLabel/StackedLabel';
import Formatters from '~/utils/Formatters';

interface UserOptionsTrayProps {
  userProfile: UserProfile;
}

export const UserOptionsTray: FC<UserOptionsTrayProps> = ({ userProfile }) => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className="outline-0">
            <div className="flex items-center">
              <div className="bg-slate-200 flex h-10 justify-center w-10 rounded">
                <span className="font-medium self-center text-lg">
                  {userProfile.initials}
                </span>
              </div>
              <div className="flex flex-col flex-1 ml-1">
                <p className="text-slate-600">
                  {userProfile.firstName} {userProfile.lastName}
                </p>
                <span className="font-medium ml-0 mt-0.5 text-slate-400 text-sm uppercase">
                  {userProfile.accountType}
                </span>
              </div>
            </div>
          </Popover.Button>
          <TransitionChildWrapper>
            <Popover.Panel className="absolute mt-4 right-0 z-10">
              <div className="bg-slate-50 border-1 border-slate-300 p-2 rounded w-[18.75rem]">
                <div className="flex flex-col gap-y-3">
                  <UserProfileCard
                    accountType={userProfile.accountType}
                    initials={userProfile.initials}
                    username={userProfile.firstName}
                  />
                  <StackedLabel
                    labelText="Last Login Date"
                    valueText={
                      userProfile.lastLoginDate
                        ? Formatters.formatDate(userProfile.lastLoginDate)
                        : 'N/A'
                    }
                  />
                  <hr />
                  <div className="flex flex-col gap-y-2">
                    <MenuItem iconElement={<BsBox />} itemText="Mailboxes" />
                    <MenuItem
                      iconElement={<FaCogs />}
                      itemText="Settings & Help"
                    />
                    <MenuItem iconElement={<BiLogOut />} itemText="Logout" />
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </TransitionChildWrapper>
        </>
      )}
    </Popover>
  );
};
