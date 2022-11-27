import type { FC, InputHTMLAttributes } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
}

export const Checkbox: FC<CheckboxProps> = ({ labelText, ...props }) => {
  return (
    <div className="flex w-fit p-2 items-center">
      <input {...props} className="h-6 w-6 mr-2 border-slate-600 duration-100" type="checkbox" />
      <span
        className={[
          "text-lg duration-100",
          props.disabled ? "text-gray-300" : "text-slate-600"
        ].join(" ")}
      >{labelText}</span>
    </div>
  );
};
