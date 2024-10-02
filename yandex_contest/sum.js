const fs = require('fs');

// Слушаем событие data
process.stdin.on('data', (data) => {
    const numbers = data.toString().trim().split(' ').map(Number);
    
    if (numbers.length < 2 || isNaN(numbers[0]) || isNaN(numbers[1])) {
        console.log('Пожалуйста, введите два числа, разделённых пробелом.');
    } else {
        const sum = numbers[0] + numbers[1];
        console.log(sum);
    }
});



