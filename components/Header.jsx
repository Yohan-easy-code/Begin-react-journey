"use client";
import { ShoppingBasket } from "lucide-react";
import { User } from "lucide-react";
export default function Header() {
  return (
    <header className="bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <ReactSvg size={36} className="text-sky-400" />
        </div>

        {/* Icons */}
        <nav className="flex items-center gap-6 text-gray-900">
          <button
            aria-label="Panier"
            className="rounded-md p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <ShoppingBasket className="h-6 w-6" />
          </button>
          <button
            aria-label="Compte"
            className="rounded-md p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <User className="h-6 w-6" />
          </button>
        </nav>
      </div>
    </header>
  );
}

export const ReactSvg = ({ size, ...props }) => {
  return (
    <div className="flex align-middle items-center gap-2 ">
      <svg
        viewBox="-10.5 -9.45 21 18.9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="me-0 flex origin-center text-sm transition-all ease-in-out"
        style={{
          color: "#149ECA",
          width: size,
          height: size,
        }}
        {...props}
      >
        <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse rx="10" ry="4.5"></ellipse>
          <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
          <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
        </g>
      </svg>
      <h1 className="text-xl font-bold">ReactJourney</h1>
    </div>
  );
};
