import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-2xl"
          >
            ☰
          </button>

          <span className="font-bold text-xl text-blue-600">
            TravelPro
          </span>
        </div>

        <nav className="hidden md:flex gap-6 font-medium">
          <span className="cursor-pointer hover:text-blue-600">Flights</span>
          <span className="cursor-pointer hover:text-blue-600">Hotels</span>
          <span className="cursor-pointer hover:text-blue-600">Trips</span>
        </nav>

        <div className="w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center">
          A
        </div>
      </header>

      <MobileMenu open={open} setOpen={setOpen} />
    </>
  );
}