import { BookOpenText, PlusCircle } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "./Button";
import { ReactSvg } from "./Header";

export const Item = ({ item, hideCategory }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-lg border p-4 shadow transition-colors hover:border-gray-300 hover:bg-gray-100">
      <div className="flex w-full items-center gap-2">
        <ReactSvg size={24} />
      </div>
      <p className="line-clamp-1 w-full overflow-hidden text-ellipsis text-center text-lg font-extrabold">
        {item.name}
      </p>

      <div className="flex w-full items-center gap-2">
        {hideCategory ? null : (
          <p className="line-clamp-1 text-start text-xs text-gray-400 ">
            {item.category}
          </p>
        )}
        <Link
          href={item.url}
          className={buttonVariants({
            variant: "secondary",
            className: "ml-auto",
          })}
        >
          <BookOpenText size={16} />
        </Link>
        <Button variant="secondary">
          <PlusCircle size={16} />
        </Button>
      </div>
    </div>
  );
};
