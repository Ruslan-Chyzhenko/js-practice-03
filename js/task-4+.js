// Функція getSlice(array, value) приймає два параметра:
// array - масив довільних елементів
// value - значення елемента масиву для пошуку
// Доповни код функції getSlice(array, value) так, щоб вона виконувала пошук значення value у масиві array і повертала:
// порожній масив, якщо в array немає елемента зі значенням value
// підмасив, що починається з початку array і до елемента зі значенням value включно, якщо такий елемент є в array

// function getSlice(array, value) {
//     const index = array.indexOf(value);
//     return index!==-1 ? array.slice(0, index + 1) : [];
// }

// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"));
// // ["Mango", "Poly"]

// const tags = [];

// for(let i = 1; i < 8; i += 1) {
// 	tags.push(`tag-${i}`);
// }

// console.log(tags); // ["tag-0", "tag-1", "tag-2"]


// Функція createArrayOfNumbers(min, max) приймає два параметра:
// min - ціле число, з якого починаються обчислення
// max - ціле число, до якого включно триватимуть обчислення
// Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max включно.

// function createArrayOfNumbers(min, max) {
//     let result = [];
//     for (let i = min; i <= max; i++) {
//     result.push(i);
//     }
//     return result;
// }

// console.log(createArrayOfNumbers(1, 3));
// // [1, 2, 3]

// Функція calculateTotalPrice(order) приймає один параметр order - масив чисел. Доповни функцію так, щоб вона повертала загальну суму елементів з масиву order.

// function calculateTotalPrice(order) {
//     let totalPrice = 0;
//     for (let i = 0; i < order.length; i++) {
//     totalPrice += order[i];
//     }
//     return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// // 138

// function multiply() {
//     let total = 1;
    
//   for (const arg of arguments) {
//       total *= arg;
//       }

//     return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120

// function createReversedArray(...args) {
//     return args.reverse();
// }

// // Приклад використання:
// const reversedArray = createReversedArray(1, 2, 3);
// console.log(reversedArray);

// function createReversedArray() {
//     const call = Array.from(arguments);
//     return call.reverse();
// }

// console.log(createReversedArray(12, 85, 37, 4));
// // [4, 37, 85, 12]
// console.log(createReversedArray(164, 48, 291));
// // [291, 48, 164]

// function foo() {
//   const call = Array.from(arguments);
// 	return call;
// }

// console.log(foo(1, 2, 3)); // Поверне "1, 2, 3"

// function greet(username = "Guest") {
//   console.log(`Hello, ${username}!`);
// }

// greet("Jacob"); // "Hello, Jacob!"
// greet();        // "Hello, Guest!"

// Функція calculateTax(amount, taxRate) оголошує два параметри:
// amount - число, сума від якої потрібно обчислити податок. Обов'язковий параметр.
// taxRate - число, податкова ставка. Необов'язковий параметр. За замовчуванням його значення має бути 0.2.
// Доповни код функції так, щоб вона повертала суму податку - результат множення суми на податкову ставку.

// function calculateTax(amount, taxRate=0.2){
//     return result = amount*taxRate;
// }

// console.log(calculateTax(100, 0.1));
// //  10
// console.log(calculateTax(200, 0.1));
// // 20

// const multiply = function (x, y, z) {
//   console.log(x * y * z);
// };

// // ✅ Працює виклик після оголошення
// multiply(4, 5, 6);

// const planets = ['Earth', 'Mars', 'Venus']; // масив рядків
// if(planets.length >= 3) {
// 	console.log("3 or more elements");
// } else {
// 	console.log("3 or less elements");
// }
// const numbers = ['apple', 10, true]; // масив чисел
// const firstElement = planets[2];
// console.log(firstElement); // 'Earth'
// planets[0] = 'Jupiter';
// console.log(planets.length); // 3

// console.log(numbers);
// console.log(planets[0]); // 'Earth'

// function getOrderQuantity(order) {
//   return order.length;
// }

// console.log(order);

// const planets = ["Earth", "Mars", "Venus"];
// const lastElemIndex = planets.length - 1;

// console.log(planets[lastElemIndex]);

// function getLastElementMeta(array) {
// 		return [array.length - 1, array[array.length - 1]];	
// 	}


// console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]));
// // [3, "banana"]