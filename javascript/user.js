export default function jogosUser(url) {
	fetch(url)
	.then(res => { return res.json(); })
	.then(jogos => {
		for(let i = 0; i < jogos.length; i++) {
			const atleta1 = (jogos[i].v == "1") ? "bg-success" : (jogos[i].v == "0") ? "" : "bg-danger" ;
			const atleta2 = (jogos[i].v == "2") ? "bg-success" : (jogos[i].v == "0") ? "" : "bg-danger" ;
			document.getElementById("jogos").innerHTML += `
				<table class="table table-bordered border-primary text-center">
					<thead>
						<tr>
							<th scope="col" class="width30">Nome</th>
							<th scope="col" class="width10">Pontos</th>
							<th scope="col" class="width10">Pontos</th>
							<th scope="col" class="width30">Nome</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="align-middle textTable ${atleta1} bg-opacity-25" rowspan="3">${jogos[i].nome1}</td>
							<td class="${atleta1} bg-opacity-25">${jogos[i].set1_1}</td>
							<td class="${atleta2} bg-opacity-25">${jogos[i].set1_2}</td>
							<td class="align-middle textTable ${atleta2} bg-opacity-25" rowspan="3">${jogos[i].nome2}</td>
						</tr>
						<tr>
							<td class="${atleta1} bg-opacity-25">${jogos[i].set2_1}</td>
							<td class="${atleta2} bg-opacity-25">${jogos[i].set2_2}</td>
						</tr>
						<tr>
							<td class="${atleta1} bg-opacity-25">${jogos[i].set3_1}</td>
							<td class="${atleta2} bg-opacity-25">${jogos[i].set3_2}</td>
						</tr>
					</tbody>
				</table>
			`;
		}
	})
	.catch(error => console.log("Error na tabela", error))
}