const url = new URL(window.location.href);
const adm = url.searchParams.get("adm");

if (adm != null) {
	for(let i = 0; i < document.getElementById("tabelaJovens").childElementCount; i++) {
		document.getElementById("jogosJovens").children[i].children[0].href += "&adm=true";
	}
	for(let i = 0; i < document.getElementById("tabelaAdultos").childElementCount; i++) {
		document.getElementById("jogosAdultos").children[i].children[0].href += "&adm=true";
	}
}