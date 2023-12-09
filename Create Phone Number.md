<!-- 1 -->
function createPhoneNumber(numbers){
  numbers = numbers.join('');
  return '(' + numbers.substring(0, 3) + ') ' 
      + numbers.substring(3, 6) 
      + '-' 
      + numbers.substring(6);
}

<!-- 2 -->
function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }  
  return format;
}