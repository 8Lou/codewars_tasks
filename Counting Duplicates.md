function duplicateCount(text){  
    let someText = text.toLowerCase();
    let obj = {};
    let counter = 0;
    for (let i = 0; i < someText.length; i++) {
        if (!obj[someText[i]]) {
            obj[someText[i]] = 1;
        }
        else if (obj[someText[i]] < 2) {
            obj[someText[i]] += 1;
            counter++;}
    }
    return counter;
}