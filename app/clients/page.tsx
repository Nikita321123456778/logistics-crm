export default function Clients(){

return(

<div>

<h1 style={{marginBottom:20}}>Клиенты</h1>

<div className="card">

<table className="table">

<thead>
<tr>
<th>Имя</th>
<th>Компания</th>
<th>Email</th>
<th>Телефон</th>
</tr>
</thead>

<tbody>

<tr>
<td>Иван Петров</td>
<td>Logistic Group</td>
<td>ivan@mail.com</td>
<td>+371123456</td>
</tr>

<tr>
<td>Anna Müller</td>
<td>Transport EU</td>
<td>anna@mail.com</td>
<td>+491234567</td>
</tr>

<tr>
<td>John Smith</td>
<td>Cargo Ltd</td>
<td>john@mail.com</td>
<td>+441234567</td>
</tr>

</tbody>

</table>

</div>

</div>

)
}