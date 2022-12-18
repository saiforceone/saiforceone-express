import React from 'react';
import type { FC } from 'react';
import type { NotificationItem } from '@prisma/client';
import type { UserProfile } from '~/shared/interfaces/user.interface';
import { UserOptionsTray } from '~/components/buttons-and-controls/UserOptionsTray/UserOptionsTray';
import { NotificationTray } from '~/components/buttons-and-controls/NotificationTray/NotificationTray';
import { CompactMenu } from '~/components/nav/CompactMenu/CompactMenu';
import { AdminMenu } from '~/components/nav/AdminMenu/AdminMenu';

interface MainMenuProps {
  userProfile: UserProfile;
  notifications: NotificationItem[];
}

export const MainMenu: FC<MainMenuProps> = ({ notifications, userProfile }) => {
  return (
    <div className="bg-slate-800 flex flex-1 items-center md:justify-between p-2 w-full">
      <div className="hidden md:flex md:flex-1 md:justify-between">
        <h1 className="ml-0 self-center text-lg text-white">
          SaiForce Express Logistics
        </h1>
        <div className="flex items-center gap-x-4">
          <a className="text-white text-xl hover:underline" href="/dashboard">
            Dashboard
          </a>
          <a className="text-white text-xl hover:underline" href="/shipments">
            Shipments
          </a>
          {userProfile.accountType === 'ADMIN' ? <AdminMenu /> : null}
        </div>
        <div className="md:flex hidden items-center gap-x-4">
          <NotificationTray notificationItems={notifications} />
          <UserOptionsTray userProfile={userProfile} />
        </div>
      </div>
      <div className="flex flex-1 md:hidden">
        <CompactMenu notifications={notifications} userProfile={userProfile} />
      </div>
    </div>
  );
};
