"use strict";

// Maps sind besondere Objekte, maps ist sowas wie ein Objekt das einfache Schlüssel-Wert zuordnung zu lässt.
// Maps jeder Wert sowohl Objekt als Primitive Datenypen als Eigenschaft bzw. Wert dienen können
// 

let meine_map = new Map();
console.log(meine_map);

// set()
meine_map.set("Test", "Wert zur Eigeschaft Test");
meine_map.set(13, "Wert zu Eigenschaft 13");
meine_map.set([], "Wert zur Eigenschaft Array");
meine_map.set(function(){}, "Wert zur Eigenschaft Function");
meine_map.set({}, "Wert zur Eigenschaft {}")
console.log(meine_map);

// get()
console.log(meine_map.get("Test"));
console.log(meine_map.get(13));
console.log(meine_map.get([]));
console.log(meine_map.get(function() {}));
console.log(meine_map.get({}));

// has()
console.log(meine_map.has(13));
console.log(meine_map.has(14));
console.log(meine_map.has("Test"));
// Leere Objekte, Array und Funktionen ist immer false  
console.log(meine_map.has({}));
console.log(meine_map.has([]));

//  delete
meine_map.delete("Test");
console.log(meine_map);

// clear löscht ganze Map
/*
meine_map.clear();
console.log(meine_map);
*/

// size  Größe
console.log(meine_map.size);