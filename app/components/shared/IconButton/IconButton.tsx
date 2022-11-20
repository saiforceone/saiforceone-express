import React from "react";
import type { FC, ButtonHTMLAttributes } from "react";
import MoonLoader from "react-spinners/MoonLoader";

// const override: CSSProperties = {
//   color: "#f4f4f4",
//   margin: "0 auto",
// }

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactElement;
  loading?: boolean;
}

export const IconButton: FC<IconButtonProps> = ({ icon, loading, ...props }) => {
  return (
    <button className="bg-slate-900 flex justify-center rounded text-white h-8 w-8 p-0" {...props}>
      {loading ? <MoonLoader className="self-center" color="#ffffff" size={18} speedMultiplier={0.75} /> : icon}
    </button>
  );
};
