"use strict";

let s = " Lorem ipsum dolor sit amet ipsum.     ";

// Gibt die länge von einem String zurück
console.log(s.length);

// Gibt den Index von dem ersten vorkommen des gesuchten String "ipsum" zurück. Das zweite ipsum wird ignoriert
// key sensitive
console.log(s.indexOf("ipsum"));
console.log(s.indexOf("ipsum", 20)); // Sucht erst ab index 20 nach dem String
console.log(s.lastIndexOf("ipsum")); // lastIndexOf fängt von hinten an zusuchen das heißt vom höchsten Index an.
console.log(s.lastIndexOf("ipsum", 10)); // Sucht von index 10  an bis index 0 
console.log(s.includes("sit")); // Gibt true oder false zurück ob Suchtring enthalten ist oder nicht.  
console.log(s.includes("sit", 28));

// In Groß/Klein-schreibung Konvertieren
console.log(s.toLowerCase());
console.log(s.toUpperCase());

// Trim()  löscht überflüssige kennzeichen am Anfang 
console.log(s.trim());

// Wiederholt den String 100 mal
console.log(s.repeat(100)); 

/*
// search()  replace() match()
console.log(s.search("ipsum")); // Kennt kein Start Index 
console.log(s.replace("ipsum", "opsum")); // Tauscht nur das erste ipsum durch opsum 
console.log(s.match()); //
*/

// Regularer Audrück
let regex = /i\w{4}/g;  // /g das Global ganzer String nicht nur erstes Ergebnis --> https://regex101.com/

console.log(s.search(regex)); // Kennt kein Start Index sonst gleiche wie indexOf
console.log(s.replace(regex, "opsum")); // Tauscht nur das erste regex durch opsum (Da regex  /g und somit global gesetzt wurde ist die)
console.log(s.match(regex)); // Gibt alle vorkomnisse des gesuchten Parameter zurück
