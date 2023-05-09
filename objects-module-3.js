// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };
// const aptRating = apartment.rating;
// console.log('rating: ', aptRating);
// const aptDescr = apartment.descr;
// console.log('description: ', aptDescr);
// const aptPrice = apartment.price;
// console.log('price: ', aptPrice);
// const aptTags = apartment.tags;
// console.log('tags: ', aptTags);

// -------------T A S K ------------4----------

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };
// const ownerName = apartment.owner.name;
// console.log('ownerName :', ownerName);

// const ownerPhone = apartment.owner.phone;
// console.log('phone: ', ownerPhone);

// const ownerEmail = apartment.owner.email;
// console.log('email: ', ownerEmail);

// const numberOfTags = apartment.tags.length;
// console.log('length: ', numberOfTags);

// const firstTag = apartment.tags[0];
// console.log('firstTag: ', firstTag);

// const lastTag = apartment.tags[2];
// console.log('lastTag: ', lastTag);

// ----------T A S K-------------5-------------

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// const aptRating = apartment['rating'];
// console.log('rating: ', aptRating);

// const aptDescr = apartment['descr'];
// console.log('descr: ', aptDescr);

// const aptPrice = apartment['price'];
// console.log('price: ', aptPrice);

// const aptTags = apartment['tags'];
// console.log('tags: ', aptTags);

// console.log(apartment);

// ---------T A S K----------6------------

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Henry Sibola';
// apartment.tags.push('trusted');
// console.log(apartment);

// ------------T A S K----------7----------------

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: 'Jamaica',
//   city: 'Kingston',
// };

// console.log(apartment);

// --------T A S K--------8-----------

// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   name,
//   price,
//   image,
//   tags,
// };

// console.log(product);

// -----------T A S K-------9---------------

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   [emailInputName]: 'henry.carter@aptmail.com',
//   [passwordInputName]: 'jqueryismyjam',
// };

// console.log(credentials);

// ---------T A S K------------10----------for...in----------

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];

// for (const key in apartment) {
//   keys.push(key);
//   console.log('keys: ', keys);

//   values.push(apartment[key]);
//   console.log('values: ', values);
// }

// -------------T A S K----------11----------for...in--------

// const keys = [];
// const values = [];

// const advert = {
//   service: 'apt',
// };

// const apartment = Object.create(advert);
// apartment.descr = 'Spacious apartment in the city center';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
// }
// console.log('key: ', keys);

// console.log('values: ', values);

// -----T A S K---------12----------ЗАДАЧА: ПІДРАХУНОК ВЛАСТИВОСТЕЙ----------

// function countProps(object) {
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   console.log(propCount);
//   return propCount;
// }

// console.log(countProps({ name: 'Mango', age: '2' }));
// countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 });

// -----------T A S K--------------13---------Object.keys--------

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line

// const keys = Object.keys(apartment);
// console.log('keys: ', keys);

// for (let key of keys) {
//   values.push(apartment[key]);
// }

// console.log('values: ', values);

//-----T A S K-----------14---ЗАДАЧА: ПІДРАХУНОК ВЛАСТИВОСТЕЙ 2-------

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   keys = Object.keys(object);
//   console.log('keys: ', keys);

//   for (const key of keys) {
//     propCount += 1;
//   }

//   console.log('propCount: ', propCount);
//   return propCount;
// }

// countProps({ name: 'Mango', age: '2' });
// countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 });

// ----------T A S K-------15-------Object.keys()---Object.values()----

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// console.log('keys: ', keys);

// const values = Object.values(apartment);
// console.log('values: ', values);

// ----------T A S K--------16------ЗАДАЧА: ВИТРАТИ НА ЗАРПЛАТУ----

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const values = Object.values(salaries);
//   console.log('values:  ', values);

//   for (const value of values) {
//     totalSalary += value;
//   }
//   console.log('sum:  ', totalSalary);
//   return totalSalary;
// }
// countTotalSalary({});
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 });

