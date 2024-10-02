// отловмт атм 

// function countLetters(str) {
//     let charQuantity = {};

//     for (let character of str) {
//         if (charQuantity[character] === undefined) {
//             charQuantity[character] = 1
//         } else {
//             charQuantity[character] += 1;
//         }
//     }
//     const charQuantityAsArr = Object.entries(charQuantity)
//     const charQuantityAsArrSorted = charQuantityAsArr.sort().map((item) => {
//         return item.join(':');
//     });
//     const charQuantitySortedString = charQuantityAsArrSorted.join()
//     return charQuantitySortedString;
// }

// countLetters('abcbb')



// const readline = require("readline").createInterface({
//     input: process.stdin,
// });


// function countLetters(str) {
//     let charQuantity = {};

//     for (let character of str) {
//         if (charQuantity[character] === undefined) {
//             charQuantity[character] = 1
//         } else {
//             charQuantity[character] += 1;
//         }
//     }
//     const charQuantityAsArr = Object.entries(charQuantity)
//     const charQuantityAsArrSorted = charQuantityAsArr.sort().map((item) => {
//         return item.join(':');
//     });
//     const charQuantitySortedString = charQuantityAsArrSorted.join()
//     return charQuantitySortedString;
// }

// readline.on("line", (line) => {
//     const result = countLetters(line);
//     console.log(result);
//     readline.close();
// });


// Решение А (не прошло  почему-то проверку по времени)
const readline = require("readline").createInterface({
  input: process.stdin,
});

function countLetters(str) {
  function getCharCountString(str) {
    const charsRepeatCount = {};
    let joinedString = '';
    
    for (const char of str) {
      let charCode = char.codePointAt();
      if (charsRepeatCount[charCode]) {
        charsRepeatCount[charCode]++;
      } else {
        charsRepeatCount[charCode] = 1;
      }
    }
    
  
    for (const codeChar in charsRepeatCount) {
      if (joinedString) joinedString += `,`;
      joinedString += `${String.fromCharCode(codeChar)}:${charsRepeatCount[codeChar]}`;
    }
  
    return joinedString;
  
  }
}

readline.on("line", (line) => {
  const result = countLetters(line);
  console.log(result);
  readline.close();
});