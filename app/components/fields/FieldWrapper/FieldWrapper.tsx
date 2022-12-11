import React from 'react';
import type { FC } from 'react';
import { BsExclamationOctagonFill } from 'react-icons/bs';

interface FieldWrapperProps {
  disabled?: boolean;
  field: React.ReactNode;
  fieldError?: string;
  fieldId?: string;
  fieldLabel?: string | undefined;
  required?: boolean;
}

export const FieldWrapper: FC<FieldWrapperProps> = ({
  disabled,
  field,
  fieldError,
  fieldId,
  fieldLabel,
  required = false,
}) => {
  return (
    <div className="flex flex-col p-1 w-full">
      {fieldLabel ? (
        <label
          className={[
            'mb-1 text-sm uppercase duration-200',
            disabled ? 'text-slate-400' : 'text-slate-600',
          ].join(' ')}
          htmlFor={fieldId}
        >
          {fieldLabel}
          {required ? <span className="ml-1 text-red-600">*</span> : null}
        </label>
      ) : null}
      {field}
      {fieldError ? (
        <div className="flex items-center mt-1">
          <BsExclamationOctagonFill className="text-slate-400" size={16} />
          <span className="font-medium ml-1 text-slate-400 text-sm uppercase">
            {fieldError}
          </span>
        </div>
      ) : null}
    </div>
  );
};
