// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);

// function sayHi() {
//   console.log('Hello, this is my first function!');
// }

// sayHi();

// 1. Оголошення параметрів x, y, z
// function multiply(x, y, z) {
//   console.log(`Результат множення дорівнює ${x * y * z}`);
// }

// // 2. Передача аргументів
// multiply(2, 3, 5); // Результат множення дорівнює 30
// multiply(4, 8, 12); // Результат множення дорівнює 384
// multiply(17, 6, 25); // Результат множення дорівнює 2550

// function add(a, b, c) {
//   // Change code below this line

//   return a + b + c;
//   // Change code above this line
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// ---------------------10------------T A S K--------------------------------

// function makeMessage(name, price) {
//   // Change code below this line
//   const productName = name;
//   const productPrice = price;
//   const message = `You picked ${productName}, price per item is ${productPrice} credits`;
//   console.log(message);
//   // Change code above this line
//   return message;
// }

// makeMessage('Radar', 6150);
// makeMessage('Scanner', 3500);
// makeMessage('Reactor', 8000);
// makeMessage('Engine', 4070);

// --------------------11-----------T A S K----------------------
// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const quantity = orderedQuantity;
//   const price = pricePerItem;
//   const totalPrice = quantity * price;
//   console.log(totalPrice);

//   // Change code above this line
//   return totalPrice;
// }

// calculateTotalPrice(5, 100);
// calculateTotalPrice(8, 60);
// calculateTotalPrice(3, 400);
// calculateTotalPrice(1, 3500);
// calculateTotalPrice(12, 70);

// -----------------T A S K --------------12--------------------

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//   const quantity = orderedQuantity;
//   const price = pricePerDroid;
//   const delivery = deliveryFee;
//   const totalPrice = quantity * price + delivery;
//   const message = `You ordered droids worth ${totalPrice} credits. Delivery (${delivery} credits) is included in total price.`;
//   console.log(message);

//   // Change code above this line
//   return message;
// }

// makeOrderMessage(2, 100, 50);
// makeOrderMessage(4, 300, 100);
// makeOrderMessage(10, 70, 200);

// ----------------T A S K--------------13-------------

// function isAdult(age) {
//   // Change code below this line
//   const passed = age >= 18;
//   console.log(passed);
//   // Change code above this line
//   return passed;
// }
// isAdult(20);
// isAdult(14);
// isAdult(8);
// isAdult(37);

// -----------------T A S K----------------14----------------------
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   const isMatch = password === SAVED_PASSWORD;
//   console.log(isMatch);
//   // Change code above this line
//   return isMatch;
// }

// isValidPassword('mangodab3st');
// isValidPassword('kiwirul3z');
// isValidPassword('jqueryismyjam');

// --------------------T A S K----------------15------------------

// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }
//   console.log(message);
//   return message;
// }

// checkAge(20);
// checkAge(8);
// checkAge(14);
// checkAge(38);

// -----------------T A S K-----------------16----------------------

// function checkStorage(available, ordered) {
//   let message;
//   if (ordered > available) {
//     message = 'Not enough goods in stock!';
//   } else {
//     message = 'Order is processed, our manager will contact you.';
//   }
//   console.log(message);
//   return message;
// }

// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(200, 20);
// checkStorage(200, 150);
// checkStorage(150, 180);

