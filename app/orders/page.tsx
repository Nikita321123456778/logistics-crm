"use client"

import {useState} from "react"
import {useOrderStore} from "@/store/orderStore"

export default function Orders(){

const {orders,addOrder,deleteOrder}=useOrderStore()

const [open,setOpen]=useState(false)

const [number,setNumber]=useState("")
const [from,setFrom]=useState("")
const [to,setTo]=useState("")
const [price,setPrice]=useState("")
const [status,setStatus]=useState("Создан")

const [search,setSearch]=useState("")

function create(){

if(!number||!from||!to)return

addOrder({
id:Date.now(),
number,
from,
to,
status,
price:Number(price)
})

setNumber("")
setFrom("")
setTo("")
setPrice("")
setStatus("Создан")

setOpen(false)

}

return(

<div>

<h1 style={{fontSize:32,marginBottom:20}}>
Рейсы
</h1>

<button
className="btn"
onClick={()=>setOpen(true)}
style={{marginBottom:20}}
>
+ Добавить
</button>

<input
placeholder="Поиск рейса..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="input"
style={{marginBottom:20}}
/>

<div className="card">

<table>

<thead>
<tr>
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
.filter(o=>o.number.toLowerCase().includes(search.toLowerCase()))
.map(o=>(

<tr key={o.id}>

<td>{o.number}</td>
<td>{o.from}</td>
<td>{o.to}</td>
<td>{o.status}</td>
<td>{o.price}€</td>

<td>
<button
onClick={()=>deleteOrder(o.id)}
className="btn-delete"
>
удалить
</button>
</td>

</tr>

))}

</tbody>

</table>

</div>

{/* модалка */}

{open&&(

<div className="modal">

<div className="modal-box">

<h2 style={{marginBottom:20}}>
Создать рейс
</h2>

<input
placeholder="Номер"
value={number}
onChange={(e)=>setNumber(e.target.value)}
className="input"
/>

<input
placeholder="Откуда"
value={from}
onChange={(e)=>setFrom(e.target.value)}
className="input"
/>

<input
placeholder="Куда"
value={to}
onChange={(e)=>setTo(e.target.value)}
className="input"
/>

<select
value={status}
onChange={(e)=>setStatus(e.target.value)}
className="input"
>
<option>Создан</option>
<option>В пути</option>
<option>Доставлено</option>
</select>

<input
placeholder="Цена"
value={price}
onChange={(e)=>setPrice(e.target.value)}
className="input"
/>

<button
onClick={create}
className="btn"
style={{marginTop:10}}
>
Создать
</button>

<button
onClick={()=>setOpen(false)}
className="btn-cancel"
>
Отмена
</button>

</div>

</div>

)}

</div>

)
}