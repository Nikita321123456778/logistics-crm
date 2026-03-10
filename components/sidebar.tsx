"use client"

import Link from "next/link"
import { LayoutDashboard, Truck, Users } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Sidebar() {
  const pathname = usePathname()

  const item = (href: string, icon: any, text: string) => {
    const Icon = icon

    return (
      <Link
        href={href}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
          pathname === href
            ? "bg-white text-black"
            : "text-gray-400 hover:text-white hover:bg-white/5"
        }`}
      >
        <Icon size={18} />
        {text}
      </Link>
    )
  }

  return (
    <div className="w-64 p-6 border-r border-white/10 min-h-screen">
      <h1 className="text-xl font-bold mb-10">Logistics CRM</h1>

      <div className="flex flex-col gap-2">
        {item("/dashboard", LayoutDashboard, "Dashboard")}
        {item("/orders", Truck, "Рейсы")}
        {item("/clients", Users, "Клиенты")}
      </div>
    </div>
  )
}