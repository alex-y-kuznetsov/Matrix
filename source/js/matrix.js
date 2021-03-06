'use strict';

(function () {
  window.matrixHome = document.querySelector('.matrix-output__table');
  var matrixForm = document.querySelector('.matrix-param__form');
  var matrixM = document.querySelector('.matrix-param__m');
  var matrixN = document.querySelector('.matrix-param__n');
  window.matrixRange = document.querySelector('.matrix-param__range');
  var createButton = document.querySelector('.matrix-param__create');
  var createRandomButton = document.querySelector('.matrix-param__create--random');
  var buttonHolder = document.querySelector('.matrix-output__button-holder');

  var getRandom = function (min, max) {
    return Math.floor(Math.random()*(max-min))+min;
  };

  var createCalculateButton = function () {
    var calculateButton = document.createElement('button');
    calculateButton.style = 'display: block; margin: 0 auto; cursor: pointer; margin-top: 50px; margin-bottom: 50px;'
    calculateButton.innerHTML = 'Посчитать домены';
    buttonHolder.innerHTML = '';
    buttonHolder.appendChild(calculateButton);
    calculateButton.addEventListener('click', calculateButtonHandler);

    window.numberOfDomains = document.createElement('span');
    numberOfDomains.innerHTML = '';
    numberOfDomains.style = 'display: block; text-align: center; margin-bottom: 50px;';
    buttonHolder.appendChild(numberOfDomains);
    numberOfDomains.innerHTML = 'Количество доменов: ';
  };

  var createMatrix = function (min, max, nValue, mValue) {
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
    createCalculateButton();
    var matrixCell = document.querySelectorAll('.matrix-cell');
    for (var k = 0; k < matrixCell.length; k++) {
      matrixCell[k].addEventListener('click', matrixCellToggleHandler);
    };
  };

  var clearMatrix = function () {
    matrixHome.innerHTML = '';
  };

  var resetCustomValidity = function () {
    matrixN.setCustomValidity('');
    matrixM.setCustomValidity('');
  };

  var checkCustomValidityHandler = function () {
    if (!matrixN.value) {
      matrixN.setCustomValidity('Введите значение для N');
    } else if (!matrixM.value) {
      matrixM.setCustomValidity('Введите значение для M');
    } else {
      resetCustomValidity();
    }
  };

  var createMatrixHandler = function (evt) {
    if (matrixN.validity.valid && matrixM.validity.valid) {
      evt.preventDefault();
      clearMatrix();
      createMatrix(0, 0, matrixN.value, matrixM.value);
    }
  };

  var createRandomMatrixHandler = function (evt) {
    var chanceOfOne = matrixRange.value / 100 + 1;
    evt.preventDefault();
    clearMatrix();
    createMatrix(0, chanceOfOne, getRandom(1, 40), getRandom(1, 40));
    window.colorOnes();
    window.createStats();
    numberOfDomains.innerHTML = 'Количество доменов: ' + arrFilterUnique(window.usedColors).length;
    window.usedColors = [];
  };

  var matrixCellToggleHandler = function (evt) {
    if (evt.target.innerHTML === '0') {
      evt.target.innerHTML = 1;
    } else {
      evt.target.innerHTML = 0;
      evt.target.style.backgroundColor = '#FFFFFF';
    }
  };

  window.arrFilterUnique = function (arr) {
    var obj = {};
    for (var l = 0; l < arr.length; l++) {
      var str = arr[l];
      obj[str] = true;
    }
    return Object.keys(obj);
  };

  var calculateButtonHandler = function () {
    window.colorOnes();
    window.createStats();
    numberOfDomains.innerHTML = 'Количество доменов: ' + arrFilterUnique(window.usedColors).length;
    window.usedColors = [];
  };

  createButton.addEventListener('click', createMatrixHandler);
  createRandomButton.addEventListener('click', createRandomMatrixHandler);
  matrixN.addEventListener('change', checkCustomValidityHandler);
  matrixM.addEventListener('change', checkCustomValidityHandler);
})();
