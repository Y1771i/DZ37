// Задача 1: Удвоение чисел в массиве
const color = [2, 4, 6, 8];
const doubled = [];
for (let i = 0; i < color.length; i++) {
  doubled.push(color[i] * 2);
}
console.log(doubled); 


// Задача 2: Вытащить определённые значения из массива объектов
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 }
];
const names = [];
for (let i = 0; i < users.length; i++) {
  names.push(users[i].name);
}
console.log(names); 


// Задача 3:Фильтрация положительных чисел.
const red = [-10, 15, 0, -7, 30, 5, -3];
const positiveNumbers = [];
for (let i = 0; i < red.length; i++) {
  if (red[i] > 0) {
    positiveNumbers.push(red[i]);
  }
}
console.log(positiveNumbers); 


// Задача 4:Фильтрация слов по длине
const words = ["apple", "banana", "cherry", "kiwi", "grape"];
function filterLongWords(arr) {
  const longWords = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 5) {
      longWords.push(arr[i]);
    }
  }
  return longWords;
}
console.log(filterLongWords(words));


// Задача 5:Фильтрация строк с определённым символом
const vilo = ["cat", "dog", "elephant", "tiger", "lion"];
function filterWordsByCharacter(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("a")) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(filterWordsByCharacter(vilo)); 


// 6. Сумма чисел массива
const numbers2 = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers2.length; i++) {
  sum += numbers2[i];
}
console.log(sum); 


// 7. Найти самое длинное слово в массиве
const shell = ["apple", "banana", "cherry", "watermelon"];
let longestWord = shell[0];
for (let i = 1; i < shell.length; i++) {
  if (shell[i].length > longestWord.length) {
    longestWord = shell[i];
  }
}
console.log(longestWord); 


// 8. Разделение массива на части
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkSize = 3;
const chunks = [];
for (let i = 0; i < array.length; i += chunkSize) {
  chunks.push(array.slice(i, i + chunkSize));
}
console.log(chunks);
