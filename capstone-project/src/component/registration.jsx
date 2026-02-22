import { useState } from 'react'
import validation from './validation'

const Registration = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: ""
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validation(values))
    console.log(values)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <form
        onSubmit={handleSubmit}
        className="bg-black text-white shadow-lg rounded-lg p-8 w-8 max-w-md rectangle_black space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Signup Form</h2>

        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border rounded px-3 py-2"
            placeholder="Enter your name"
            onChange={handleChange}
            value={values.name}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border rounded px-3 py-2"
            placeholder="Enter your email"
            onChange={handleChange}
            value={values.email}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            name="password"
            className="w-full border rounded px-3 py-2"
            placeholder="Enter password"
            onChange={handleChange}
            value={values.password}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        <button className="w-full bg-blue-600 py-2 rounded hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Registration