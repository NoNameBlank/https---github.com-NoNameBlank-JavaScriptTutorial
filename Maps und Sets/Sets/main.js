"use strict";

// Sets() gibt es nur Werte es gibt keine Eigenschaft & Werte und jeder Wert ist einmalig
// Zwei Objekte sind NIEMALS gleich außer es ist das gleiche Objekt

let mein_set = new Set();

mein_set.add("Test");
mein_set.add("Test");
mein_set.add(13);
mein_set.add([]);
mein_set.add([]);
mein_set.add(function(){});
mein_set.add(function(){});
mein_set.add({});
mein_set.add({});

// {} === {} <-- False nicht gleich

console.log(mein_set.has("Test"));
console.log(mein_set.has("Beispiel"));
console.log(mein_set.has({}));
console.log(mein_set.has([]));
console.log(mein_set.has(function() {}));
console.log(mein_set.has(7 + 6)); // 7 + 6 =  13 und 13 ist vorhanden.

console.log(mein_set);

mein_set.delete("Test");
console.log(mein_set);

console.log(mein_set.size);

mein_set.clear();
console.log(mein_set);
