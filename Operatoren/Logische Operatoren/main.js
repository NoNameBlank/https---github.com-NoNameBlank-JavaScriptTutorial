"use strict";

//In JavaScript gibt es 3 Logische Operatoren
// und  = &&
// oder = ||
// nicht = !


// 1 ist größer als 0 und ist 4 kleiner als 6
console.log(1 > 0 && 4 < 6);
console.log(1 > 0 && 6 < 4);



console.log(1 > 0 || 4 < 6);
console.log(1 > 0 || 6 < 4);

console.log(1 > 0 && (6 < 4));
console.log(1 > 0 && !(6 < 4));

console.log(true);
console.log(!true);

console.log(1 > 0 && 4 < 6 && 10 < 20);
console.log(1 > 0 && 4 < 6 && 10 > 20);

console.log(1 > 0 && 4 < 6 || 10 > 20);
console.log(1 > 0 && 4 > 6 || 10 < 20);

console.log(1 < 0 && 10 < 20 || 6 > 4);
console.log(1 < 0 && (10 < 20 || 6 > 4));

