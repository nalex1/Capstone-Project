import { useState } from "react";
import axios from "axios";
import SearchForm from "../components/SearchForm";
import FlightResults from "../components/FlightResults";

export default function Home() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchFlights = async (form) => {
    try {
      setLoading(true);

      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/flights`,
        {
          params: {
            originLocationCode: form.from,
            destinationLocationCode: form.to,
            departureDate: form.date,
            adults: 1,
          },
        }
      );

      setFlights(res.data.data || []);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch flights");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <SearchForm onSearch={searchFlights} />

      {loading && (
        <p className="text-center mt-4 text-blue-600 font-semibold">
          Searching flights...
        </p>
      )}

      <FlightResults flights={flights} />
    </div>
  );
}