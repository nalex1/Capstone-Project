import { useState } from "react";
import SearchForm from "../components/SearchForm";
import FlightResults from "../components/FlightResults";
//import { api } from "../api/amadeus";

export default function Home() {
  const [flights, setFlights] = useState([]);

  const searchFlights = async (form) => {
    try {
      const res = await api.get("/flights", {
        params: form,
      });
      setFlights(res.data);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch flights");
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <SearchForm onSearch={searchFlights} />
      <FlightResults flights={flights} />
      
    </div>
  );
}