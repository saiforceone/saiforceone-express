import React from "react";
import type { FC, ButtonHTMLAttributes } from "react";
import MoonLoader from "react-spinners/MoonLoader";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactElement;
  loading?: boolean;
}

export const IconButton: FC<IconButtonProps> = ({ icon, loading, ...props }) => {
  return (
    <button 
      className={[
        "duration-300 flex justify-center rounded text-white h-8 w-8 p-0",
        props.disabled ? "bg-slate-500 hover:bg-slate-500 cursor-not-allowed" : "bg-slate-800 hover:bg-slate-600 cursor-pointer"
      ].join(" ")}
      {...props}
    >
      {loading ? <MoonLoader className="self-center" color="#ffffff" size={18} speedMultiplier={0.75} /> : icon}
    </button>
  );
};
