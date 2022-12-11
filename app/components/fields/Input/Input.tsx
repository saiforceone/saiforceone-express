import React from 'react';
import type { FC, InputHTMLAttributes } from 'react';

import { FieldWrapper } from '~/components/fields/FieldWrapper/FieldWrapper';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  fieldError?: string;
  fieldLabel?: string;
}

export const Input: FC<InputProps> = ({ fieldError, fieldLabel, ...props }) => {
  return (
    <FieldWrapper
      disabled={props.disabled}
      field={
        <input
          {...props}
          className="h-10 border-1 border-slate-600 rounded px-2 w-full"
        />
      }
      fieldError={fieldError}
      fieldLabel={fieldLabel}
      fieldId={props.id}
      required={props.required}
    />
  );
};
