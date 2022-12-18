import React from 'react';
import type { FC } from 'react';
import type { NotificationItem } from '@prisma/client';
import type { UserProfile } from '~/shared/interfaces/user.interface';
import { Disclosure, Popover } from '@headlessui/react';
import { BiMenu, BsBox, FaChartPie, FaCogs, FaUsersCog } from 'react-icons/all';
import { TransitionChildWrapper } from '~/components/shared/TransitionChildWrapper/TransitionChildWrapper';
import { MenuItem } from '~/components/buttons-and-controls/MenuItem/MenuItem';
import { UserProfileCard } from '~/components/buttons-and-controls/UserProfileCard/UserProfileCard';
import Formatters from '~/utils/Formatters';
import { StackedLabel } from '~/components/badges-and-labels/StackedLabel/StackedLabel';
import { TransitionWrapper } from '~/components/shared/TransitionWrapper/TransitionWrapper';

interface CompactMenuProps {
  notifications: NotificationItem[];
  userProfile: UserProfile;
}

// TODO: Fix this later :(
// const SlideTransitionOpts: TransitionClasses = {
//   enter: 'transition ease-in-out duration-300 transform',
//   enterFrom: '-translate-y-full opacity-0',
//   enterTo: 'opacity-100 translate-y-0 duration-300',
//   leave: 'transition ease-in-out duration-300 transform',
//   leaveFrom: 'translate-y-0 opacity-100',
//   leaveTo: 'opacity-0 -translate-y-full',
// };

export const CompactMenu: FC<CompactMenuProps> = ({
  notifications,
  userProfile,
}) => {
  return (
    <Popover className="relative w-full">
      <Popover.Button className="outline-0 w-full">
        <div className="flex flex-1 items-center justify-between w-full">
          <h1 className="ml-0 mr-1 text-slate-100">SaiForce Express</h1>
          <BiMenu className="text-slate-100" size={24} />
        </div>
      </Popover.Button>
      <TransitionChildWrapper>
        <Popover.Panel className="absolute right-0 mt-7 w-full z-10">
          <div className="bg-slate-50 border-1 border-slate-300 flex flex-col flex-1 gap-y-4 p-2 rounded w-full">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="z-10">
                    <UserProfileCard
                      accountType={userProfile.accountType}
                      initials={userProfile.initials}
                      username={`${userProfile.firstName} ${userProfile.lastName}`}
                    />
                  </Disclosure.Button>
                  <TransitionWrapper show={open}>
                    <div>
                      <TransitionChildWrapper>
                        <Disclosure.Panel>
                          <div className="flex flex-col gap-y-2 -z-1">
                            <StackedLabel
                              labelText="Last Login Date"
                              valueText={
                                userProfile.lastLoginDate
                                  ? Formatters.formatDate(
                                      userProfile.lastLoginDate
                                    )
                                  : 'N/A'
                              }
                            />
                            <MenuItem
                              iconElement={<BsBox />}
                              itemText="Mailboxes"
                            />
                            <MenuItem
                              iconElement={<FaCogs />}
                              itemText="Settings & Help"
                            />
                            <MenuItem
                              iconElement={<BsBox />}
                              itemText="Logout"
                            />
                          </div>
                        </Disclosure.Panel>
                      </TransitionChildWrapper>
                    </div>
                  </TransitionWrapper>
                </>
              )}
            </Disclosure>
            <hr />
            <div className="flex flex-col gap-y-2">
              <MenuItem iconElement={<BsBox />} itemText="Dashboard" />
              <MenuItem iconElement={<BsBox />} itemText="Shipments" />
              {userProfile.accountType === 'ADMIN' ? (
                <>
                  <MenuItem iconElement={<FaChartPie />} itemText="Reports" />
                  <MenuItem
                    iconElement={<FaUsersCog />}
                    itemText="Manage Users"
                  />
                </>
              ) : null}
            </div>
          </div>
        </Popover.Panel>
      </TransitionChildWrapper>
    </Popover>
  );
};
