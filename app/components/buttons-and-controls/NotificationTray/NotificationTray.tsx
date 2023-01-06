import React from 'react';
import { Popover } from '@headlessui/react';
import type { FC } from 'react';
import type { NotificationItem } from '@prisma/client';
import { NotificationItemCard } from '~/components/buttons-and-controls/NotificationItemCard/NotificationItemCard';
import { BsBellFill } from 'react-icons/bs';
import { TransitionChildWrapper } from '~/components/shared/TransitionChildWrapper/TransitionChildWrapper';
import { NoDataCard } from '~/components/shared/NoDataCard/NoDataCard';
import Formatters from '~/utils/Formatters';

interface NotificationTrayProps {
  clearAllAction?: () => void;
  notificationItems: NotificationItem[];
}

export const NotificationTray: FC<NotificationTrayProps> = ({
  notificationItems,
}) => {
  return (
    <Popover className="relative">
      <Popover.Button>
        <BsBellFill className="text-slate-600" size={24} />
      </Popover.Button>
      <TransitionChildWrapper>
        <Popover.Panel className="absolute right-0 mt-7 z-10">
          <div className="bg-slate-50 border-1 border-slate-300 p-2 rounded w-[19.5rem]">
            {notificationItems.length ? (
              notificationItems.map((notification) => (
                <NotificationItemCard
                  key={`notification-${notification.id}`}
                  {...notification}
                  timeSince={Formatters.formatDate(notification.createdAt)}
                />
              ))
            ) : (
              <NoDataCard primaryText="No notifications" />
            )}
          </div>
        </Popover.Panel>
      </TransitionChildWrapper>
    </Popover>
  );
};
