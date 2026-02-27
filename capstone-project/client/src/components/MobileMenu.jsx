export default function MobileMenu({ open, setOpen }) {
  return (
    <div
      className={`fixed inset-0 bg-black/40 z-50 transition ${
        open ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={() => setOpen(false)}
    >
      <div
        className={`absolute left-0 top-0 h-full w-64 bg-white p-6 transform transition ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold text-blue-600 mb-6">
          TravelPro
        </h2>

        <nav className="flex flex-col gap-4 font-medium">
          <span>Flights</span>
          <span>Hotels</span>
          <span>Trips</span>
          <span>Settings</span>
        </nav>
      </div>
    </div>
  );
}