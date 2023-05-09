// --------Р А Н Н Є-----П О В Е Р Н Е Н Н Я---------
// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }
//   if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }
//   return 'The order is accepted, our manager will contact you';
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// -------T A S K---------4------------
// const fruits = ['apple', 'plum', 'pear', 'orange'];
// console.log(fruits);

// ---------T A S k---------5-------------

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// // Change code below this line
// const firstElement = fruits[0];
// console.log(firstElement);

// const secondElement = fruits[1];
// console.log(secondElement);

// const lastElement = fruits[3];
// console.log(lastElement);

// ------------T A S K----------6------------

// const fruits = ['apple', 'plum', 'pear', 'orange'];
// console.group('change before: ', fruits);

// // Write your code under this line
// fruits[1] = 'peach';
// fruits[3] = 'banana';

// console.group('change after: ', fruits);

// -------T A S K-------7-------------
// const fruits = ['apple', 'peach', 'pear', 'banana'];

// const fruitsArrayLength = fruits.length;

// console.log(fruitsArrayLength);

// --------T A S K------------8--------------

// const fruits = ['apple', 'peach', 'pear', 'banana'];

// const lastElementIndex = fruits.length - 1;
// console.log(lastElementIndex);

// const lastElement = fruits[lastElementIndex];
// console.log(lastElement);

// -------------T A S K -------9--------------

// function getExtremeElements(array) {
//   let firstElement = array[0];

//   let lastElementIndex = array.length - 1;

//   return [firstElement, array[lastElementIndex]];

//   // --------а б о---------
//   // array.splice(1, array.length - 2);
//   // return array
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(['Earth', 'Mars', 'Venus']));
// console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));

// ------------T A S K---------10--------S P L I T---------

// function splitMessage(message, delimiter) {
//   let words = message.split(delimiter);

//   console.log(words);
//   return words;
// }
// splitMessage('Mango hurries to the train', ' ');
// splitMessage('Mango', '');
// splitMessage('best_for_week', '_');

// ---------T A S K----------11-------S P L I T----------

// function calculateEngravingPrice(message, pricePerWord) {
//   let perWord = message.split(' ').length;
//   console.log(
//     '1. рядок перевели в масив; 2. отримали довжину масива: ',
//     perWord
//   );
//   let fullPrice = perWord * pricePerWord;

//   console.log(fullPrice);
//   return fullPrice;
// }

// calculateEngravingPrice('JavaScript is in my blood', 10);
// calculateEngravingPrice('JavaScript is in my blood', 20);
// calculateEngravingPrice('Web-development is creative work', 40);
// calculateEngravingPrice('Web-development is creative work', 20);

// --------T A S K-------12------J O I N(delimiter)-------

// function makeStringFromArray(array, delimiter) {
//   let string = array.join(delimiter);

//   console.log(string);
//   return string;
// }
// makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' ');
// makeStringFromArray(['M', 'a', 'n', 'g', 'o'], '');
// makeStringFromArray(['top', 'picks', 'for', 'you'], '_');

// ------------T A S K--------13--------J O I N---s l u g-------

// function slugify(title) {
//   // Change code below this line
//   // 1. нормалізувати слаг до нижнього регістру
//   // 2. на стрічці яка нормалізувала текст в нижній регістр,
//   // визиваєм спліт який розділяє елементи в масив
//   // 3. за допомогою джоін отриманий масив title.toLowerCase().split(' ')
//   //  зшили в рядок і розділили за допомогою - тире

//   let slug = title.toLowerCase().split(' ').join('-');

//   // Change code above this line
//   console.log(slug);
//   return slug;
// }
// slugify('Arrays for begginers');
// slugify('English for developer');
// slugify('Ten secrets of JavaScript');
// slugify('How to become a JUNIOR developer in TWO WEEKS');

//---------------T A S K---------14-------S L I C E------

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// console.log('firstTwoEls: ', firstTwoEls);
// const nonExtremeEls = fruits.slice(1, 4);
// console.log('nonExtremeEls: ', nonExtremeEls);
// const lastThreeEls = fruits.slice(2);
// console.log('lastThreeEls: ', lastThreeEls);

// ----------------T A S K-----15--------C O N C A T------------
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);
// console.log(allClients);

// --------T A S K--------16----------C O N C A T-----
// function makeArray(firstArray, secondArray, maxLength) {
//   let newArray = firstArray.concat(secondArray);
//   //   //   console.log(newArray);

//   //   if (newArray.length > maxLength) {
//   //     newArray = newArray.slice(0, maxLength);
//   //   } else {
//   //     newArray;
//   //   }
//   //   console.log(newArray);
//   //   return newArray;
//   // }
//   // -----------------------------А Б О-----------------
//   newArray =
//     newArray.length > maxLength ? newArray.slice(0, maxLength) : newArray;
//   console.log(newArray);
//   return newArray;
// }

// makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3);
// makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4);
// makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3);
// makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2);
// makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4);
// makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0);

//     ---------------------T A S K----------17-------------F O R-------------

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   // Change this line
//   console.log(i);
// }

// -------------T A S K------18---ЗАДАЧА: СУМА ЧИСЕЛ (ЦИКЛ FOR)-----------

// function calculateTotal(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i += 1) {
//     sum += i;
//   }
//   console.log(sum);
//   return sum;
// }
// calculateTotal(1);
// calculateTotal(3);
// calculateTotal(7);
// calculateTotal(18);
// calculateTotal(24);

// const target = 2;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }
// console.log(sum);

