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
const vowel = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
};

const zeichenkette2 = "I Am awesome and so are you";
function vowelCount(str) {
    const letters = ["a", "e", "i", "o", "u"];
    str.toLowerCase()
        .split("")
        .forEach((element) => {
            if (letters.includes(element)) {
                return (vowel[element] += 1);
            }
        });
    return vowel;
}

console.log(vowelCount(zeichenkette2));

function moveVowel(input) {
    const vowels = "aeiou";
    let front = "";
    let back = "";
    for (let i = 0; i < input.length; i++) {
        const all = input[i];
        if (vowels.includes(all)) {
            back += all;
        } else {
            front += all;
        }
    }
    return front + back;
}

console.log(moveVowel("Hallo ich bin der Leo"));
