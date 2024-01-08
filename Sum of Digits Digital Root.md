<!-- 1 -->
function digitalRoot(n) {
  if (n < 10) 
    return n;
    return digitalRoot(n.toString().split('').reduce(function(acc, d) {
    return acc + +d; 
    }, 0));
}

<!-- 2 -->
function digitalRoot(n) {
  return (n - 1) % 9 + 1; 
}