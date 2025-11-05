import React from 'react'
import { Link } from 'react-router-dom'
import products from '../data/products.json'

export default function Home(){
  return (
    <div>
      <section className="bg-white rounded-lg p-6 mb-6">
        <h1 className="text-3xl font-bold">BuildMart — Materials Delivered</h1>
        <p className="mt-2 text-gray-600">Shop cement, pipes, paints, tools and more. Contractor-friendly quotes.</p>
        <div className="mt-4">
          <Link to="/products" className="px-4 py-2 bg-yellow-500 text-black rounded">Browse Products</Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-4">
        {products.map(p => (
          <div key={p.id} className="bg-white rounded shadow p-4">
            <img src={p.img} alt={p.title} className="w-full h-36 object-cover rounded" />
            <h3 className="mt-2 font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-600">{p.category}</p>
            <div className="mt-3 flex items-center justify-between">
              <div className="font-bold">₹{p.price}</div>
              <Link to={`/product/${p.id}`} className="text-sm underline">View</Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
