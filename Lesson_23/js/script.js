'use strict'
console.log(alert('Задания 3, 4 и 5 внутри файла JS'));


// ===================================================================
// ДОМАШКА #1 - Операторы JAVASCRIPT
// ===================================================================

// Какой или какие из вариантов не верны
/* 
Вариант №1
console.log('35' + - "22"); // Вернет 13

Вариант №2
console.log('35' * "22"); // Вернет 770

Вариант №3
console.log('588' > 22++); // Вернет true

Вариант №4
let userCounter = 0;
let newUser = userCounter++;
console.log(newUser); // Вернет 1

Вариант №5
console.log(!false && 11 || 18 && !''); // Вернет 18

Вариант №6
let name = 0;
console.log(name ?? "Без имени");
*/


// ===================================================================
// ДОМАШКА #2 - IF ELSE в JAVASCRIPT
// ===================================================================

// Какой из вариантов вернет в консоль слово "истина"
/* 
Вариант №1
if (1 === "1") {
	console.log('Истина!');
} else {
	console.log('Ложь!');
}

Вариант №2
if (5 == "5") {
	console.log('Истина!');
} else {
	console.log('Ложь!');
}
Вариант №3
let message = (92 > '11' && 58 < 100) ? 'Истина!' : 'Ложь!';
console.log(message);

Вариант №4
if (0) {
	console.log('Ложь!');
} else {
	console.log('Истина!');
}
 */


// ===================================================================
// ДОМАШКА #3 - Циклы FOR и WHILE
// ===================================================================

// Задача №1
// Вывести в консоль числа от 1 до 5 всеми циклами
// Ответ:

console.log('Задача №1');
// Цикл while
console.log('Цикл while');
let varOne = 1;
while (varOne <= 5) {
	console.log(varOne);
	varOne++;
}

// Цикл do while
console.log('Цикл do while');
let varTwo = 1;
do {
	console.log(varTwo);
	varTwo++;
} while (varTwo <= 5);

// Цикл for
console.log('Цикл for');
for (let numThree = 1; numThree <= 5; numThree++) {
	console.log(numThree);
}

// Задача №2
console.log('Задача №2');

let num = 8;
while (num) {
	// Последний результат 0, верно?
	console.log(num);
	num--;
}

// Ответ:
/*
	После того как num будет равно 0,
	код в блоке выполнятся не будет,
	поэтому последний результат будет => 1
*/

// Задача №3
// Переписать на while
console.log('Задача №3');

for (let num = 0; num < 3; num++) {
	console.log(`Число: ${num}`);
}
// Ответ:
let newNum = 0;
while (newNum < 3) {
	console.log(`Число: ${newNum}`);
	newNum++;
}

// Задача №4
console.log('Задача №4');

// Прекратить работу цикла №1 когда size равна 1
for (let num = 0; num < 2; num++) {
	for (let size = 0; size < 3; size++) {
		console.log(size);
	}
}
// Ответ:
stopRound: for (let num = 0; num < 2; num++) {
	for (let size = 0; size < 3; size++) {
		if (size == 1) break stopRound;
		console.log(size);
	}
}

// ===================================================================
// ДОМАШКА #4 - Числа в JAVASCRIPT
// ===================================================================

// Задача №1
// Получить верное значение округления
/*
let numOne = Math.round(1.005 * 100) / 100;
console.log(numOne); // Выведется 1 что не верно
*/
// Ответ:
let numOne = (Math.round((1.005 + Number.EPSILON) * 100)) / 100;
console.log(numOne);

// Задача №2
// Получить число 135.58 из строки
let strValue = "135.58px";
// Ответ:
console.log(parseFloat(strValue));

// Задача №3
// Построить верное условное ветвление
let value = 58 + "Фрилансер";
if (/* тут ответ => */ isNaN(value)) {
	console.log('Результат выражения NaN');
}

// Задача №4
// Найти максимальное число из 10,58,39,-150,0
// Ответ:
console.log(Math.max(10, 58, 39, -150, 0));

// Задача №5
// Округлить число 58.858 до числа 58
// Ответ:
console.log(Math.floor(58.858));


// ===================================================================
// ДОМАШКА #5 - Строки в JAVASCRIPT
// ===================================================================

// Задача №1
// Верна ли запись?
let fls = "фрилансер";
let text = 'Привет! Я ${fls}';
// Ожидаем увидеть Привет! Я фрилансер
console.log(text);
// Ответ: Неверно! Нужно использовать обратные кавычки

// Задача №2
// Получить символ "н" строки:
let textTwo = 'фрилансер'
// Ответ:
let searchSimbol = 'н';
if (textTwo.toLowerCase().includes(searchSimbol.toLowerCase())) {
	console.log(textTwo[textTwo.toLowerCase().indexOf(searchSimbol.toLowerCase())]);
} else {
	console.log(`В слове ${textTwo} отсутствует символ ${searchSimbol}`);
}

// Задача №3
// Верно?
let textThree = 123 + '456';
// Ожидаем 579
console.log(textThree);
// Ответ: Не верно, когда используется оператов сложения и
// один из аргументов строка, то и результат будет строка "123456"

// Задача №4
// Получить строку в верхнем регистре
let textFour = 'фрилансер';
// Ответ:
console.log(textFour.toUpperCase());

// Задача №5
// Получить подстроку "лан" из:
let textFive = 'фрилансер';
let searchSubString = 'лан';
if (textFive.toLowerCase().includes(searchSubString.toLowerCase())) {
	let sliceFrom = textFive.toLowerCase().indexOf(searchSubString.toLowerCase());
	let sliceTo = sliceFrom + searchSubString.length;
	console.log(textFive.slice(sliceFrom, sliceTo));
} else {
	console.log(`В слове ${textFive} отсутствует подстрока ${searchSubString}`);
}

// Задача №6
// true или false?
let textSix = 'фрилансер';
console.log(textSix.includes('лан', 4));
// Ответ: False - потому что строка это массив, а индекс элементов массива начинается с 0, буква "л" равна индексу 3