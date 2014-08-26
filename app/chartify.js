var chartify = angular.module('chartify.pattern', [])

  .factory('chartifyPattern', function(){
    var chartSymbols = [];
    var chartifyPattern = function(pattern){
      var symbols = {
        k: ' ',
        p: '\xB7'
      };
      var rows = pattern.split('\n');
      // var chartSymbols = [];
      var tempRow = [];
      var numStitch = 0;
      var row = [];
      var stitchSymbol = '';
      for(var i = 0; i < rows.length; i++){
        tempRow = rows[i].split(" ");
        row = [];
        for(var j = 0; j < tempRow.length; j++){
          stitchSymbol = tempRow[j].slice(0, 1);
          if(tempRow[j][tempRow[j].length-1] === ","){
            numStitch = tempRow[j].slice(1, -1);
          } else {
            numStitch = tempRow[j].slice(1);
          }
          for (var k = 0; k < numStitch; k++){
            row.push(symbols[stitchSymbol]);
          }
        }
        chartSymbols.push(row);
      }
    // return chartSymbols;
  }
  return {
    chartifyPattern: chartifyPattern,
    chartSymbols: chartSymbols
  }
});
