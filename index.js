function berekenScore() {
  let getallen = [
    parseInt(document.getElementById('vijf').value),
    parseInt(document.getElementById('tien').value),
    parseInt(document.getElementById('azen').value),
    parseInt(document.getElementById('jokers').value),
    parseInt(document.getElementById('schoppenVrouw').value)
  ]

  let vijf =  getallen[0]* 5;
  let tien =  getallen[1]* 10;
  let azen = getallen[2] * 15;
  let jokers = getallen[3] * 25;
  let schoppenVrouw =  getallen[4]* 100;

  let berekend = vijf + tien + azen + jokers + schoppenVrouw;
  document.getElementById('berekend').innerHTML = berekend;
  updateTotaal(berekend);
}

function setTotaal() {
  document.getElementById('totaal').innerHTML = document.getElementById('input').value;
}

function updateTotaal(berekend) {
  document.getElementById('totaal').innerHTML = Number(document.getElementById('totaal').innerHTML) + berekend;
}
