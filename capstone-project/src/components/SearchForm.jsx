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
      className="bg-white p-6 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-4 gap-4"
    >
      <input
        placeholder="From (e.g. KGL)"
        className="border p-2 rounded"
        onChange={(e) => setForm({ ...form, from: e.target.value })}
      />

      <input
        placeholder="To (e.g. NBO)"
        className="border p-2 rounded"
        onChange={(e) => setForm({ ...form, to: e.target.value })}
      />

      <input
        type="date"
        className="border p-2 rounded"
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />

      <button className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700">
        Search Flights
      </button>
    </form>
  );
}