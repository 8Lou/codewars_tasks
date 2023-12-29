function cache(func) { 
  let result = {}; 
  return function() { 
    let args = JSON.stringify(arguments); 
    if (!result.hasOwnProperty(args)) 
      result[args] = func.apply(null, arguments); 
    return result[args]; }; 
}