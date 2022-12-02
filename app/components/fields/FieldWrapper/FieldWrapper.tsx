import React from "react";
import type {FC} from "react";

interface FieldWrapperProps {
  disabled?: boolean;
  field: React.ReactNode;
  fieldId?: string;
  fieldLabel?: string | undefined;
}

export const FieldWrapper: FC<FieldWrapperProps> = ({disabled, field, fieldId, fieldLabel}) => {
  return (
    <div className="flex flex-col p-1 w-full">
      {
        fieldLabel
          ? (
            <label
              className={[
                "mb-1 text-sm uppercase duration-200",
                disabled ? "text-slate-400" : "text-slate-600"
              ].join(" ")}
              htmlFor={fieldId}
            >
              {fieldLabel}
            </label>
          )
          : null
      }
      {field}
    </div>
  );
};
