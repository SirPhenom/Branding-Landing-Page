
function change(){
  var newBtn = document.createElement('h5');
  var newBtnCOntent = document.createTextNode('+');
  newBtn.appendChild(newBtnCOntent);

  btn = document.getElementById('butn');
  oldBtnContent = document.getElementById('minus');
  btn.replaceChild(newBtn,oldBtnContent);
}

function greeting() {
  console.log("1");
  setTimeout(() => console.log('2'),0);
  console.log("3");
}
greeting()