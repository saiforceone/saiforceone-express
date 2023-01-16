import type { SelectOption } from '~/shared/interfaces/uiElements.interface';

export const ShipmentDocTypes: SelectOption[] = [
  {
    key: 'invoice',
    label: 'Invoice',
    value: 'INVOICE',
  },
  {
    key: 'permit',
    label: 'Permit',
    value: 'PERMIT',
  },
  {
    key: 'other',
    label: 'Other',
    value: 'OTHER',
  },
];

export const ShipmentStatuses: SelectOption[] = [
  {
    key: 'all',
    label: 'All',
    value: '',
  },
  {
    key: 'received_warehouse',
    label: 'Received @ Warehouse',
    value: 'RECEIVED_WAREHOUSE',
  },
  {
    key: 'received_customs',
    label: 'Received @ Customs',
    value: 'RECEIVED_CUSTOMS',
  },
  {
    key: 'customs_detained',
    label: 'Detained by Customs',
    value: 'CUSTOMS_DETAINED',
  },
  {
    key: 'received_store',
    label: 'Received @ Pickup Location',
    value: 'RECEIVED_STORE',
  },
  {
    key: 'delivered',
    label: 'Delivered',
    value: 'DELIVERED',
  },
];
