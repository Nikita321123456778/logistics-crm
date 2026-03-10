"use client"

import { useOrderStore } from "@/store/orderStore"

export default function Home(){

const {orders}=useOrderStore()

const total=orders.length
const transit=orders.filter(o=>o.status==="В пути").length
const delivered=orders.filter(o=>o.status==="Доставлено").length

const load=total===0?0:Math.round((transit/total)*100)

const last=[...orders].reverse().slice(0,5)

return(

<div>

<h1 style={{fontSize:32,marginBottom:30}}>
Главная
</h1>

<div style={{
display:"flex",
gap:20,
marginBottom:40
}}>

<div className="card">
<p>Всего рейсов</p>
<h2>{total}</h2>
</div>

<div className="card">
<p>В пути</p>
<h2>{transit}</h2>
</div>

<div className="card">
<p>Доставлено</p>
<h2>{delivered}</h2>
</div>

<div className="card">
<p>Загруженность</p>
<h2>{load}%</h2>
</div>

</div>

<div className="card">

<h2 style={{marginBottom:20}}>
Последние рейсы
</h2>

<table>

<thead>
<tr>
<th>Номер</th>
<th>Откуда</th>
<th>Куда</th>
<th>Статус</th>
<th>Цена</th>
</tr>
</thead>

<tbody>

{last.map(o=>(
<tr key={o.id}>
<td>{o.number}</td>
<td>{o.from}</td>
<td>{o.to}</td>
<td>{o.status}</td>
<td>{o.price}€</td>
</tr>
))}

</tbody>

</table>

</div>

</div>

)
}