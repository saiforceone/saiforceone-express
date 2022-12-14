import React from 'react';
import type { FC } from 'react';
import type { NotificationItem } from '@prisma/client';
import type { UserProfile } from '~/shared/interfaces/user.interface';
import { UserOptionsTray } from '~/components/buttons-and-controls/UserOptionsTray/UserOptionsTray';
import { NotificationTray } from '~/components/buttons-and-controls/NotificationTray/NotificationTray';

interface MainMenuProps {
  userProfile: UserProfile;
  notifications: NotificationItem[];
}

export const MainMenu: FC<MainMenuProps> = ({ notifications, userProfile }) => {
  return (
    <div className="bg-slate-800 flex flex-1 items-center justify-between p-2 w-full">
      <div>
        <h1 className="ml-0 text-lg text-white">SaiForce Express Logistics</h1>
      </div>
      <div className="flex items-center gap-x-4">
        <NotificationTray notificationItems={notifications} />
        <UserOptionsTray userProfile={userProfile} />
      </div>
    </div>
  );
};
