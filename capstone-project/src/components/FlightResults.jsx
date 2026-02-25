export default function FlightResults({ flights }) {
  return (
    <div className="mt-6 grid gap-4">
      {flights.map((flight, i) => (
        <div
          key={i}
          className="bg-white p-4 rounded-lg shadow flex justify-between"
        >
          <div>
            <p className="font-semibold">
              {flight.itineraries[0].segments[0].departure.iataCode}
              →
              {flight.itineraries[0].segments.slice(-1)[0].arrival.iataCode}
            </p>
            <p className="text-sm text-gray-500">
              Duration: {flight.itineraries[0].duration}
            </p>
          </div>
          <div className="font-bold text-blue-600">
            {flight.price.total} {flight.price.currency}
          </div>
        </div>
      ))}
    </div>
  );
}