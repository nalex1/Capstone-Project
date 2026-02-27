import { useState } from "react";

export default function SearchForm({ onSearch }) {
  const [form, setForm] = useState({
    from: "",
    to: "",
    date: "",
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(form);
      }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-white p-4 md:p-6 rounded-xl shadow"
    >
      <input
        className="border p-3 rounded-lg"
        placeholder="From (KGL)"
        onChange={(e) => setForm({ ...form, from: e.target.value })}
        required
      />

      <input
        className="border p-3 rounded-lg"
        placeholder="To (NBO)"
        onChange={(e) => setForm({ ...form, to: e.target.value })}
        required
      />

      <input
        type="date"
        className="border p-3 rounded-lg"
        onChange={(e) => setForm({ ...form, date: e.target.value })}
        required
      />

      <button className="bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Search Flights
      </button>
    </form>
  );
}