// Main function
// Напиши функцію під назвою makeArray, яка приймає три параметри: firstArray (масив), secondArray (масив) і maxLength (число). Функція повинна створювати новий масив, який містить усі елементи з firstArray, а потім усі елементи з secondArray.

// Якщо кількість елементів у новому масиві перевищує maxLength, функція повинна повернути копію масиву з довжиною maxLength елементів.
// В іншому випадку функція повинна повернути весь новий масив.

// if...else

// function makeArray(firstArray, secondArray, maxLength) {
//     let newMakeArray = firstArray.concat(secondArray);
//     if (newMakeArray.length > maxLength) {
//         return newMakeArray.slice(0, maxLength);
//         }
//     else {
//         return newMakeArray;
//     }
// }

// ternary operator

function makeArray(firstArray, secondArray, maxLength) {
let newMakeArray = firstArray.concat(secondArray);
   return newMakeArray.length > maxLength ? newMakeArray.slice(0, maxLength) : newMakeArray;
}

// Text calls
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []