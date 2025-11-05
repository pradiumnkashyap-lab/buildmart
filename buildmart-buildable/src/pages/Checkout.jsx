import React, { useState } from 'react'

export default function Checkout(){
  const [form, setForm] = useState({name:'',phone:'',address:'',city:''})
  const cart = JSON.parse(localStorage.getItem('bm_cart') || '[]')
  const total = cart.reduce((s, item) => s + item.price * item.qty, 0)

  function submit(e){
    e.preventDefault()
    const text = encodeURIComponent(`New Order from ${form.name}\nPhone: ${form.phone}\nCity: ${form.city}\nAddress: ${form.address}\nTotal: ₹${total}\nItems: ${cart.map(i=> i.title + ' x'+i.qty).join(', ')}`)
    window.open(`https://wa.me/919999999999?text=${text}`, '_blank')
  }

  return (
    <div className="bg-white p-6 rounded">
      <h2 className="text-2xl font-semibold">Checkout</h2>
      <form onSubmit={submit} className="mt-4 grid gap-3">
        <input required value={form.name} onChange={e=> setForm({...form, name:e.target.value})} placeholder="Name / Company" className="border p-2 rounded" />
        <input required value={form.phone} onChange={e=> setForm({...form, phone:e.target.value})} placeholder="Phone" className="border p-2 rounded" />
        <input value={form.city} onChange={e=> setForm({...form, city:e.target.value})} placeholder="City" className="border p-2 rounded" />
        <textarea value={form.address} onChange={e=> setForm({...form, address:e.target.value})} placeholder="Delivery Address" className="border p-2 rounded" rows={3} />
        <div className="flex items-center justify-between">
          <div className="font-bold">Total: ₹{total}</div>
          <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Send Order via WhatsApp</button>
        </div>
      </form>
    </div>
  )
}
