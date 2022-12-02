import React from "react";
import type {FC, InputHTMLAttributes} from "react";

import {FieldWrapper} from "~/components/fields/FieldWrapper/FieldWrapper";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  fieldLabel?: string;
}

export const Input: FC<InputProps> = ({fieldLabel, ...props}) => {
  return (
    <FieldWrapper
      disabled={props.disabled}
      field={
        <input
          {...props}
          className="h-10 border-1 border-slate-600 rounded px-2"
        />
      }
      fieldLabel={fieldLabel}
      fieldId={props.id}
    />
  );
};
