import React from "react";
import type { FC } from "react";

interface LabelProps {
  iconElement: React.ReactElement,
  labelText: string;
}

export const Label: FC<LabelProps> = ({iconElement, labelText}) => {
  return (
    <div className="flex w-fit px-2 h-8 bg-slate-800 items-center text-white rounded">
      {iconElement}
      <span className="text-white text-lg ml-1">{labelText}</span>
    </div>
  );
};
