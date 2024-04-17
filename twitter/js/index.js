var nomeUtente = document.querySelector("#nomeUtente");
var password = document.querySelector("#password");
var feedUtente = document.querySelector("#feedUtente");
var feedPassword = document.querySelector("#feedPassword");

var btnInvia = document.querySelector("#btnInvia");
btnInvia.addEventListener("click", accesso);

const FORMATO_PW = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const formatoUtente = /[a-zA-Z][a-zA-Z0-9-_]{4,15}/;

function accesso() {
  event.preventDefault();
  feedUtente.innerHTML = "";
  feedPassword.innerHTML="";
  console.log(nomeUtente.value);
  console.log(password.value);
  // let nomelength = nomeUtente.value.length;
  let isGoodP = FORMATO_PW.test(password.value.trim());
  let isGoodU = formatoUtente.test(nomeUtente.value.trim());
  
  if(isGoodP && isGoodU) {
    localStorage.setItem("Nome Utente", nomeUtente.value);
    localStorage.setItem("Password", password.value);
    window.location.href="twitt.html";
    console.log("corretto");

  }else if (!isGoodU && isGoodP) {
    feedUtente.innerHTML = `Non inserire spazi |min.4 - max:15`;
    console.log("user errato");
    nomeUtente.value = "";
    password.value = "";


  }else if(isGoodU && !isGoodP){
      feedPassword.innerHTML = `<strong class= text-color>
      <li>Password errata per favore riprova</li>
      <li>La password deve contenere almeno 8 caratteri</li>
      <li>Deve contenere almeno una lettera Maiuscola</li>
      <li>Deve contenere almeno un carattere speciale (£ $ % & ! @ ? €)</li></strong>`;
      console.log("password errata");
      
      password.value = "";
    }
  else{
     feedUtente.innerHTML = `Non inserire spazi | min.4 - max:15`;
     feedPassword.innerHTML = `<strong class= text-color>
     <li>Password errata per favore riprova</li>
     <li>La password deve contenere almeno 8 caratteri</li>
     <li>Deve contenere almeno una lettera Maiuscola</li>
     <li>Deve contenere almeno un carattere speciale (£ $ % & ! @ ? €)</li></strong>`;
     console.log("user errato");
     console.log("pass errata");
     nomeUtente.value = "";
     password.value = "";
   }
  
}
