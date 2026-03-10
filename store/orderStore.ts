import { create } from "zustand"

export type Order = {
  id:number
  number:string
  from:string
  to:string
  status:string
  price:number
}

type Store = {
  orders:Order[]
  addOrder:(order:Order)=>void
  deleteOrder:(id:number)=>void
}

export const useOrderStore=create<Store>((set)=>({

orders:[
{id:1,number:"TR-1001",from:"Москва",to:"Казань",status:"В пути",price:30000},
{id:2,number:"TR-1002",from:"Берлин",to:"Прага",status:"Доставлено",price:50000},
{id:3,number:"TR-1003",from:"Рига",to:"Вильнюс",status:"Создан",price:70000}
],

addOrder:(order)=>
set((state)=>({
orders:[...state.orders,order]
})),

deleteOrder:(id)=>
set((state)=>({
orders:state.orders.filter(o=>o.id!==id)
}))

})) 