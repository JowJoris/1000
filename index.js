function berekenScore(){
let vijf = parseInt(document.getElementById('vijf').value)*5;
let tien = parseInt(document.getElementById('tien').value)*10;
let vijftien = parseInt(document.getElementById('vijftien').value)*15;
let honderd = parseInt(document.getElementById('honderd').value)*100;
let berekend = vijf + tien + vijftien + honderd;
document.getElementById('berekend').innerHTML = berekend;
updateTotaal(berekend);
}

function setTotaal(){
  document.getElementById('totaal').innerHTML = document.getElementById('totaal').value
}

function updateTotaal(berekend){
  let totaal = parseInt(document.getElementById('totaal').value);
  document.getElementById('totaal').innerHTML = totaal + berekend;
}
