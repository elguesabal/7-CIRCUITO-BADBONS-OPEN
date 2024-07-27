const url = new URL(window.location.href);
const categoria = url.searchParams.get("categoria");
const modalidade = url.searchParams.get("modalidade");
const iframe = document.querySelector(".iframe");

if (categoria == "sub13") {
	// (modalidade == "simples masculina") ? iframe.src = "": undefined;
	// (modalidade == "simples feminina") ? iframe.src = "" : undefined;
	// (modalidade == "dupla mista") ? iframe.src = "" : undefined;

	(modalidade == "simples masculina") ? alert("categoria: sub13\nmodalidade: simples masculina") : undefined;
	(modalidade == "simples feminina") ? alert("categoria: sub13\nmodalidade: simples feminina") : undefined;
	(modalidade == "dupla mista") ? alert("categoria: sub13\nmodalidade: dupla mista") : undefined;
} else if (categoria == "sub17") {
	// (modalidade == "simples masculina") ? iframe.src = "": undefined;
	// (modalidade == "simples feminina") ? iframe.src = "" : undefined;
	// (modalidade == "dupla mista") ? iframe.src = "" : undefined;

	(modalidade == "simples masculina") ? alert("categoria: sub17\nmodalidade: simples masculina") : undefined;
	(modalidade == "simples feminina") ? alert("categoria: sub17\nmodalidade: simples feminina") : undefined;
	(modalidade == "dupla mista") ? alert("categoria: sub17\nmodalidade: dupla mista") : undefined;
} else if (categoria == "master") {
	// (modalidade == "simples masculina") ? iframe.src = "": undefined;
	// (modalidade == "simples feminina") ? iframe.src = "" : undefined;
	// (modalidade == "dupla mista") ? iframe.src = "" : undefined;

	(modalidade == "simples masculina") ? alert("categoria: master\nmodalidade: simples masculina") : undefined;
	(modalidade == "simples feminina") ? alert("categoria: master\nmodalidade: simples feminina") : undefined;
	(modalidade == "dupla mista") ? alert("categoria: master\nmodalidade: dupla mista") : undefined;
}