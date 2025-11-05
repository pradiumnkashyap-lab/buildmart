import React from 'react'
import { Link } from 'react-router-dom'
import products from '../data/products.json'

export default function Products(){
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">All Products</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {products.map(p => (
          <div key={p.id} className="bg-white rounded shadow p-4">
            <img src={p.img} alt={p.title} className="w-full h-36 object-cover rounded" />
            <h3 className="mt-2 font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-600">{p.desc}</p>
            <div className="mt-3 flex items-center justify-between">
              <div className="font-bold">₹{p.price}</div>
              <Link to={`/product/${p.id}`} className="px-3 py-1 bg-yellow-500 rounded text-black">Add / View</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
