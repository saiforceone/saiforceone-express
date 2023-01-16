import { db } from '~/utils/db.server';
import type { CompositeMailbox, CompositeMailboxListItem } from '~/types';

export const getMailboxesForUser = async (
  userId: string
): Promise<CompositeMailboxListItem[]> => {
  return await db.mailbox.findMany({
    where: {
      userId,
    },
    include: {
      _count: {
        select: { shipments: true },
      },
    },
  });
};

export const getMailboxById = async (
  mailboxId: string
): Promise<CompositeMailbox | null> => {
  return await db.mailbox.findFirst({
    where: {
      id: mailboxId,
    },
    include: {
      _count: {
        select: { shipments: true },
      },
      shipments: true,
    },
  });
};
