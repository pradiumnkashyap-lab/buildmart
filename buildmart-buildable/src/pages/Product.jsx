import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import products from '../data/products.json'

export default function Product(){
  const { id } = useParams()
  const navigate = useNavigate()
  const p = products.find(x => x.id === id)
  if(!p) return <div>Product not found</div>

  function addToCart(){
    const cart = JSON.parse(localStorage.getItem('bm_cart') || '[]')
    cart.push({ id: p.id, title: p.title, price: p.price, qty: 1 })
    localStorage.setItem('bm_cart', JSON.stringify(cart))
    navigate('/cart')
  }

  return (
    <div className="bg-white rounded p-4">
      <img src={p.img} alt={p.title} className="w-full h-56 object-cover rounded" />
      <h2 className="mt-3 text-2xl font-semibold">{p.title}</h2>
      <p className="text-gray-600 mt-1">{p.desc}</p>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-2xl font-bold">₹{p.price}</div>
        <button onClick={addToCart} className="px-4 py-2 bg-yellow-500 rounded text-black">Add to Cart</button>
      </div>
    </div>
  )
}
