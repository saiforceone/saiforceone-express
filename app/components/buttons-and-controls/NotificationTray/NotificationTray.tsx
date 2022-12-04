import React from 'react';
import { Popover } from '@headlessui/react';
import type { FC } from 'react';
import type { NotificationItem } from '@prisma/client';
import { NotificationItemCard } from '~/components/buttons-and-controls/NotificationItemCard/NotificationItemCard';
import { BsBellFill } from 'react-icons/all';
import { TransitionChildWrapper } from '~/components/shared/TransitionChildWrapper/TransitionChildWrapper';
import { NoDataCard } from '~/components/shared/NoDataCard/NoDataCard';

interface NotificationTrayProps {
  clearAllAction?: () => void;
  notificationItems: NotificationItem[];
}

export const NotificationTray: FC<NotificationTrayProps> = ({
  notificationItems,
}) => {
  return (
    <Popover>
      <Popover.Button>
        <BsBellFill className="text-slate-600" size={24} />
      </Popover.Button>
      <TransitionChildWrapper>
        <Popover.Panel>
          <div className="bg-gray-50 mt-2 p-2 rounded">
            {notificationItems.length ? (
              notificationItems.map((notification) => (
                <NotificationItemCard
                  key={`notification-${notification.id}`}
                  {...notification}
                  timeSince={notification.createdAt.toTimeString()}
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
