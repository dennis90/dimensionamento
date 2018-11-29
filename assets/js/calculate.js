function formSubmitHandler(event) {
  event.preventDefault();

  console.log('foi');

  var tensao = document.getElementById('tensao-id').value;
  var potencia = document.getElementById('potencia-id').value;

  var amperes = potencia / tensao;

  var row = getRowFromAmp(amperes);

  var resultContent;

  var metros = ['10', '20', '30', '40', '50', '75', '100', '125', '150', '175', '200', '225', '250'];

  if (!row) {
    resultContent = '<div class="alert alert-danger" role="alert">';
    resultContent += '<b>Amperes: </b> ' + amperes.toFixed(2) + '</br>';
    resultContent += 'Esta fiação está aparentemente sobrecarregada, confirme se a tensão está correta';
    resultContent += '</div>';
  } else {
    resultContent = '<b>Amperes: </b> ' + amperes.toFixed(2) + '</br>';
    resultContent += '<table class="table">';
    resultContent += '<thead>';
    resultContent += '<tr>';
    resultContent += '<th>Distância (m)</th>';

    metros.forEach(function (val) {
      resultContent += '<th>' + val + '</th>';
    });

    resultContent += '</tr>';
    resultContent += '</thead>';
    resultContent += '<tbody>';
    resultContent += '<tr>';
    resultContent += '<td>Bitola (mm)</td>';
    row.forEach(function (val) {
      resultContent += '<td>' + val + '</td>';
    });
    resultContent += '</tr>';
    resultContent += '</tbody>';
    resultContent += '</table>';
  }

  document.getElementById('result-id').innerHTML = resultContent;
}

function getRowFromAmp(amp) {
  if (amp <= 1) {
      return [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5];
  } else if (amp <= 2) {
      return [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 2.5, 2.5, 2.5, 2.5, 4];
  } else if (amp <= 3) {
      return [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 2.5, 2.5, 2.5, 4, 4, 4, 6];
  } else if (amp <= 4) {
      return [1.5, 1.5, 1.5, 1.5, 1.5, 2.5, 2.5, 4, 4, 4, 6, 6, 6];
  } else if (amp <= 5) {
      return [1.5, 1.5, 1.5, 1.5, 1.5, 2.5, 4, 4, 6, 6, 6, 10, 10];
  } else if (amp <= 7.5) {
      return [1.5, 1.5, 1.5, 2.5, 2.5, 4, 6, 6, 10, 10, 10, 10, 16];
  } else if (amp <= 10) {
      return [1.5, 1.5, 2.5, 2.5, 4, 6, 6, 10, 10, 10, 16, 16, 16];
  } else if (amp <= 12.5) {
      return [1.5, 1.5, 2.5, 4, 4, 6, 10, 10, 16, 16, 16, 16, 25];
  } else if (amp <= 15) {
      return [1.5, 2.5, 2.5, 4, 6, 10, 10, 16, 16, 16, 25, 25, 25];
  } else if (amp <= 17.5) {
      return [1.5, 2.5, 4, 6, 6, 10, 10, 16, 16, 25, 25, 25, 25];
  } else if (amp <= 20) {
      return [1.5, 2.5, 4, 6, 6, 10, 16, 16, 25, 25, 25, 25, 35];
  } else if (amp <= 25) {
      return [1.5, 4, 6, 6, 10, 16, 16, 25, 25, 25, 35, 35, 35];
  } else if (amp <= 30) {
      return [2.5, 4, 6, 10, 10, 16, 25, 25, 25, 35, 35, 50, 50];
  } else if (amp <= 35) {
      return [2.5, 4, 6, 10, 10, 16, 25, 25, 35, 35, 50, 50, 50];
  } else if (amp <= 40) {
      return [2.5, 6, 10, 10, 16, 25, 25, 35, 35, 50, 50, 50, 70];
  } else if (amp <= 45) {
      return [2.5, 6, 10, 10, 16, 25, 25, 35, 50, 50, 50, 70, 70];
  } else if (amp <= 50) {
      return [4, 6, 10, 16, 16, 25, 35, 35, 50, 50, 70, 70, 70];
  } else if (amp <= 60) {
      return [4, 10, 10, 16, 25, 25, 35, 50, 50, 70, 70, 95, 95];
  } else if (amp <= 70) {
      return [4, 10, 16, 16, 25, 35, 50, 50, 70, 70, 95, 95, 95];
  } else if (amp <= 80) {
      return [6, 10, 16, 25, 25, 35, 50, 70, 70, 95, 95, 120, 120];
  } else if (amp <= 100) {
      return [6, 16, 20, 25, 25, 50, 70, 70, 95, 95, 120, 150, 150];
  } else {
      return null;
  }
}
