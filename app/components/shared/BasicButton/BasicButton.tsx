import React from "react";
import type { FC, ButtonHTMLAttributes } from "react";

interface BasicButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: React.ReactNode;
}

export const BasicButton: FC<BasicButtonProps> = ({icon, title, ...props}) => {
  return (
    <button className="flex bg-slate-800 text-white text-base py-2 px-3 rounded hover:bg-slate-700 duration-200" {...props}>
      {icon}
      <span>{title}</span>
    </button>
  );
};
