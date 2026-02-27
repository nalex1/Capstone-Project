export default function Sidebar() {
  return (
    <aside className="p-6">
      <h2 className="text-xl font-bold text-blue-600 mb-8">
        TravelPro
      </h2>

      <nav className="flex flex-col gap-4 font-medium">
        <span className="p-2 rounded hover:bg-blue-50 cursor-pointer">
          ✈ Flights
        </span>
        <span className="p-2 rounded hover:bg-blue-50 cursor-pointer">
          🏨 Hotels
        </span>
        <span className="p-2 rounded hover:bg-blue-50 cursor-pointer">
          🗺 Trips
        </span>
        <span className="p-2 rounded hover:bg-blue-50 cursor-pointer">
          ⚙ Settings
        </span>
      </nav>
    </aside>
  );
}