<!-- 1 -->
function basicOp(operation, value1, value2) {
  switch (operation) {
    case '+':
    return value1 + value2;
    case '-':
    return value1 - value2;
    case '*':
    return value1 * value2;
    case '/':
    if (value2 !== 0) {
    return value1 / value2;
      } else {
        return 'mistake!';}
  default: return 'remark';
    }}

<!-- 2 -->
function basicOp(o, a, b) {
  return eval(a+o+b);
}

<!-- 3 -->
function basicOp(operation, value1, value2)
{
  var cases = {
    '+': value1 + value2,
    '-': value1 - value2,
    '*': value1 * value2,
    '/': value1 / value2
  };
  return cases[operation]
}

<!-- 4 -->
const basicOperations = {
  '+': (a,b) => a + b,
  '-': (a,b) => a - b,
  '*': (a,b) => a * b,
  '/': (a,b) => a / b,
}
const basicOp = (op, x, y) => basicOperations[op](x, y)

basicOp = (operation, value1, value2) => eval( `${value1} ${operation} ${value2}` )
