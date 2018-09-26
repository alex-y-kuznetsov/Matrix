'use strict';

(function () {
  var matrixHome = document.querySelector('.matrix-output__table');
  var matrixM = document.querySelector('.matrix-param__m');
  var matrixN = document.querySelector('.matrix-param__n');
  var matrix = document.createDocumentFragment();
  var createButton = document.querySelector('.matrix-param__create');
  var createRandomButton = document.querySelector('.matrix-param__create--random');

  var getRandom = function (min, max) {
    return Math.floor(Math.random()*(max-min))+min;
  };

  var createMatrix = function (min, max, nValue, mValue) {
    var array = [];
    for (var i = 0; i < mValue; i++) {
      var row = document.createElement('tr');
      array[i] = [];
      for (var j = 0; j < nValue; j++) {
        var cell = document.createElement('td');
        cell.innerHTML = array[i][j] = getRandom(min, max);
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
    createMatrix(0, 0, matrixN.value, matrixM.value);
  };

  var createRandomMatrixHandler = function (evt) {
    evt.preventDefault();
    clearMatrix();
    createMatrix(0, 2, getRandom(1, 40), getRandom(1, 40));
  };

  createButton.addEventListener('click', createMatrixHandler);
  createRandomButton.addEventListener('click', createRandomMatrixHandler);

})();
