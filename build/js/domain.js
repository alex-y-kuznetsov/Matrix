'use strict';

(function () {

  window.colorOnes = function () {
    if (matrixHome.hasChildNodes()) {
      var matrixRows = matrixHome.rows.length;
      for (var i = 0; i < matrixRows; i++) {
        var matrixCells = matrixHome.rows[i].cells.length;
        for (var j = 0; j < matrixCells; j++) {
          if (matrixHome.rows[i].cells[j].innerHTML === '1') {
            matrixHome.rows[i].cells[j].style.backgroundColor = 'red';
          }
        }
      }
    }
  }
})();
