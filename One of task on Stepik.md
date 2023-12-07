<!-- Решить с помощью рекурсии: дано число n, верните строку от 1 до n с пробелами. -->

let x = '';
function nn(n) {
    if (n < 1) return;
    nn(n-1); 
    x+=n + ' '; 
    return x;
    } 
    <!-- nn(9); -->
<!-- '1 2 3 4 5 6 7 8 9 ' -->

<!-- 2 -->
function my_function(n) {
    if (n <= 1) return 1;
    return my_function(n-1) + ' ' + n;
} 
<!-- my_function(5);
'1 2 3 4 5' -->

<!-- 3 -->
function my_function(n) { return n ==1 ? n.toString() : my_function(n - 1) + ' ' + n;
} 
<!-- my_function(5);
'1 2 3 4 5' -->