// ---------T A S K-----------19--------------

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }
//  ----------T A S K------20------ЗАДАЧА: ОБЧИСЛЕННЯ СУМИ ПОКУПКИ---

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   // 1. Перебрати масив
//   // 2. створюємо змінну Тотал;
//   // 3. Приплюсувати до тотал  кожен елемент масива
//   for (let i = 0; i < order.length; i += 1) {
//     console.log('order[i]', order[i]);
//     total += order[i];
//   }
//   // Change code above this line
//   console.log('result: ', total);
//   return total;
// }
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);

// -------T A S K------21------ЗАДАЧА: ПОШУК НАЙДОВШОГО СЛОВА------

// function findLongestWord(string) {
//   let stringToArray = string.split(' ');
//   // console.log('string: ', stringToArray);
//   let longestWord = stringToArray[0];

//   for (let element of stringToArray) {
//     if (element.length > longestWord.length) {
//       longestWord = element;
//     }
//   }
//   console.log(longestWord);
//   return longestWord;
// }

// findLongestWord('The quick brown fox jumped over the lazy dog');
// findLongestWord('Google do a roll');
// findLongestWord('May the force be with you');

// ------T A S K------22---P U S H-------

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (i = min, max; i <= max; i += 1) {
//     numbers.push(i);
//   }

//   console.log(numbers);
//   // Change code above this line
//   return numbers;
// }
// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);
// createArrayOfNumbers(29, 34);

// --------------T A S K------------23----ЗАДАЧА: ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ---

// function filterArray(numbers, value) {
//   const arr = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       arr.push(numbers[i]);
//     }
//   }
//   console.log(arr);
//   return arr;
// }

// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);

// ------------------------T A S K--------------24-------

// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];
//   let hasFruit = fruits.includes(fruit) ? true : false;

//   // if (hasFruit) {
//   //   true;
//   // } else {
//   //   false;
//   // }

//   console.log(hasFruit);
//   return hasFruit;
// }
// checkFruit('plum');
// checkFruit('mandarin');
// checkFruit('pear');
// checkFruit('Pear');
// checkFruit('apple');

// ------------------------T A S K----------------25------------

// function getCommonElements(array1, array2) {
//   let newArray = [];

//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       newArray.push(array1[i]);
//     }
//   }
//   console.log(newArray);
//   return newArray;
//   // Change code above this line
// }
// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// getCommonElements([1, 2, 3], [10, 20, 30]);

// ----------------T A S K--------------26------------S U M-----
// function calculateTotalPrice(order) {
//   let total = 0;

//   for (element of order) {
//     total += element;
//   }
//   console.log(total);
//   return total;
// }

// // Change code below this line

// // for (let i = 0; i < order.length; i += 1) {
// //   total += order[i];

// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);
// calculateTotalPrice([]);

// -----------------------T A S K----------------27-----------

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   const number = numbers[i];

//   console.log(filteredNumbers);
//   return filteredNumbers;
// console.log(numbers);
// }

// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);

// ----------------------T A S K------28-------------%%%%%%%-----

// const a = 3 % 3;
// console.log(a);
// const b = 4 % 3;
// console.log(b);
// const c = 11 % 4;
// console.log(c);
// const d = 12 % 7;
// console.log(d);
// const e = 8 % 6;
// console.log(e);

// --------T A S K----29---ЗАДАЧА: ПАРНІ ЧИСЛА-----

// function getEvenNumbers(start, end) {
//   let filteredNumbers = [];

//   for (let i = start; i <= end; i += 1) {
//     const number = i;
//     if (number % 2 === 0) {
//       filteredNumbers.push(number);
//     }
//   }
//   console.log(filteredNumbers);
//   return filteredNumbers;
// }
// getEvenNumbers(2, 5);
// getEvenNumbers(3, 11);
// getEvenNumbers(6, 12);
// getEvenNumbers(8, 8);
// getEvenNumbers(7, 7);

// -------T A S K----------30----------------

// Оголошена змінна start зі значенням 6
// Оголошена змінна end зі значенням 27
// Оголошена змінна number без ініціалізації
// Підсумкове значення змінної number дорівнює 10
// В циклі for використовується break для виходу до завершення усіх ітерацій циклу

// const start = 6;
// const end = 27;
// let number = 0;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     console.log('перше число яке ділиться на 5 без остачі 10 ---- ', number);
//     break;
//   }
// }

// -------------T A S K-----------31----------

// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       console.log(number);
//       return i;
//     }
//   }
// }

// findNumber(2, 6, 5);
// findNumber(8, 17, 3);
// findNumber(6, 9, 4);
// findNumber(16, 35, 7);

// --------Т Е О Р І Я--------------

// function fn() {
//   for (let i = 0; i <= 5; i += 1) {
//     console.log(i);

//     if (i === 3) {
//       console.log(
//         'Знайшли число 3, робимо повернення, перериваючи цикл і функцію'
//       );
//       return i;
//     }
//   }

//   // Цей console.log не виконається
//   console.log('Лог після циклу в тілі функції');
// }

// const result = fn();
// console.log('Лог після виходу з функції');
// console.log(`Результат виконання функції ${result}`);

// ----------------T A S K-----------32----------ЗАДАЧА: ФУНКЦІЯ INCLUDES()------
// function includes(array, value) {
//   for (let i = 0; i < array.length; i += 1) {
//     if (value === array[i]) {
//       // ----for-----of----
//       //   for (element of array) {
//       //     if (value === element) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(
//   includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter')
// );
// console.log(
//   includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus')
// );
// console.log(includes(['apple', 'plum', 'pear', 'orange'], 'plum'));
// console.log(includes(['apple', 'plum', 'pear', 'orange'], 'kiwi'));
