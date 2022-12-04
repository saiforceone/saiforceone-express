import React from 'react';
import type { FC, ButtonHTMLAttributes } from 'react';

interface BasicButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  overrideButtonClass?: string;
  title: string;
}

export const BasicButton: FC<BasicButtonProps> = ({
  icon,
  overrideButtonClass,
  title,
  ...props
}) => {
  return (
    <button
      className={[
        'flex bg-slate-800 text-white text-base py-2 px-3 rounded hover:bg-slate-700 duration-200',
        overrideButtonClass,
      ].join(' ')}
      {...props}
    >
      {icon}
      <span>{title}</span>
    </button>
  );
};
