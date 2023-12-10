<!-- 1 -->
function createFunctions(n) {
  var callbacks = [];
var factory = function(x){ return function(){ return x; }; };
for (var i=0; i<n; i++) { callbacks.push(factory(i)); }
return callbacks; }

<!-- 2 -->
function createFunctions(n) { 
  return Array(n).fill(1).map((a,b)=> (()=> b));
}

let createFunctions = (n) => Array.from(Array(n), (_, i) => () => i);