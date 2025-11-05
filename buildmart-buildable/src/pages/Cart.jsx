import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Cart(){
  const [cart, setCart] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('bm_cart') || '[]'))
  }, [])

  function updateQty(i, val){
    const c = [...cart]
    c[i].qty = Math.max(1, val)
    setCart(c)
    localStorage.setItem('bm_cart', JSON.stringify(c))
  }

  function remove(i){
    const c = [...cart]; c.splice(i,1)
    setCart(c)
    localStorage.setItem('bm_cart', JSON.stringify(c))
  }

  const total = cart.reduce((s, item) => s + item.price * item.qty, 0)

  if(cart.length === 0) return <div className="bg-white p-6 rounded">Your cart is empty. <Link to="/products" className="underline">Browse products</Link></div>

  return (
    <div className="bg-white p-4 rounded">
      <h2 className="text-xl font-semibold">Your Cart</h2>
      <div className="mt-4 space-y-3">
        {cart.map((it, idx) => (
          <div key={idx} className="flex items-center justify-between border rounded p-2">
            <div>
              <div className="font-medium">{it.title}</div>
            <div className="text-sm text-gray-600">₹{it.price} each</div>
            </div>
            <div className="flex items-center gap-2">
              <input type="number" value={it.qty} onChange={(e)=> updateQty(idx, parseInt(e.target.value||1))} className="w-16 p-1 border rounded" />
              <div className="font-bold">₹{it.price * it.qty}</div>
              <button onClick={()=>remove(idx)} className="px-2 py-1 bg-red-500 text-white rounded">Remove</button>
            </div>
          </div>
        ))}
      </div>

  <div className="mt-4 flex items-center justify-between">
    <div className="font-bold text-lg">Total: ₹{total}</div>
    <div>
      <button onClick={()=> navigate('/checkout')} className="px-4 py-2 bg-green-600 text-white rounded">Checkout</button>
    </div>
  </div>
    </div>
  )
}
