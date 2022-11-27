import type { FC } from "react";

interface UserProfileCardProps {
  accountType: string;
  initials: string;
  onClick?: () => void;
  username: string;
}

export const UserProfileCard: FC<UserProfileCardProps> = ({accountType, initials, onClick, username}) => {
  return (
    <div
      className="flex flex-1 bg-slate-200 hover:bg-slate-300 duration-300 items-center px-2 h-14 rounded"
      onClick={onClick}
      >
      <div className="flex bg-white h-10 w-10 rounded mr-2 items-center justify-center">
        <span className="font-bold text-lg text-slate-600">{initials}</span>
      </div>
      <div>
        <h3 className="text-base text-slate-800">{username}</h3>
        <p className="text-sm text-slate-500">{accountType}</p>
      </div>
    </div>
  );
};
