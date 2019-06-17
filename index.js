function berekenScore(){
let vijf = parseInt(document.getElementById('vijf').value);
let tien = parseInt(document.getElementById('tien').value);
let vijftien = parseInt(document.getElementById('vijftien').value);
let honderd = parseInt(document.getElementById('honderd').value);
let berekend = vijf + tien + vijftien + honderd;
document.getElementById('berekend').innerHTML = berekend;
updateTotaal(berekend);
}

function setTotaal(){
  document.getElementById('totaal').innerHTML = document.getElementById('totaal').value
}

function updateTotaal(berekend){
  let totaal = parseInt(document.getElementById('berekend').value);
  document.getElementById('totaal').innerHTML = totaal + berekend;


}
