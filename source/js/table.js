'use strict';

(function () {
  var statsTable = document.querySelector('.matrix-stats__table');

  window.createStats = function () {
    var stats = document.createDocumentFragment();
    var array = [];
    for (var i = 0; i < 9; i++) {
      var row = document.createElement('tr');
      array[i] = [];
      for (var j = 0; j < 3; j++) {
        var cell = document.createElement('td');
        cell.innerHTML = array[i][j] = '';
        cell.className = 'matrix-stats__cell';
        row.appendChild(cell);
      }
      stats.appendChild(row);
    }
    statsTable.appendChild(stats);
  };
})();
