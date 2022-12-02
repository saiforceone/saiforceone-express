import React from "react";
import type {FC, SelectHTMLAttributes} from "react";

import {FieldWrapper} from "~/components/fields/FieldWrapper/FieldWrapper";

interface SelectOption {
  key: string;
  label: string;
  value?: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  fieldLabel?: string;
  selectOptions?: SelectOption[];
}

export const Select: FC<SelectProps> = ({fieldLabel, selectOptions, ...props}) => {
  return (
    <FieldWrapper
      field={
        <select
          {...props}
          className={[
            "h-10 border-1 border-slate-600 rounded px-2",
            props.disabled ? "cursor-not-allowed" : "cursor-pointer"
          ].join(" ")}
        >
          <option disabled value="">Choose</option>
          {selectOptions?.map(
            option => (
              <option key={option.key} value={option.value}>{option.label}</option>
            ))
          }
        </select>
      }
      fieldId={props.id}
      fieldLabel={fieldLabel}
    />
  );
};
