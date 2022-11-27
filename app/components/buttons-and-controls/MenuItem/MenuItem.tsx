import React from "react";
import type { FC } from "react";

interface MenuItemProps {
  disabled?: boolean;
  iconElement: React.ReactElement,
  itemText: string;
  onClick?: () => void;
}

export const MenuItem:FC<MenuItemProps> = ({disabled, iconElement, itemText, onClick}) => {
  return (
    <div
      className={[
        "flex w-full rounded duration-200 text-white items-center h-10 px-2",
        disabled ? "bg-slate-400 hover:bg-slate-400 cursor-not-allowed" : "bg-slate-800 hover:bg-slate-600 cursor-pointer",
      ].join(" ")}
      onClick={onClick}
    >
      {iconElement}
      <span className="text-lg ml-2">{itemText}</span>
    </div>
  );
};
