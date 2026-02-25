import { useState } from "react";
import SearchForm from "../components/SearchForm";
import FlightResults from "../components/FlightResults";
import { amadeusRequest } from "../api/amadeus";
import Registration from "../components/registration";

export default function Home() {
  const [flights, setFlights] = useState([]);

  const searchFlights = async (data) => {
    const res = await amadeusRequest("/v2/shopping/flight-offers", {
      originLocationCode: data.from,
      destinationLocationCode: data.to,
      departureDate: data.date,
      adults: 1,
    });

    setFlights(res.data.data);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Travel Search App
      </h1>

      <SearchForm onSearch={searchFlights} />

      <FlightResults flights={flights} />
      <Registration />
    </div>
  );
}