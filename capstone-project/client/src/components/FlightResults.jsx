export default function FlightResults({ flights }) {
  if (!flights.length)
    return (
      <p className="text-center text-gray-500 mt-6">
        No results yet. Search for flights above.
      </p>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {flights.map((f, i) => (
        <div key={i} className="bg-white p-4 rounded-xl shadow">
          <div className="flex justify-between mb-2">
            <span className="font-semibold">
              {f.itineraries[0].segments[0].departure.iataCode} →
              {f.itineraries[0].segments.slice(-1)[0].arrival.iataCode}
            </span>

            <span className="font-bold text-blue-600">
              {f.price.total} {f.price.currency}
            </span>
          </div>

          <div className="text-sm text-gray-500">
            Duration: {f.itineraries[0].duration}
          </div>
        </div>
      ))}
    </div>
  );
}