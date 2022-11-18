let nome = prompt("inserisci il nome: ");

console.log("il tuo nome è: " + nome);

let cognome = prompt("inserisci il cognome: ");

console.log("il tuo cognome è: " + cognome);

let colorePreferito = prompt("inserisci il tuo colore preferito: ");

console.log("il tuo colore preferito è: " + colorePreferito);

let eta = parseInt(prompt("inserisci la tua età: "));

console.log("la tua età è: " + eta);

console.log("la password super sicura è: " + nome + cognome +colorePreferito + eta);

const passwordSicura = nome + cognome + colorePreferito + eta;

document.getElementById("demo").innerHTML = passwordSicura;