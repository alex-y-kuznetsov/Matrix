'use strict';

(function () {
  var getRandomColor = function () {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
  };

  window.usedColors = [];
  // Проверяем, есть ли у ячейки с "1" соседи с "1"
  window.colorOnes = function () {
    if (matrixHome.hasChildNodes()) {
      var matrixCells = document.querySelectorAll('.matrix-cell');
      // Получаем массив ячеек, в которых есть единицы
      var matrixCellsWithOne = [];
      for (var a = 0; a < matrixCells.length; a++) {
        if (matrixCells[a].textContent.includes('1')) {
          matrixCellsWithOne.push(matrixCells[a]);
          for (var b = 0; b < matrixCellsWithOne.length; b++) {
            var cellColor = matrixCellsWithOne[b].style.backgroundColor = getRandomColor();
          }
        }
      }
      for (var d = 0; d < matrixCellsWithOne.length; d++) {
        var domainColor = matrixCellsWithOne[d].style.backgroundColor;
        // Вправо
        if (matrixCellsWithOne[d].nextSibling
          && matrixCellsWithOne[d].nextSibling.textContent.includes('1')) {
          matrixCellsWithOne[d].nextSibling.style.backgroundColor = domainColor;
        }
        // Вниз
        var currentRow = matrixCellsWithOne[d].parentNode.rowIndex;
        var nextRow = currentRow + 1;
        var currentCell = matrixCellsWithOne[d].cellIndex;
        if (matrixCellsWithOne[d].parentNode.parentNode.rows[nextRow]
          && matrixCellsWithOne[d].parentNode.parentNode.rows[nextRow].cells[currentCell]
          && matrixCellsWithOne[d].parentNode.parentNode.rows[nextRow].cells[currentCell].textContent.includes('1')) {
          matrixCellsWithOne[d].parentNode.parentNode.rows[nextRow].cells[currentCell].style.backgroundColor = domainColor;
        }
        // Влево
        if (matrixCellsWithOne[d].previousSibling
          && matrixCellsWithOne[d].previousSibling.textContent.includes('1')) {
          matrixCellsWithOne[d].previousSibling.style.backgroundColor = domainColor;
        }
        // Вверх
        var previousRow = currentRow - 1;
        if (matrixCellsWithOne[d].parentNode.parentNode.rows[previousRow]
          && matrixCellsWithOne[d].parentNode.parentNode.rows[previousRow].cells[currentCell]
          && matrixCellsWithOne[d].parentNode.parentNode.rows[previousRow].cells[currentCell].textContent.includes('1')) {
          matrixCellsWithOne[d].parentNode.parentNode.rows[previousRow].cells[currentCell].style.backgroundColor = domainColor;
        }
        usedColors.push(domainColor);
      }
    }
  };
})();
