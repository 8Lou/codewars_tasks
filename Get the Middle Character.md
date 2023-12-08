const getMiddle = s => 
s.length%2===1 
? s[Math.floor(s.length/2)] 
: s.substring(s.length/2-1, s.length/2+1);