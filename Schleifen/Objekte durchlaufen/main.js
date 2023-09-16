"use strict";

let mein_objekt = {
    name: "Schein",
    vorname: "Rick",
    alter: 32
};

// So iteriert man nicht über Objekte!!!!!!!!!!!!!
// for (let e in mein_objekt){
//     console.log(mein_objekt[e]);
// }

// .entries() gibt die Key/Value paare (Eigenschaften/Werte paare). Es wird ein 2-Dimensionales Arrays zurück gegben

/*
let paare = Object.entries(mein_objekt);
console.log(paare);

for (let paar of paare) {
    console.log(paar);
    for (let e of paar) {
        console.log(e);
    }
}
*/

for (let paar of Object.entries(mein_objekt)) {
    console.log(paar);
    for (let e of paar) {
        console.log(e);
    }
}

// keys() gibt nur die Eigeschaften/schlüsse zurück.  Die Eigenschaften des Objekts waren: name, vorname, alter. Gibt ein Arrays zurück
let eigenschaften = Object.keys(mein_objekt); 
console.log(eigenschaften);

for (let e of eigenschaften) {
    console.log(e);
}


// mit values() kommt man an die Werte eines Objekts ran. 1-Dimensionales Array 

/*
let werte = Object.values(mein_objekt);
console.log(werte);

for (let w of werte) {
    console.log(w);
}
*/

for (let w of Object.values(mein_objekt)) {
    console.log(w);
}