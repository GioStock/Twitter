let utenteOk=document.querySelector("#utenteOk");
let Logout=document.querySelector("#Logout");
let btnInviaTweet=document.querySelector("#btnInviaTweet");
let contatore=document.querySelector("#contatore");
let textArea=document.querySelector("#textArea");

btnInviaTweet.addEventListener("click",inserisciTweet);

function inserisciTweet() {
    
    let tweetInserito=document.querySelector("#tweetInserito");
    tweetInserito.innerHTML = `<h6 class="text-start ms-3">Nuovo tweet: "${textArea.value}"</h6>`;
    
    
    textArea.value="";
}
function contaCaratteri() {
    
    
    contatore.textContent=textArea.value.length;
    console.log(contatore.textContent);
    if (contatore.textContent==50) {
        contatore.textContent="limite raggiunto!!!";
    }
    
    
}
textArea.addEventListener('input',contaCaratteri);