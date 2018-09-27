'use strict';

(function () {
  var getRandomColor = function () {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
  };

  var usedColors = [];
  window.colorOnes = function () {
    if (matrixHome.hasChildNodes()) {
      var matrixRows = matrixHome.rows.length;
      for (var i = 0; i < matrixRows; i++) {
        var matrixCells = matrixHome.rows[i].cells.length;
        for (var j = 0; j < matrixCells; j++) {
          if (matrixHome.rows[i].cells[j].innerHTML === '1') {
            var cellColor = matrixHome.rows[i].cells[j].style.backgroundColor = getRandomColor();
            usedColors.push(cellColor);
            // if (matrixHome.rows[i-1].cells[j].textContent.includes('1')) {
            //   matrixHome.rows[i-1].cells[j].style.backgroundColor = cellColor;
            // }
          } else {
            var cellColor = matrixHome.rows[i].cells[j].style.backgroundColor = '#FFFFFF';
          }
        }
      }
    }
  };
})();
