'use strict';

(function () {
  var getRandomColor = function () {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
  };

  // Проверяем, есть ли у ячейки с "1" соседи с "1"
  var usedColors = [];
  window.colorOnes = function () {
    usedColors = [];
    if (matrixHome.hasChildNodes()) {
      var matrixCells = document.querySelectorAll('.matrix-cell');
      // Получаем массив ячеек, в которых есть единицы
      var matrixCellsWithOne = [];
      for (var a = 0; a < matrixCells.length; a++) {
        if (matrixCells[a].textContent.includes('1')) {
          matrixCellsWithOne.push(matrixCells[a]);
          // Выбираем рандомный цвет, проверяем, нет ли в массиве использованных цветов такого цвета,
          // красим все смежные ячейки в этот цвет и пушим цвет в масси использованных цветов
          // for (var c = 0; c < matrixCellsWithOne.length; c++) {
          //   var cellColor = matrixCellsWithOne[c].style.backgroundColor = getRandomColor();
          //   usedColors.push(cellColor);
          //   if (matrixCellsWithOne[c].parentNode.cells[c + 1]) {
          //     var cellRight = matrixCellsWithOne[c].parentNode.cells[c + 1];
          //     if (cellRight.textContent.includes('1')) {
          //       cellRight.style.backgroundColor = matrixCellsWithOne[c].parentNode.cells[c].style.backgroundColor;
          //     }
          //   }
          //   if (matrixCellsWithOne[c].parentNode.parentNode.rows[c + 1]) {
          //     var cellDown = matrixCellsWithOne[c].parentNode.parentNode.rows[c + 1].cells[c];
          //     if (cellDown.textContent.includes('1')) {
          //       cellDown.style.backgroundColor = matrixCellsWithOne[c].parentNode.cells[c].style.backgroundColor;
          //     }
          //   }
          //   if (matrixCellsWithOne[c].parentNode.cells[c - 1]) {
          //     var cellLeft = matrixCellsWithOne[c].parentNode.cells[c - 1];
          //     if (cellLeft.textContent.includes('1')) {
          //       cellLeft.style.backgroundColor = matrixCellsWithOne[c].parentNode.cells[c].style.backgroundColor;
          //     }
          //   }
          //   if (matrixCellsWithOne[c].parentNode.parentNode.rows[c - 1]) {
          //     var cellUp = matrixCellsWithOne[c].parentNode.parentNode.rows[c - 1].cells[c];
          //     if (cellUp.textContent.includes('1')) {
          //       cellUp.style.backgroundColor = matrixCellsWithOne[c].parentNode.cells[c].style.backgroundColor;
          //     }
          //   }
          // }
        } else {
          matrixCells[a].style.backgroundColor = '#FFFFFF';
        }
      }
      for (var c = 0; c < matrixCellsWithOne.length; c++) {
        var cellColor = matrixCellsWithOne[c].style.backgroundColor = getRandomColor();
        usedColors.push(cellColor);
        if (matrixCellsWithOne[c].parentNode.cells[c + 1]) {
          var cellRight = matrixCellsWithOne[c].parentNode.cells[c + 1];
          if (cellRight.textContent.includes('1')) {
            cellRight.style.backgroundColor = matrixCellsWithOne[c].parentNode.cells[c].style.backgroundColor;
          }
        }
        if (matrixCellsWithOne[c].parentNode.parentNode.rows[c + 1]) {
          var cellDown = matrixCellsWithOne[c].parentNode.parentNode.rows[c + 1].cells[c];
          if (cellDown.textContent.includes('1')) {
            cellDown.style.backgroundColor = matrixCellsWithOne[c].parentNode.cells[c].style.backgroundColor;
          }
        }
        if (matrixCellsWithOne[c].parentNode.cells[c - 1]) {
          var cellLeft = matrixCellsWithOne[c].parentNode.cells[c - 1];
          if (cellLeft.textContent.includes('1')) {
            cellLeft.style.backgroundColor = matrixCellsWithOne[c].parentNode.cells[c].style.backgroundColor;
          }
        }
        if (matrixCellsWithOne[c].parentNode.parentNode.rows[c - 1]) {
          var cellUp = matrixCellsWithOne[c].parentNode.parentNode.rows[c - 1].cells[c];
          if (cellUp.textContent.includes('1')) {
            cellUp.style.backgroundColor = matrixCellsWithOne[c].parentNode.cells[c].style.backgroundColor;
          }
        }
      }
    }
  };
})();
