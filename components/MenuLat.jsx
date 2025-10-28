import clsx from "clsx";
import Link from "next/link";

export default function MenuLat({ filters, currentFilter }) {
  return (
    <aside className="flex w-full flex-wrap gap-4 lg:max-w-[200px] lg:flex-col">
      <MenuItem currentFilter={currentFilter} filter="">
        All
      </MenuItem>
      {filters.map((filter) => (
        <MenuItem currentFilter={currentFilter} key={filter} filter={filter}>
          {filter}
        </MenuItem>
      ))}
    </aside>
  );
}

const MenuItem = ({ filter, children, currentFilter }) => {
  return (
    <>
      <Link
        href={`/?filter=${filter}`}
        className={clsx(
          "rounded-md px-2 py-1 capitalize transition-colors hover:bg-gray-200",
          {
            "font-bold": filter === currentFilter,
          }
        )}
      >
        {children}
      </Link>
    </>
  );
};
