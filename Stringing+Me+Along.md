<!-- 1 -->
let createMessage = (string) => mess => mess ? 
    createMessage(string + ' ' + mess) : string;

<!-- 2 -->
function createMessage(s) { var parts = [] var f = (s) => s ? (parts.push(s), f) : parts.join(" ") return f(s) }