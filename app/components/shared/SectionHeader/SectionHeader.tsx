import React from "react";
import type {FC} from "react";

interface SectionHeaderProps {
  iconElement?: React.ReactElement;
  heading: string;
}

export const SectionHeader: FC<SectionHeaderProps> = ({iconElement, heading}) => {
  return (
    <div className="border-b-1 border-slate-200 pb-2 flex flex-1 items-center">
      {iconElement}
      <h2 className="text-slate-600 text-2xl">{heading}</h2>
    </div>
  );
};
