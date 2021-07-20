// Chiedi all’utente il cognome

var nome = (prompt("Inserisci il tuo nome"));
// console.log(cognome);
nome = nome[0].toUpperCase() + nome.substring(1).toLowerCase();

var cognome = (prompt("Inserisci il tuo cognome"));
// console.log(cognome);
cognome = cognome[0].toUpperCase() + cognome.substring(1).toLowerCase();

// Inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’

var listaNome = ["Cesare", "Simona", "Mario", "Giuseppe", "Barbara"];
listaNome.push(nome);
// document.write(listaNome.sort());
document.write(listaNome.sort() + "<br>");



var listaCognome = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
listaCognome.push(cognome);
// document.write(listaCognome.sort());
document.write(listaCognome.sort() + "<br>");




// Stampa la lista ordinata alfabeticamente
for (var i=0; i<listaCognome.length; i++)
{
	document.write(listaNome[i] + " " + listaCognome[i] + "<br>");
}

// Scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

// var posizioneUmana = listaNome.indexOf(nome);
// console.log(posizioneUmana + 1);
// document.write(listaNome.sort() + "<br>");
// var posizioneUmana = listaCognome.indexOf(cognome);
// console.log(posizioneUmana + 1);
// document.write(listaCognome.sort() + "<br>");







