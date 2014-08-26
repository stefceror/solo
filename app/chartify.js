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
          stitchSymbol = tempRow[j].slice(0, 1);
          if(tempRow[j][tempRow[j].length-1] === ","){
            if (isNaN(tempRow[j][tempRow[j].length-1])){
            numStitch = 1;
            }else{
              numStitch = tempRow[j].slice(1, -1);
            }
          } else if (isNaN(tempRow[j][tempRow[j].length-1])){
            numStitch = 1;
            console.log('fancy')
          } else {
            numStitch = tempRow[j].slice(1);
          }
          for (var k = 0; k < numStitch; k++){
            row.unshift(symbols[stitchSymbol]);
          }
        }
        chartSymbols.unshift(row);
      }
    // return chartSymbols;
  }

  return {
    chartifyPattern: chartifyPattern,
    chartSymbols: chartSymbols,
    resetChart: resetChart
  }
});
