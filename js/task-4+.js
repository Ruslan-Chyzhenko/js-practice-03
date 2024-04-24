// Функція getSlice(array, value) приймає два параметра:
// array - масив довільних елементів
// value - значення елемента масиву для пошуку
// Доповни код функції getSlice(array, value) так, щоб вона виконувала пошук значення value у масиві array і повертала:
// порожній масив, якщо в array немає елемента зі значенням value
// підмасив, що починається з початку array і до елемента зі значенням value включно, якщо такий елемент є в array

function getSlice(array, value) {
    const index = array.indexOf(value);
    return index!==-1 ? array.slice(0, index + 1) : [];
}

console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"));
// ["Mango", "Poly"]
