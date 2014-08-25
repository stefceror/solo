var chartifyPattern = function(pattern){
  var symbols = pattern.split(' ');
  var chartArr = [];
  var rowLength = 0;
  if(symbols[0] === 'CO'){
    rowLength = symbols[1];
  }
  return symbols;
};