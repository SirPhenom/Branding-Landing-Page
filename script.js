
function change(){
  btn = document.getElementById('butn');
  oldBtnContent = document.getElementById('plus');
  butnText = document.getElementById('butntext');
  if (plus.innerHTML === "+") {
    plus.innerHTML = "-";
    btn.classList.add('font-weight-bold');
    btn.classList.add('text-primary')
    
    butnText.classList.remove('d-none');
  }
  else {plus.innerHTML = "+";
  btn.classList.remove('font-weight-bold');
  butnText.classList.add('d-none');
  btn.classList.remove('text-primary')
}
//   btn.replaceChild(minus,plus);

//   butnText = document.getElementById('butntext');
//   butnText.classList.remove('d-none')
};

function h0ver(){
  var img= document.getElementsByClassName('img');
  img[0].style.height = "100px"
  this.style.height = "100px"
}