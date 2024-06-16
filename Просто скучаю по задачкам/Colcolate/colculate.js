// Создание элементов
const input1 = document.createElement('input');
const input2 = document.createElement('input');
const addButton = document.createElement('button');
const resultDiv = document.createElement('div');

// Настройка атрибутов элементов
input1.type = 'number';
input2.type = 'number';
addButton.textContent = 'Add';

// Функция сложения
const sum2 = (a, b) => a + b;

// Обработчик клика по кнопке
addButton.onclick = function () {
  const result = sum2(Number(input1.value), Number(input2.value));
  resultDiv.textContent = `Result: ${result}`;
};

// Добавление элементов на страницу
document.body.appendChild(input1);
document.body.appendChild(input2);
document.body.appendChild(addButton);
document.body.appendChild(resultDiv);
