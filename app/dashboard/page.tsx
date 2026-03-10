"use client"

import { useState } from "react"
import { useOrderStore } from "@/store/orderStore"
import { Plus } from "lucide-react"

export default function Orders() {
  const { orders, addOrder, deleteOrder } = useOrderStore()

  const [open, setOpen] = useState(false)
  const [number, setNumber] = useState("")
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [price, setPrice] = useState("")
  const [search, setSearch] = useState("")

  const handleAdd = () => {
    if (!number || !from || !to) return

    addOrder({
      id: Date.now(),
      number,
      from,
      to,
      status: "Создан",
      price: Number(price),
    })

    setNumber("")
    setFrom("")
    setTo("")
    setPrice("")
    setOpen(false)
  }

  return (
    <div>
      <div className="flex justify-between mb-8">
        <h1 className="text-3xl font-bold">Рейсы</h1>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded hover:bg-gray-200"
        >
          <Plus size={18} />
          Создать рейс
        </button>
      </div>

      <input
        placeholder="Поиск рейса..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white/5 backdrop-blur border border-white/10 p-2 rounded mb-4"
      />

      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6">
        <table className="w-full">
          <thead>
            <tr className="text-gray-400 text-left">
              <th>Номер</th>
              <th>Откуда</th>
              <th>Куда</th>
              <th>Статус</th>
              <th>Цена</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {orders
              .filter((o) =>
                o.number.toLowerCase().includes(search.toLowerCase())
              )
              .map((o) => (
                <tr key={o.id} className="border-t border-white/10">
                  <td className="py-3">{o.number}</td>
                  <td>{o.from}</td>
                  <td>{o.to}</td>

                  <td>
                    <span
                      className={`px-3 py-1 rounded text-sm ${
                        o.status === "Создан"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : o.status === "В пути"
                          ? "bg-blue-500/20 text-blue-400"
                          : "bg-green-500/20 text-green-400"
                      }`}
                    >
                      {o.status}
                    </span>
                  </td>

                  <td>{o.price}€</td>

                  <td>
                    <button
                      onClick={() => deleteOrder(o.id)}
                      className="text-red-400 hover:text-red-300"
                    >
                      удалить
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-xl w-96">
            <h2 className="text-xl font-bold mb-4">Создать рейс</h2>

            <div className="flex flex-col gap-3">
              <input
                placeholder="Номер"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="bg-white/5 border border-white/10 p-2 rounded"
              />

              <input
                placeholder="Откуда"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="bg-white/5 border border-white/10 p-2 rounded"
              />

              <input
                placeholder="Куда"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="bg-white/5 border border-white/10 p-2 rounded"
              />

              <input
                placeholder="Цена"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="bg-white/5 border border-white/10 p-2 rounded"
              />

              <button
                onClick={handleAdd}
                className="bg-white text-black py-2 rounded hover:bg-gray-200"
              >
                Создать
              </button>

              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 text-sm"
              >
                отмена
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}