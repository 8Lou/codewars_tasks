// посчитать количество цифр, которые понадобятся для написания всех чисел из диапазона от 1 до 1000

//1
function а(from, to) {
  let count = 0;
  for (let i = from; i <= to; i++) {
    count += i.toString().length;
  }
  return count;
}

const б = а(1, 1000);
console.log(б);

//2 из диапазона от 1 до 15

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

