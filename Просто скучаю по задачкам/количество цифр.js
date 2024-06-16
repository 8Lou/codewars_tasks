// посчитать количество цифр, которые понадобятся для написания всех чисел из диапазона от 1 до 1000

//1
function а(from, to) {
  let count = 0;
  for (let i = from; i <= to; i++) {
    count += i.toString().length;
  }
  return count;
}

const бб = а(1, 1000);
console.log(бб);

//1,1 стрелочная
const a = (x, y) => {
  let count = 0;
  for (let i = x; i <= y; i++) {
    count += i.toString().length;
  }
  return count;
};

const bб = a(1, 15);
console.log(bб);

//2 диапазон от 1 до 15

function a(to) {
  let count = 0;

  count += 1 * 9;

  if (to > 9) {
    let c = Math.min(to, 15);
    count += 2 * (c - 9); 
  }
  return count;
}

const b = a(15);
console.log('Андрей - воробей:', b);

//3 стрелочная перебор массива, лаконично но дорогая
// let а = to => Array.from({length: to}, (с, i) => i + 1)
//   .reduce((count, num) => count + num.toString().length, 0);

// let б = а(17);
// console.log('Андрей - воробей:', б);


//4
function а(в) {
  let count = 0;
  let length = в.toString().length;
  for (let i = 1; i < length; i++) {
    count += i * 9 * Math.pow(10, i - 1);
  }

  let д = Math.pow(10, length - 1) - 1;
  count += (в - д) * length;

  return count;
}

// Пример использования
const to = 10; // напишите любое значение
const б = а(to);
console.log(б);