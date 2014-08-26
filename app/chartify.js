var chartify = angular.module('chartify.pattern', [])

  .factory('chartifyPattern', function(){
    var chartSymbols = [];
    var symbols = {
      k: ' ',
      p: '\u1427'
    };

    var resetChart = function(){
      while(chartSymbols.length){
        chartSymbols.pop();
      }
    }

    var chartifyPattern = function(pattern){
      var rows = pattern.split('\n');
      var tempRow = [];
      var numStitch = 0;
      var row = [];
      var stitchSymbol = '';
      for(var i = 0; i < rows.length; i++){
        tempRow = rows[i].split(" ");
        row = [];
        for(var j = 0; j < tempRow.length; j++){
          stitchSymbol = findStitch(tempRow[j]);
          numStitch = findNum(tempRow[j], stitchSymbol);
          for (var k = 0; k < numStitch; k++){
            row.unshift(symbols[stitchSymbol]);
          }
        }
        chartSymbols.unshift(row);
      }
    // return chartSymbols;
    };

    var findStitch = function(string){
      return string.slice(0, 1);
    }

    var findNum = function(string, stitchSymbol){
      if(string[string.length-1] === ","){
        if (isNaN(string[string.length-2])){
          numStitch = 1;
        }else{
          endDigits = string.length - 1;
          numStitch = string.slice(stitchSymbol.length, endDigits);
        }
      } else if (isNaN(string[string.length-1])){
        numStitch = 1;
      } else {
        numStitch = string.slice(stitchSymbol.length);
      }
      return numStitch;
    };

  return {
    chartifyPattern: chartifyPattern,
    chartSymbols: chartSymbols,
    resetChart: resetChart
  }
});
