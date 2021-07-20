// Chiedi all’utente il cognome

var cognome = (prompt("Inserisci il tuo cognome"));
// console.log(cognome);

// Inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’

var lista = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
lista.push(cognome);

// Stampa la lista ordinata alfabeticamente
document.write(lista.sort());
console.log(lista);

// Scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

var posizioneUmana = lista.indexOf(cognome);
console.log(posizioneUmana + 1);




