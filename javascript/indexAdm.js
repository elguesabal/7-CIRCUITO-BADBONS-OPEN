const url = new URL(window.location.href);
const adm = url.searchParams.get("adm");

if (adm != null) {
	for(let i = 0; i < document.getElementById("tabelaJovens").childElementCount; i++) {
		document.getElementById("tabelaJovens").children[0].children[0].href += "&adm=true";
		document.getElementById("jogosJovens").children[0].children[0].href += "&adm=true";
	}
	for(let i = 0; i < document.getElementById("tabelaAdultos").childElementCount; i++) {
		document.getElementById("tabelaAdultos").children[0].children[0].href += "&adm=true";
		document.getElementById("jogosAdultos").children[0].children[0].href += "&adm=true";
	}
}