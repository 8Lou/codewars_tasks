<!-- 1 -->
function array(arr){ return arr.split(",").slice(1,-1).join(" ") || null; }

<!-- 2 -->
const array = arr => arr.split(",").slice(1,-1).join(" ") || null;
