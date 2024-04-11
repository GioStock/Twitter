let utenteOk=document.querySelector("#utenteOk");
let Logout=document.querySelector("#Logout");
let btnInviaTweet=document.querySelector("#btnInviaTweet");

btnInviaTweet.addEventListener("click",inserisciTweet);

function inserisciTweet() {
    let textArea=document.querySelector("#textArea");
    let tweetInserito=document.querySelector("#tweetInserito");
    tweetInserito.innerHTML = `<h6 class="text-start ms-3">${textArea.value}</h6>`;
    
    
    textArea.value="";
    
}