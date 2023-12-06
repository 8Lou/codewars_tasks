<!-- 1 -->
function opposite(number) {
  if(Number.isInteger(number) || typeof number ==='number') {
    let oppo =-number;
    return oppo;
    } else {
      return 'remark';
    }
}

<!-- 2 -->
const opposite = n => -n;

<!-- 3 -->
function opposite(number) {
    return number * (-1);
}

<!-- 4 -->
function opposite(number) {
  return(-number);
}
