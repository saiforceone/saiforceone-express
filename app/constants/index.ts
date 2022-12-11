import type { SelectOption } from '~/components/fields/Select/Select';

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
