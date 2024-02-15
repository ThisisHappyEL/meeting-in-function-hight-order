// Задание 1
const arr = ['Иван', 'Мария', 'Алексей', 'Ольга', 'Сергей', 'Анна'];
console.log('Задание 1');
const helloForEach = arr.forEach((element) => console.log(`Привет, ${element}`));

// Задание 2
const arr2 = [1, 2, 3, 4, 5];
console.log('Задание 2');
const multiplyMap = arr2.map((number) => number * 10);
console.log(multiplyMap);

// Задание 3
const arr3 = [5, 12, 8, 130, 44];
console.log('Задание 3');
const bigTenFilter = arr3.filter((number) => number > 10);
console.log(bigTenFilter)

// Задание 4
const arr4 = [
  {name: 'Иван', age: 23},
  {name: 'Мария', age: 18},
  {name: 'Алексей', age: 32},
  {name: 'Ольга', age: 24},
  {name: 'Сергей', age: 17},
  {name: 'Анна', age: 21}
  ]

console.log('Задание 4');
/*
const adultFilter = arr4.filter((human) => human.age > 18);
const newArr = [];
const objToStringName = adultFilter.map((human) => newArr.push(human.name))
const objToStringAge = adultFilter.map((human) => newArr.push(human.age))
console.log(newArr);
*/

//Шляпа какая-то xD. Наверное мапом можно, но я пока не знаю как. Попробую reduce

const adultFilter = arr4.filter((human) => human.age > 18);

const newArr = adultFilter.reduce((accum, human) => {
  accum.push(`${human.name} (${human.age})`);
  return accum;
}, []);
console.log(newArr)

//Задание 5
console.log('Задание 5');
const arr5 = [
  {product: 'Телефон', price: 50000, quantity: 1},
  {product: 'Чехол', price: 1500, quantity: 2},
  {product: 'Зарядное устройство', price: 2500, quantity: 1}
  ]

const totalPrice = arr5.reduce((accum, product) => {
  accum += product.price * product.quantity;
  return accum
}, 0)
console.log(totalPrice)