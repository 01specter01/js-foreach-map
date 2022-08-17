console.log("Aufgabe1");
const array = [1, 2, 3, 4, 5, 6];
function doubleValues(array) {
    let newArray = [];
    array.forEach(function (i) {
        newArray.push(i, i);
    });
    return newArray;
}
console.log(doubleValues(array));

console.log("Aufgabe2");
const list = [1, 2, 3];
function onlyEvenValues(list) {
    let evenArray = [];
    list.forEach(function (i) {
        if (i % 2 == 0) evenArray.push(i);
    });
    return evenArray;
}
console.log(onlyEvenValues(list));

console.log("Aufgabe3");
const zeichenkette = ["j", 5, "!", 3];
function showFirstAndLast(zeichenkette) {
    let firstAndLast = [];
    return (firstAndLast =
        zeichenkette[0] + zeichenkette[zeichenkette.length - 1]);
}
console.log(showFirstAndLast(zeichenkette));

console.log("Aufgabe4");
function vowelCount() {}
console.log(vowelCount());
