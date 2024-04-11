var nomeUtente = document.querySelector("#nomeUtente");
var password = document.querySelector("#password");
var feedUtente = document.querySelector("#feedUtente");
var feedPassword = document.querySelector("#feedPassword");

var btnInvia = document.querySelector("#btnInvia");
btnInvia.addEventListener("click", accesso);
const FORMATO_PW = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const formatoUtente = /[a-zA-Z][a-zA-Z0-9-_]{3,32}/;
function accesso() {
  feedUtente.innerHTML = "";
  feedPassword.innerHTML="";
  console.log(nomeUtente.value);
  console.log(password.value);
  let nomelength = nomeUtente.value.length;
  let isGoodP = FORMATO_PW.test(password.value);
  let isGoodU = formatoUtente.test(nomelength.value);
  
  if(nomelength >= 4 && nomelength <= 15 && isGoodP && isGoodU) {
    event.preventDefault();
    window.location.href="twitt.html";
    console.log("corretto");
  } else {
    feedUtente.innerHTML = `min.4 - max:15`;
    feedPassword.innerHTML = `<strong class= text-color danger>Password errata per favore riprova</strong>`;
  }
}
