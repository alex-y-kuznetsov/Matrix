'use strict';

(function () {
  var matrixHome = document.querySelector('.matrix-output__table');
  var matrixM = document.querySelector('.matrix-param__m');
  var matrixN = document.querySelector('.matrix-param__n');
  var matrix = document.createDocumentFragment();
  var createButton = document.querySelector('.matrix-param__create');

  var getRandom = function (min, max) {
    return Math.floor(Math.random()*(max-min))+min;
  };

  var createMatrix = function () {
    var array = [];
    for (var i = 0; i < matrixM.value; i++) {
      var row = document.createElement('tr');
      array[i] = [];
      for (var j = 0; j < matrixN.value; j++) {
        var cell = document.createElement('td');
        cell.innerHTML = array[i][j] = getRandom(0, 0);
        row.appendChild(cell);
      }
      matrix.appendChild(row);
    }
    matrixHome.appendChild(matrix);
  };

  var clearMatrix = function () {
    matrixHome.innerHTML = '';
  };

  var createMatrixHandler = function (evt) {
    evt.preventDefault();
    clearMatrix();
    createMatrix();
  };

  createButton.addEventListener('click', createMatrixHandler);

})();
