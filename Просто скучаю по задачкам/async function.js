// Промисы с использованием async/await и Promise.all:
  // Иногда нужно выполнить несколько асинх функций параллельно и дождаться и дождаться их выполнения. Promise.all для их группового выполнения.

  async function performMultipleRequests() {
    const results = await Promise.all([
      fetch('https://api.example.com/data1'),
      fetch('https://api.example.com/data2'),
      fetch('https://api.example.com/data3'),
    ]);
    // results содержит массив результатов всех промисов.
  }
  
  //async/await
  async function demoAsyncAwait() {
    console.log('Перед асинхронной операцией');
    const result = await new Promise((resolve) => {
      setTimeout(() => {
        resolve('Результат асинхронной операции');
      }, 1000);
    });
    console.log(result);
    console.log('После асинхронной операции');
  }

  demoAsyncAwait();
  
  // - Использование Promise с методами then/catch:
  function demoPromise() {
    console.log('Перед асинхронной операцией');
    new Promise((resolve) => {
      setTimeout(() => {
        resolve('Результат асинхронной операции');
      }, 1000);
    }).then((result) => {
      console.log(result);
      console.log('После асинхронной операции');
    });
  }

  demoPromise();
  
