import "./globals.css"
import Link from "next/link"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>

        <div className="app">

          <aside className="sidebar">

            <h2 className="logo">Logistics CRM</h2>

            <nav className="nav">

              <Link href="/">Главная</Link>
              <Link href="/orders">Рейсы</Link>
              <Link href="/clients">Клиенты</Link>

            </nav>

          </aside>

          <main className="content">
            {children}
          </main>

        </div>

      </body>
    </html>
  )
}