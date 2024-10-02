const readline = require("readline").createInterface({
  input: process.stdin,
});

function atm(line) {
  if (!line) return ""; 

  // Разделяем строку на сумму и строку с номиналами
  const [sumStr, nominalStr] = line.split(";");
  
  // Парсим сумму
  const sum = parseInt(sumStr, 10);
  
  // Если номиналов нет, проверяем, может ли сумма быть 0
  if (!nominalStr) {
    return sum === 0 ? "" : "Error: Not enough money";
  }

  // Разделяем номиналы по запятым, затем по двоеточию
  const nominals = nominalStr.split(",");
  
  const denominations = {};
  nominals.forEach(pair => {
    const [denom, count] = pair.split(":").map(Number);
    denominations[denom] = count;
  });

  // Сортируем номиналы по убыванию для жадного алгоритма
  const sortedDenominations = Object.keys(denominations)
    .map(Number)
    .sort((a, b) => b - a); 

  const result = {};
  let remainingSum = sum;

  for (let denom of sortedDenominations) {
    // Максимальное количество текущих номиналов, которые можно использовать
    const num = Math.min(Math.floor(remainingSum / denom), denominations[denom]);
    if (num > 0) {
      result[denom] = num;
      remainingSum -= denom * num;
    }
  }

  // Если осталось, что собрать, возвращаем ошибку
  if (remainingSum > 0) {
    return "Error: Not enough money";
  }

  // Формируем строку результата в порядке возрастания номиналов
  return Object.keys(result)
    .map(Number)
    .sort((a, b) => a - b)
    .map(denom => `${denom}:${result[denom]}`)
    .join(",");
}

readline.on("line", (line) => {
  const result = atm(line);
  console.log(result);
  readline.close();
});