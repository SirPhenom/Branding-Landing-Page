const awesomeTab = document.getElementById('awesome-tab');
awesomeTab.onclick = function (event) {
  if (event.target.id === 'butn') {
    let butnText = event.target.nextElementSibling
    // console.log()
    plus = event.target.children[0];
    if (plus.innerHTML === "+") {
      plus.innerHTML = '-';
      butnText.classList.remove('d-none');
    }
    else {
      plus.innerHTML = '+';
      butnText.classList.add('d-none');
    }
  }
}


const imgHover = document.getElementsByClassName('img');
const imgText = document.querySelectorAll('carousel-item');


for (let i = 0; i < imgHover.length; i++) {
  imgHover[i].addEventListener('mouseover', () => {
    if (imgHover[i].style.height !== '100px') {
      imgHover[i].style.height = '100px';
      imgText[i].classList.add('active');
      imgHover[i].addEventListener('mouseout', () => {
        imgHover[i].style.height = '80px';
        // imgText[i].classList.remove('active');
      })
    }
    else {
      imgHover[i].addEventListener('mouseout', () => {
      imgHover[i].style.height = '80px';
      })
    }
  })
}