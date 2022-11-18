let nome = prompt("inserisci il nome: ");

console.log("il tuo nome è: " + nome);

let cognome = prompt("inserisci il cognome: ");

console.log("il tuo cognome è: " + cognome);

let colorePreferito = prompt("inserisci il tuo colore preferito: ");

console.log("il tuo colore preferito è: " + colorePreferito);

console.log("la password super sicura è: " + nome + cognome +colorePreferito);

const numero = 22;

console.log("la password super sicura è: " + nome + cognome +colorePreferito + numero);

const passwordSicura = nome + cognome + colorePreferito + numero;

document.getElementById("demo").innerHTML = passwordSicura;