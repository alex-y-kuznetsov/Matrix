'use strict';

(function () {
  var getRandomColor = function () {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
  };

  // Проверяем, есть ли у ячейки с "1" соседи с "1"
  var neighbours = [];
  var checkNeighbours = function () {
    if (matrixHome.hasChildNodes()) {
      var matrixCells = document.querySelectorAll('.matrix-cell');
      var matrixCellsWithOne = [];
      for (var a = 0; a < matrixCells.length; a++) {
        if (matrixCells[a].textContent.includes('1')) {
          matrixCellsWithOne.push(matrixCells[a]);
        }
        // var matrixCellWithOne = matrixCells[a].textContent.includes('1');
        // matrixCellsWithOne.push(matrixCellWithOne);
      }
      console.log(matrixCellsWithOne);
    }
  };

  // Выбираем рандомный цвет, проверяем, нет ли в массиве использованных цветов такого цвета,
  // красим все смежные ячейки в этот цвет и пушим цвет в масси использованных цветов
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
            if (checkNeighbours(i+1, j+1)) {
              matrixHome.rows[i+1].cells[j+1].style.backgroundColor = cellColor;
            }
          } else {
            var cellColor = matrixHome.rows[i].cells[j].style.backgroundColor = '#FFFFFF';
          }
        }
      }
    }
  };
})();
