import { Item } from "@/components/Card";
import Header from "@/components/Header";
import MenuLat from "@/components/MenuLat";
import { REACT_CARDS } from "@/components/React-card";

export default async function Home({ searchParams }) {
  const params = await searchParams;
  const currentFilter = params?.filter ?? "";
  const filters = [...new Set(REACT_CARDS.map((c) => c.category))];

  return (
    <>
      <main className="m-auto flex h-full max-w-4xl flex-col px-4">
        <Header />
        <div className="mb-4 mt-8 flex flex-1 gap-4 overflow-auto max-lg:flex-col">
          <MenuLat filters={filters} currentFilter={currentFilter} />
          <div className="size-full overflow-auto">
            <div className="grid h-fit w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {REACT_CARDS.filter((card) => {
                if (!currentFilter) return true;
                return card.category === currentFilter;
              }).map((card) => (
                <Item
                  hideCategory={Boolean(currentFilter)}
                  key={card.name}
                  item={card}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
