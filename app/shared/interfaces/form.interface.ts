import type { ReactNode } from 'react';

export interface CommonFormInterface {
  cancelAction: () => void;
  extraActions?: ReactNode;
  saveAction: Function;
  title: string;
  visible: boolean;
}
