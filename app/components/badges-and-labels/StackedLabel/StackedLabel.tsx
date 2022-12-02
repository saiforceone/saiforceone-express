import React from "react";
import type {FC} from "react";

interface StackedLabelProps {
  labelText: string;
  valueText: string;
}

export const StackedLabel: FC<StackedLabelProps> = ({labelText, valueText}) => {
  return (
    <div>
      <p className="text-slate-600 -mb-1">{valueText}</p>
      <small className="text-xs text-slate-400 font-bold">{labelText}</small>
    </div>
  );
};
