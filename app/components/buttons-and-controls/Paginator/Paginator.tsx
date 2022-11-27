import type { FC } from "react";

import { IconButton } from "~/components/shared/IconButton/IconButton";
import { BsChevronDoubleLeft, BsChevronDoubleRight, BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface PaginatorProps {
  count: number;
  firstAction?: () => void;
  from: number;
  lastAction?: () => void;
  nextAction: () => void;
  nextActionDisabled?: boolean;
  prevAction: () => void;
  prevActionDisabled?: boolean;
  resultTo: number;
  showFirstAndLast: boolean;
}

export const Paginator: FC<PaginatorProps> = ({
  count,
  from,
  nextAction,
  nextActionDisabled,
  prevAction,
  prevActionDisabled,
  resultTo,
  showFirstAndLast
}) => {
  return (
    <div className="flex flex-1 items-center justify-between">
      <div className="flex flex-1">
        <span className="text-slate-600 font-medium text-lg">Showing {from} - {resultTo} of {count}</span>
      </div>
      <div className="flex items-center self-end">
        {showFirstAndLast ? <IconButton disabled={prevActionDisabled} icon={<BsChevronDoubleLeft className="self-center" />} /> : null}
        <IconButton
          disabled={prevActionDisabled}
          icon={<BsChevronLeft className="self-center" />}
          onClick={prevAction}
        />
        <IconButton
          disabled={nextActionDisabled}
          icon={<BsChevronRight className="self-center" />}
          onClick={nextAction}
        />
        {showFirstAndLast ? <IconButton disabled={nextActionDisabled} icon={<BsChevronDoubleRight className="self-center" />} /> : null}
      </div>
    </div>
  );
};
