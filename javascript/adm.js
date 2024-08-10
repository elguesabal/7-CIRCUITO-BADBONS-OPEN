export default function jogosAdm(url) {
	document.getElementById("botaoAdm").style.display = "block";
	document.getElementById("loadSenha").style.display = "block";
	document.getElementById("botaoAdm").addEventListener("click", () => enviar());
	document.getElementById("formSenha").addEventListener("submit", (event) => senhaAdm(event));
	fetch(url)
	.then(res => { return res.json(); })
	.then(jogos => {
		for(let i = 0; i < jogos.length; i++) {
			const atleta1 = (jogos[i].v == 1) ? "bg-success" : (jogos[i].v == 0) ? "" : "bg-danger" ;
			const atleta2 = (jogos[i].v == 2) ? "bg-success" : (jogos[i].v == 0) ? "" : "bg-danger" ;
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
							<td id="jogo${i}Nome1" class="align-middle textTable ${atleta1} bg-opacity-25" rowspan="3">${jogos[i].nome1}</td>
							<td class="${atleta1} bg-opacity-25"><input type="number" id="jogo${i}Set1_1" class="form-control" min="1" max="40" value="${jogos[i].set1_1}"></td>
							<td class="${atleta2} bg-opacity-25"><input type="number" id="jogo${i}Set1_2" class="form-control" min="1" max="40" value="${jogos[i].set1_2}"></td>
							<td id="jogo${i}Nome2" class="align-middle textTable ${atleta2} bg-opacity-25" rowspan="3">${jogos[i].nome2}</td>
						</tr>
						<tr>
							<td class="${atleta1} bg-opacity-25"><input type="number" id="jogo${i}Set2_1" class="form-control" min="1" max="40" value="${jogos[i].set2_1}"></td>
							<td class="${atleta2} bg-opacity-25"><input type="number" id="jogo${i}Set2_2" class="form-control" min="1" max="40" value="${jogos[i].set2_2}"></td>
						</tr>
						<tr>
							<td class="${atleta1} bg-opacity-25"><input type="number" id="jogo${i}Set3_1" class="form-control" min="1" max="40" value="${jogos[i].set3_1}"></td>
							<td class="${atleta2} bg-opacity-25"><input type="number" id="jogo${i}Set3_2" class="form-control" min="1" max="40" value="${jogos[i].set3_2}"></td>
						</tr>
					</tbody>
				</table>
			`;
		}
	})
	.catch(error => console.log("Error na tabela", error))
}

function vitoria(sets, set1_1, set2_1, set3_1, set1_2, set2_2, set3_2) {
	if (sets == 0) {
		return 0;
	} else if(sets == 2 && set1_1 > set1_2 && set2_1 > set2_2) {
		return 1;
	} else if (sets == 2 && set1_1 < set1_2 && set2_1 < set2_2) {
		return 2;
	} else {
		return (set3_1 > set3_2) ? 1 : 2;
	}
}

function novosPlacares() {
	const lenChild = document.getElementById("jogos");
	let jogos = [];

	for(let i = 0; i < lenChild.childElementCount; i++) {
		const nome1 = document.getElementById(`jogo${i}Nome1`).textContent;
		const set1_1 = Number(document.getElementById(`jogo${i}Set1_1`).value);
		const set2_1 = Number(document.getElementById(`jogo${i}Set2_1`).value);
		const set3_1 = Number(document.getElementById(`jogo${i}Set3_1`).value);

		const nome2 = document.getElementById(`jogo${i}Nome2`).textContent;
		const set1_2 = Number(document.getElementById(`jogo${i}Set1_2`).value);
		const set2_2 = Number(document.getElementById(`jogo${i}Set2_2`).value);
		const set3_2 = Number(document.getElementById(`jogo${i}Set3_2`).value);

		const sets = (set1_1 == 0 && set1_2 == 0) ? 0 : (set3_1 == 0 && set3_2 == 0) ? 2 : 3 ;
		const v = vitoria(sets, set1_1, set2_1, set3_1, set1_2, set2_2, set3_2);

		const jogo = {
			nome1: nome1, set1_1: set1_1, set2_1: set2_1, set3_1: set3_1,
			nome2: nome2, set1_2: set1_2, set2_2: set2_2, set3_2: set3_2,
			sets: sets, v: v
		};
		jogos.push(jogo);
	}
	return jogos;
}

function enviar() {
	const url = new URL(window.location.href);
	const load = document.getElementById("loadAdm");
	const spinner = document.getElementById("spinner");

	load.style.display = "block";
	// fetch("http://192.168.0.110:3000/adm/jogos/" + url.searchParams.get("categoria") + "/" + url.searchParams.get("modalidade"), {
	// fetch("http://127.0.0.1:3000/adm/jogos/" + url.searchParams.get("categoria") + "/" + url.searchParams.get("modalidade"), {
	fetch("https://api-7-circuito-badbons-open.onrender.com/adm/jogos/" + url.searchParams.get("categoria") + "/" + url.searchParams.get("modalidade"), {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(novosPlacares())
	})
	.then(res => {
		(res.status == 200) ? load.style.display = "none" : spinner.innerHTML = "Error";
	})
	.catch(error => console.log("Error na tabela", error));
}

function senhaAdm(event) {
	event.preventDefault();
	(document.getElementById("senha").value == "123") ? document.getElementById("loadSenha").style.display = "none" : undefined;
}