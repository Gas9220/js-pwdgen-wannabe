"use strict";

// Chiedo il nome all'utente
const firstName = prompt('Insert your name...')

// Chiedo il cognome all'utente
const lastName = prompt('Insert your surname...')

// Chiedo il colore preferito all'utente
const favoriteColor = prompt('Insert your favorite color...')

// Genero la password
const password = `${firstName}${lastName}${favoriteColor}89`

// Mostro la password generata nell'HTML
document.getElementById('password').innerHTML = password

// Stampo in console la password generata
console.log(password)

// Mostro i dati inseriti nei rispettivi li
document.getElementById('name').innerHTML = `Nome: ${firstName}`
document.getElementById('surname').innerHTML = `Cognome: ${lastName}`
document.getElementById('favoriteColor').innerHTML = `Colore: ${favoriteColor}`