// ------------------------T A S K--------------17-----------------

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// ---------------------T A S K-----------------18---------------

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   const totalPrice = pricePerDroid * orderedQuantity;
//   const leftCredits = customerCredits - pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//     message = 'Insufficient funds!';
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${leftCredits} credits left`;
//   }
//   console.log(message);
//   // Change code above this line
//   return message;
// }

// makeTransaction(3000, 5, 23000);
// makeTransaction(1000, 3, 15000);
// makeTransaction(5000, 10, 8000);
// makeTransaction(2000, 8, 10000);
// makeTransaction(500, 10, 5000);

// ---------------T A S K ---------------19-------------------

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) {
//     // Change this line
//     message = 'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) {
//     // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }
//   console.log(message);
//   return message;
// }

// checkPassword('mangohackzor');
// checkPassword(null);
// checkPassword('polyhax');
// checkPassword('jqueryismyjam');

// ---------------T A S K --------------20-----------------

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered === 0) {
//     message = 'There are no products in the order!';
//   } else if (ordered > available) {
//     message = 'Your order is too large, there are not enough items in stock!';
//   } else {
//     message = 'The order is accepted, our manager will contact you';
//   }
//   console.log(message);
//   // Change code above this line
//   return message;
// }
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);

// -----------T A S K--------------21----------&&-----------

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; // Change this line
//   console.log(isInRange);
//   return isInRange;
// }
// isNumberInRange(10, 30, 17);
// isNumberInRange(10, 30, 5);
// isNumberInRange(20, 50, 24);
// isNumberInRange(20, 50, 76);

// ------------T A S K ---22----------------||-----------

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === 'pro' || subType === 'vip'; // Change this line

//   console.log(canAccessContent);
//   return canAccessContent;
// }

// checkIfCanAccessContent('pro');
// checkIfCanAccessContent('starter');
// checkIfCanAccessContent('vip');
// checkIfCanAccessContent('free');

// -----T A S K ---------23-------!-----------

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line
//   console.log(isNotInRange);
//   return isNotInRange;
// }

// isNumberNotInRange(10, 30, 17);
// isNumberNotInRange(10, 30, 5);
// isNumberNotInRange(20, 50, 24);
// isNumberNotInRange(20, 50, 76);

// ---------T A S K---------24-------------

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent > 50000 || totalSpent === 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent <= 49999) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent <= 19999) {
//     discount = BRONZE_DISCOUNT;
//   } else discount = BASE_DISCOUNT;

//   console.log(discount);
//   return discount;
// }

// getDiscount(137000);
// getDiscount(46900);
// getDiscount(8250);
// getDiscount(1300);
// getDiscount(5000);
// getDiscount(20000);
// getDiscount(50000);

// -----------T A S K ---------25--Тернарний оператор------

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   message =
//     ordered > available
//       ? 'Not enough goods in stock!'
//       : 'The order is accepted, our manager will contact you';

//   // if (ordered > available) {
//   //   message = 'Not enough goods in stock!';
//   // } else {
//   //   message = 'The order is accepted, our manager will contact you';
//   // }
//   console.log(message);
//   // Change code above this line
//   return message;
// }

// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(200, 20);
// checkStorage(200, 150);
// checkStorage(150, 180);

// -----------T A S K---------------26---------

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   // Change code below this line
//   message =
//     password === ADMIN_PASSWORD
//       ? 'Access is allowed'
//       : 'Access denied, wrong password!';
//   console.log(message);
//   // Change code above this line
//   return message;
// }
// checkPassword('jqueryismyjam');
// checkPassword('angul4r1sl1f3');
// checkPassword('r3actsux');

// ---------------T A S K -----27----switch--------

// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//   switch (type) {
//     case 'starter': // Change this line
//       price = 0; // Change this line
//       break;

//     case 'professional': // Change this line
//       price = 20; // Change this line
//       break;

//     case 'organization': // Change this line
//       price = 50; // Change this line
//       break;
//   }
//   console.log(price);
//   // Change code above this line
//   return price;
// }

// getSubscriptionPrice('professional');
// getSubscriptionPrice('organization');
// getSubscriptionPrice('starter');

// ---------T A S K ------28------------------

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   switch (password) {
//     case (password = null):
//       message = 'Canceled by user!';
//       break;

//     case (password = ADMIN_PASSWORD):
//       message = 'Welcome!';
//       break;

//     default:
//       message = 'Access denied, wrong password!';
//   }

//   // if (password === null) {
//   //   message = 'Canceled by user!';
//   // } else if (password === ADMIN_PASSWORD) {
//   //   message = 'Welcome!';
//   // } else {
//   //   message = 'Access denied, wrong password!';
//   // }

//   console.log(message);
//   return message;
// }
// checkPassword('mangohackzor');
// checkPassword(null);
// checkPassword('polyhax');
// checkPassword('jqueryismyjam');

// ----------T A S K---------29 ------------

// function getShippingCost(country) {
//   let message;
//   let price;

//   // Change code below this line
//   switch (country) {
//     case 'China':
//       price = 100;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case 'Chile':
//       price = 250;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case 'Australia':
//       price = 170;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case 'Jamaica':
//       price = 120;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     default:
//       message = 'Sorry, there is no delivery to your country';
//   }
//   // Change code above this line
//   console.log(message);
//   return message;
// }
// getShippingCost('Australia');
// getShippingCost('Germany');
// getShippingCost('China');
// getShippingCost('Chile');
// getShippingCost('Jamaica');
// getShippingCost('Sweden');

// --------T A S K------------30------------

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   console.log(message);
//   return message;
// }
// getNameLength('Poly');
// getNameLength('Harambe');
// getNameLength('Billy');
// getNameLength('Joe');

// ------------T A S K--------------31----------------

// const courseTopic = 'JavaScript essentials';
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// console.log(courseTopic.length);
// console.log(firstElement[0]);
// console.log(lastElement[20]);

// -------------T A S K------------32-----slice(0, length)----------

// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   console.log(substring);
//   return substring;
// }

// getSubstring('Hello world', 3);
// getSubstring('Hello world', 6);
// getSubstring('Hello world', 8);
// getSubstring('Hello world', 11);
// getSubstring('Hello world', 0);

// ---------T A S K--------33-----ЗАДАЧА---ФОРМАТУВАННЯ ПОВІДОМЛЕННЯ---

// function formatMessage(message, maxLength) {
//   let result;
//   result =
//     message.length > maxLength ? message.slice(0, maxLength) + '...' : message;

//   console.log(result);
//   return result;
// }

// formatMessage('Curabitur ligula sapien', 16);
// formatMessage('Curabitur ligula sapien', 23);
// formatMessage('Vestibulum facilisis purus nec', 20);
// formatMessage('Vestibulum facilisis purus nec', 30);
// formatMessage('Nunc sed turpis a felis in nunc fringilla', 15);
// formatMessage('Nunc sed turpis a felis in nunc fringilla', 41);

// --------T A S K---------34---------------

// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase();

//   console.log(normalizedInput);
//   return normalizedInput;
// }
// normalizeInput('Hello world');
// normalizeInput("This ISN'T SpaM");
// normalizeInput('Big SALE');

// --------------T A S K--------35-------------

// function checkForName(fullName, name) {
//   const result = fullName.includes(name); // Change this line

//   console.log(result);
//   return result;
// }
// checkForName('Egor Kolbasov', 'Egor');
// checkForName('Egor Kolbasov', 'egor');
// checkForName('Egor Kolbasov', 'egOr');
// checkForName('Egor Kolbasov', 'Zhenya');
// checkForName('Vadim Nekrasov', 'Vadim');
// checkForName('Vadim Nekrasov', 'vadim');
// checkForName('Vadim Nekrasov', 'Dima');

// ------T A S K----36---------ЗАДАЧА: ПЕРЕВІРКА СПАМУ------

// function checkForSpam(message) {
//   let result;
//   result =
//     message.toLowerCase().includes('spam') ||
//     message.toLowerCase().includes('sale');

//   // -------Або варіант нижче---------

//   // const normalizedMessage = message.toLowerCase();
//   // if (
//   //   normalizedMessage.includes('spam') ||
//   //   normalizedMessage.includes('sale')
//   // ) {
//   //   result = true;
//   // } else {
//   //   result = false;
//   // }

//   console.log(result);
//   return result;
// }
// checkForSpam('Latest technology news');
// checkForSpam('JavaScript weekly newsletter');
// checkForSpam('Get best sale offers now!');
// checkForSpam('Amazing SalE, only tonight!');
// checkForSpam('Trust me, this is not a spam message');
// checkForSpam('Get rid of sPaM emails. Our book in on sale!');
// checkForSpam('[SPAM] How to earn fast money?');
