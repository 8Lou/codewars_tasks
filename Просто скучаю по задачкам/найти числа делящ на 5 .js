// Считает числа от 1 до 1000, которые делятся на 5 без остатка

let count = 0;
for (let i = 1; i <= 1000; i++) {
  if (i % 5 === 0) {
    count++;
  }
}
console.log(count);
