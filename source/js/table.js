'use strict';

(function () {
  var statsTable = document.querySelector('.matrix-stats__table');

  window.createStats = function () {
    var stats = document.createDocumentFragment();
    var row = document.createElement('tr');
    var cellChance = document.createElement('td');
    cellChance.innerHTML = window.matrixRange.value + ' %';
    cellChance.className = 'matrix-stats__chance';
    row.appendChild(cellChance);
    var cellDomains = document.createElement('td');
    cellDomains.innerHTML = window.arrFilterUnique(window.usedColors).length;
    cellDomains.className = 'matrix-stats__domains';
    row.appendChild(cellDomains);
    var cellMatrixSize = document.createElement('td');
    cellMatrixSize.innerHTML = window.matrixHome.rows[0].cells.length + ' * ' + window.matrixHome.rows.length;
    cellMatrixSize.className = 'matrix-stats__size';
    row.appendChild(cellMatrixSize);

    stats.appendChild(row);
    if (statsTable.rows.length > 10) {
      statsTable.querySelector('tr:nth-child(2)').remove();
    }
    statsTable.appendChild(stats);
    statsTable.classList.remove('matrix-stats__table--invisible');
  };
})();
