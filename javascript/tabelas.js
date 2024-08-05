const url = new URL(window.location.href);
const categoria = url.searchParams.get("categoria");
const modalidade = url.searchParams.get("modalidade");

fetch("https://api-7-circuito-badbons-open.onrender.com/tabela" + "?categoria=" + categoria + "&modalidade=" + modalidade)
.then(res => { return res.json(); })
.then(table => {
	table.sort((a, b) => b.v - a.v);
	for(let i = 0; i < table.length; i++) {
		document.getElementById("table").innerHTML += `
			<tr>
				<th scope="row">${i}</th>
				<td>${table[i].nome}</td>
				<td>${table[i].tj}</td>
				<td>${table[i].v}</td>
				<td>${table[i].d}</td>
				<td>${table[i].vSet}</td>
			</tr>
		`;
	}
})
.catch(error => console.log("Error na tabela", error))