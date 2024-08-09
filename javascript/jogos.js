import jogosUser from "./user.js";
import jogosAdm from "./adm.js";

const url = new URL(window.location.href);

// const urlApi = "http://192.168.0.110:3000/jogos" + "?categoria=" + url.searchParams.get("categoria") + "&modalidade=" + url.searchParams.get("modalidade");
const urlApi = "https://api-7-circuito-badbons-open.onrender.com/jogos" + "?categoria=" + url.searchParams.get("categoria") + "&modalidade=" + url.searchParams.get("modalidade");

(url.searchParams.get("adm") == "true") ? jogosAdm(urlApi) : jogosUser(urlApi);