// ------------T A S K-----17----------

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (color of colors) {
//   hexColors.push(color.hex);
//   console.log('hex - ', hexColors);

//   rgbColors.push(color.rgb);
//   console.log('rgb - ', rgbColors);
// }

// ---T A S K-----18---ЗАДАЧА--ПОШУК ОБ'ЄКТА ЗА ЗНАЧЕННЯМ ВЛАСТИВОСТІ--

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
// }
// console.log(getProductPrice('Radar'));
// console.log(getProductPrice('Grip'));
// console.log(getProductPrice('Scanner'));
// console.log(getProductPrice('Droid'));
// console.log(getProductPrice('Engine'));

// --T A S K-----19---ЗАДАЧА: КОЛЕКЦІЯ ЗНАЧЕНЬ ВЛАСТИВОСТІ---

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const propValues = [];

//   for (const product of products) {
//     if (product.hasOwnProperty([propName])) {
//       propValues.push(product[propName]);
//     }
//   }
//   return propValues;
// }

// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('category'));

// ---------T A S K------20----ЗАДАЧА: ЗАГАЛЬНА ВАРТІСТЬ ТОВАРУ--

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let totalPrice = 0;
//   for (product of products) {
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//     }
//   }
//   console.log(totalPrice);
//   return totalPrice;
// }
// calculateTotalPrice('Blaster');
// calculateTotalPrice('Radar');
// calculateTotalPrice('Droid');
// calculateTotalPrice('Grip');
// calculateTotalPrice('Scanner');

// -------T A S K----------21----деструктуризації властивостей об'єкта------

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow } = highTemperatures;
// console.log(yesterday, today, tomorrow);
// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);

// ------T A S K---------22-----------------

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;

// console.log(yesterday, today, tomorrow, icon);

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// --------T A S K----------23---------------

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
//
// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;

