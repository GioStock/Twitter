let utenteOk=document.querySelector("#utenteOk");
let Logout=document.querySelector("#Logout");
let btnInviaTweet=document.querySelector("#btnInviaTweet");
let textArea=document.querySelector("#textArea");
let contatore=document.querySelector("#contatore");
btnInviaTweet.addEventListener("click",inserisciTweet);

function inserisciTweet() {
  let tweetInserito = document.querySelector("#tweetInserito");
  tweetInserito.innerHTML = `<h6 class="text-start ms-3">Nuovo tweet: "${textArea.value}"</h6>`;

  //reset area una volta inviato
  textArea.value = "";
  //reset contatore una volta inviato
  contatore.textContent = "0";
}

// creazione contatore fino a 50
contatore.textContent="0/50";
textArea.addEventListener('input',contaCaratteri);

function contaCaratteri() {
    contatore.textContent=textArea.value.length;
    if (contatore.textContent==50) {
        contatore.textContent="limite raggiunto!!!";
    }
}