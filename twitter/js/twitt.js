let utenteOk = document.querySelector("#utenteOk");
let btnLogout = document.querySelector("#btnLogout");
let btnInviaTweet = document.querySelector("#btnInviaTweet");
let textArea = document.querySelector("#textArea");
let contatore = document.querySelector("#contatore");

btnInviaTweet.addEventListener("click", inserisciTweet);

// archivio locale dal html 1
let username = localStorage.getItem("Nome Utente");
let password = localStorage.getItem("Password");
utenteOk.innerHTML = `<i class="fa-solid fa-user p-3"></i>@${username}`;

function inserisciTweet() {
  //oggetto tweet
  let arrayJson = {
    username: username,
    password: password,
    tweet: textArea.value,
  };
  // console.log(arrayJson);
  let tweets = JSON.parse(localStorage.getItem("tweets")) || [];
  tweets.push(arrayJson);
  localStorage.setItem("tweets", JSON.stringify(tweets));
  // console.log(tweets);

  let tweetInserito = document.querySelector("#tweetInserito");
  tweetInserito.innerHTML += `<div><h6 class="text-start ms-3">Nuovo tweet: ${textArea.value}</h6></div>`;
  localStorage.setItem("tweet", textArea.value);
  //reset area una volta inviato
  textArea.value = "";
  //reset contatore una volta inviato
  contatore.textContent = "0";
}

// creazione contatore fino a 50

textArea.addEventListener("input", contaCaratteri);

contatore.textContent = "0/50";
function contaCaratteri() {
  contatore.textContent = `${textArea.value.length}/50`;
  if (contatore.textContent == 50) {
    contatore.textContent = "limite raggiunto!!!";
  }
}

btnLogout.addEventListener("click", logout);

function logout() {
  (window.location.href = "index.html")
  const tweetsOggetto = JSON.parse(localStorage.getItem("tweets") || []);
  const tweet = { username, password, tweets: tweetsOggetto };

  fetch("http://localhost:3000/datiUtente", {
    method: "POST",
    body: JSON.stringify(tweet),
    headers: { "Content-Type": "application/json" },
  })
    .then(
      (risposta) =>
        risposta.ok &&
        (console.log("salvataggio eseguito"))
    )
    .catch(() => console.error("errore"));
    localStorage.removeItem("Nome Utente")
    localStorage.removeItem("Password")
}