// console.log(highYesterday, highToday, highTomorrow, highIcon);
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// --------T A S K-------------24------------------

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// --------T A S K---------25------------------

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const {
//   today: {
//     high: highToday,
//     low: lowToday,
//     icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
//   tomorrow: {
//     high: highTomorrow,
//     low: lowTomorrow,
//     icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
// } = forecast;

// console.log('today:  ', highToday, lowToday, todayIcon);

// console.log('tomorrow:  ', highTomorrow, lowTomorrow, tomorrowIcon);

// -------------T A S K-------------26-----------------

// function calculateMeanTemperature(forecast) {
//   const {
//     today: { high: todayHigh, low: todayLow },
//     tomorrow: { high: tomorrowHigh, low: tomorrowLow },
//   } = forecast;

// ---Або коли обʼєкт деструкуризували в самому підписі функції---

// calculateMeanTemperature({
//   today: { high: todayHigh, low: todayLow },
//   tomorrow: { high: tomorrowHigh, low: tomorrowLow },
// });

// Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(
//   calculateMeanTemperature({
//     today: { low: 28, high: 32 },
//     tomorrow: { low: 25, high: 29 },
//   })
// );
// console.log(
//   calculateMeanTemperature({
//     today: { low: 37, high: 40 },
//     tomorrow: { low: 33, high: 38 },
//   })
// );

// -----------T A S K---------27---------... (spread) ------

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// console.log('max:  ', bestScore);

// const worstScore = Math.min(...scores);
// console.log('min: ', worstScore);

// ---------T A S K----------28-----------

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// console.log('allScores: ', allScores);

// const bestScore = Math.max(...allScores);
// console.log('bestScore: ', bestScore);

// const worstScore = Math.min(...allScores);
// console.log('worstScore: ', worstScore);

// -------- T A S K------------29---------------

// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings);

// --------------T A S K-------30-------ЗАДАЧА. КАРТКИ ЗАВДАНЬ

// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';

//   const newTask = { category, priority, ...data, completed };

//   console.log(newTask);
//   return newTask;
// }
// makeTask({});
// makeTask({ category: 'Homemade', priority: 'Low', text: 'Take out the trash' });
// makeTask({ category: 'Finance', text: 'Take interest' });
// makeTask({ priority: 'Low', text: 'Choose shampoo' });
// makeTask({ text: 'Buy bread' });

// --------T A S K---------31-------------R E S T-------

// function add(...args) {
//   let sum = 0;
//   for (let arg of args) {
//     sum += arg;
//   }
//   console.log(sum);
//   return sum;
// }
// add(15, 27);
// add(12, 4, 11, 48);
// add(32, 6, 13, 19, 8);
// add(74, 11, 62, 46, 12, 36);

// -------------T A S K---------32-------REST----and----if----

// function addOverNum(firstNum, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > firstNum) {
//       total += arg;
//     }
//   }

//   console.log(total);
//   return total;
// }

// addOverNum(50, 15, 27);
// addOverNum(10, 12, 4, 11, 48, 10, 8);
// addOverNum(15, 32, 6, 13, 19, 8);
// addOverNum(20, 74, 11, 62, 46, 12, 36);

// --------T A S K-----33---includes-----ЗАДАЧА.МАСИВ ЗБІГІВ---І Н К Л У Д С--

// function findMatches(firstArr, ...secondArr) {
//   const matches = []; // Don't change this line

//   for (let i = 0; i < secondArr.length; i += 1) {
//     if (firstArr.includes(secondArr[i])) {
//       matches.push(secondArr[i]);
//     }
//   }

//   console.log('matches  ', matches);
//   // Change code above this line
//   return matches;
// }
// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41);
// findMatches([63, 11, 8, 29], 4, 7, 16);

// -------T A S K--------34----------

// const bookShelf = {
//   // Change code below this line
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
// };

// console.log(bookShelf.getBooks());

// console.log(bookShelf.addBook('Haze'));

// console.log(bookShelf.removeBook('Red sunset'));

// console.log(bookShelf.updateBook('Sands of dune', 'Dune'));

// ---------T A S K--------35----------

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     //   this.books.splice(this.books.indexOf(oldName), 1, newName);

//     bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);

//     console.log(this.books);
//     return this.books;
//     // Change code above this line
//   },
// };
// bookShelf.updateBook('Haze', 'Dungeon chronicles');
// bookShelf.updateBook('The last kingdom', 'Dune');

// -----------T A S K-----------36----ЗАДАЧА. КРАМНИЦЯ ЗІЛЛЯ «У СТАРОЇ ЖАБИ»---
// const atTheOldToad = {

//   potions: [],

// };

// ----------T A S K----------37-----ЗАДАЧА. ОТРИМУЄМО ВСЕ ЗІЛЛЯ-----

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   // Change code below this line
//   getPotions() {
//     console.log(this.potions);
//     return this.potions;
//   },
//   // Change code above this line
// };
// atTheOldToad.getPotions([]);

// ------------T A S K-------38-----ЗАДАЧА: ДОДАЄМО НОВЕ ЗІЛЛЯ---

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   addPotion(potionName) {
//     // Change code below this line
//     this.potions.push(potionName);

//     console.log(this.potions);
//     return this.potions;
//     // Change code above this line
//   },
// };

// atTheOldToad.addPotion('Invisibility');
// atTheOldToad.addPotion('Power potion');

// ---------T A S K----39--------ЗАДАЧА: ВИДАЛЯЄМО ЗІЛЛЯ------

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   removePotion(potionName) {
//     // Change code below this line
//     const potionIndex = this.potions.indexOf(potionName);
//     this.potions.splice(potionIndex, 1);

//     console.log(this.potions);
//     return this.potions;
//     // Change code above this line
//   },
// };
// atTheOldToad.removePotion('Dragon breath');
// atTheOldToad.removePotion('Speed potion');

// ----------T A S K------40-----ЗАДАЧА: ОНОВЛЮЄМО ЗІЛЛЯ---

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     const potionIndex = this.potions.indexOf(oldName);
//     this.potions.splice(potionIndex, 1, newName);

//     console.log(this.potions);
//     return this.potions;
//     // Change code above this line
//   },
// };

// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
// atTheOldToad.updatePotionName('Stone skin', 'Invisibility');

// -------T A S K-------41-------ЗАДАЧА: РОЗШИРЮЄМО ІНВЕНТАР---

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     console.table(this.potions);
//     const { potions } = this;
//     for (const potion of potions) {
//       if (newPotion.name === potion.name) {
//         return `Error! ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     const newInventory = {
//       ...newPotion,
//     };

//     potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     const { potions } = this;

//     for (let i = 0; i < potions.length; i += 1) {
//       const { name } = potions[i];
//       if (potionName === name) {
//         console.log('Find potion ', potionName);
//         console.log('index: ', i);

//         potions.splice(i, 1);
//       }
//     }
//     return potions;
//   },
//   updatePotionName(oldName, newName) {
//     let result = `Potion ${oldName} is not in inventory!`;
//     const { potions } = this;

//     for (let i = 0; i < potions.length; i += 1) {
//       const potion = potions[i];
//       if (oldName === potion.name) {
//         potion.name = newName;
//         result = `Found ${oldName} change to ${newName}`;
//       }
//     }

//     return result;
//   },
// };

// console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }));
// console.log(atTheOldToad.addPotion({ name: 'Power potion', price: 270 }));
// console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 520 }));
// console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }));
// console.table(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));
// console.table(atTheOldToad.getPotions());
// console.table(atTheOldToad.removePotion('Dragon breath'));
// console.table(atTheOldToad.removePotion('Speed potion'));
// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
// // console.table(atTheOldToad.getPotions());
// console.log(
//   atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion')
// );

// console.table(atTheOldToad.getPotions());
