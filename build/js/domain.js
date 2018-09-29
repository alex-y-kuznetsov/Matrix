'use strict';

(function () {
  var getRandomColor = function () {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
  };

  // Прловеряем, получился ли домен
  window.domains = [];


  // Проверяем, есть ли у ячейки с "1" соседи с "1"
  window.colorOnes = function () {
    // usedColors = [];
    if (matrixHome.hasChildNodes()) {
      var matrixCells = document.querySelectorAll('.matrix-cell');
      // Получаем массив ячеек, в которых есть единицы
      var matrixCellsWithOne = [];
      for (var a = 0; a < matrixCells.length; a++) {
        if (matrixCells[a].textContent.includes('1')) {
          matrixCellsWithOne.push(matrixCells[a]);
          // Выбираем рандомный цвет, проверяем, нет ли в массиве использованных цветов такого цвета,
          // красим все смежные ячейки в этот цвет и пушим цвет в масси использованных цветов
          for (var c = 0; c < matrixCellsWithOne.length; c++) {
            var cellColor = matrixCellsWithOne[c].style.backgroundColor = getRandomColor();
          }
        } else {
          matrixCells[a].style.backgroundColor = '#FFFFFF';
        }
      }
      for (var d = 0; d < matrixCellsWithOne.length; d++) {
        // Вправо
        var right = false;
        if (matrixCellsWithOne[d].nextSibling
          && matrixCellsWithOne[d].nextSibling.textContent.includes('1')) {
          matrixCellsWithOne[d].nextSibling.style.backgroundColor = matrixCellsWithOne[d].style.backgroundColor;
          right = true;
        }
        // Вниз
        var down = false;
        var currentRow = matrixCellsWithOne[d].parentNode.rowIndex;
        var nextRow = currentRow + 1;
        var currentCell = matrixCellsWithOne[d].cellIndex;
        if (matrixCellsWithOne[d].parentNode.parentNode.rows[nextRow]
          && matrixCellsWithOne[d].parentNode.parentNode.rows[nextRow].cells[currentCell]
          && matrixCellsWithOne[d].parentNode.parentNode.rows[nextRow].cells[currentCell].textContent.includes('1')) {
          matrixCellsWithOne[d].parentNode.parentNode.rows[nextRow].cells[currentCell].style.backgroundColor = matrixCellsWithOne[d].style.backgroundColor;
          down = true;
        }
        // Влево
        var left = false;
        if (matrixCellsWithOne[d].previousSibling
          && matrixCellsWithOne[d].previousSibling.textContent.includes('1')) {
          matrixCellsWithOne[d].previousSibling.style.backgroundColor = matrixCellsWithOne[d].style.backgroundColor;
          left = true;
        }
        // Вверх
        var previousRow = currentRow - 1;
        var up = false;
        if (matrixCellsWithOne[d].parentNode.parentNode.rows[previousRow]
          && matrixCellsWithOne[d].parentNode.parentNode.rows[previousRow].cells[currentCell]
          && matrixCellsWithOne[d].parentNode.parentNode.rows[previousRow].cells[currentCell].textContent.includes('1')) {
          matrixCellsWithOne[d].parentNode.parentNode.rows[previousRow].cells[currentCell].style.backgroundColor = matrixCellsWithOne[d].style.backgroundColor;
          up = true
        }
        if (up || down || left || right) {
          window.domains.push(d);
        }
      }
    }
  };
})();
