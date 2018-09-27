'use strict';

(function () {
  var matrixHome = document.querySelector('.matrix-output__table');
  var matrixForm = document.querySelector('.matrix-param__form');
  var matrixM = document.querySelector('.matrix-param__m');
  var matrixN = document.querySelector('.matrix-param__n');
  var matrixRange = document.querySelector('.matrix-param__range');
  var createButton = document.querySelector('.matrix-param__create');
  var createRandomButton = document.querySelector('.matrix-param__create--random');

  var getRandom = function (min, max) {
    return Math.floor(Math.random()*(max-min))+min;
  };

  var createMatrix = function (min, max, nValue, mValue) {
    if (matrixN.validity.valid && matrixM.validity.valid) {
      var matrix = document.createDocumentFragment();
      var array = [];
      for (var i = 0; i < mValue; i++) {
        var row = document.createElement('tr');
        array[i] = [];
        for (var j = 0; j < nValue; j++) {
          var cell = document.createElement('td');
          cell.innerHTML = array[i][j] = getRandom(min, max);
          cell.className = 'matrix-cell';
          row.appendChild(cell);
        }
        matrix.appendChild(row);
      }
      matrixHome.appendChild(matrix);
      var matrixCell = document.querySelectorAll('.matrix-cell');
      for (var k = 0; k < matrixCell.length; k++) {
        matrixCell[k].addEventListener('click', matrixCellToggleHandler);
      };
    }
  };

  var clearMatrix = function () {
    matrixHome.innerHTML = '';
  };

  // var removeMessage = function (message) {
  //   message.parentNode.removeChild(message)
  // };

  // var validateFields = function () {
  //   if (!matrixN.value) {
  //     matrixN.style.outline = '2px solid red';
  //     matrixN.setCustomValidity('Введите оба значения');
  //   } else if (!matrixM.value) {
  //     matrixM.style.outline = '2px solid red';
  //     matrixM.setCustomValidity('Введите оба значения');
  //   } else {
  //     matrixN.style.outline = 'none';
  //     matrixM.style.outline = 'none';
  //     matrixN.setCustomValidity('');
  //     matrixM.setCustomValidity('');
  //   }
  // };

  var createMatrixHandler = function (evt) {
    evt.preventDefault();
    clearMatrix();
    // validateFields();
    createMatrix(0, 0, matrixN.value, matrixM.value);
  };

  var createRandomMatrixHandler = function (evt) {
    var chanceOfOne = matrixRange.value / 100 + 1;
    evt.preventDefault();
    clearMatrix();
    createMatrix(0, chanceOfOne, getRandom(1, 40), getRandom(1, 40));
  };

  var matrixCellToggleHandler = function (evt) {
    if (evt.target.innerHTML === '0') {
      evt.target.innerHTML = 1;
    } else {
      evt.target.innerHTML = 0;
    }
  };

  // matrixN.addEventListener('change', validateFields);
  // matrixM.addEventListener('change', validateFields);
  createButton.addEventListener('click', createMatrixHandler);
  createRandomButton.addEventListener('click', createRandomMatrixHandler);
})();
