<!-- 1 -->
function add(n){
  let foo = function (x){
    return add(n + x)};
      foo.valueOf = function() {
        return n;
    };
    return foo;
}
<!-- - -->

<!-- 2 -->
var add = function(n) { const f = x => add(n + x) f.valueOf = () => n return f; }
<!-- + -->