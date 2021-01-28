let i = 0;
let t = 0;
let o = 0;
let l = 0;
const intro = `Hi, my name is Mark Watson`;
const title = `I'm a Web Developer`;
const openThis = 'open section/about.html';
const loading = '...'
const speed = 80;
const typeBlock = document.querySelectorAll('.type-block');

// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// }

function typeIntro() {
  if (i < intro.length) {
      document.getElementById('intro').innerHTML += intro.charAt(i);
      i++;
      setTimeout(typeIntro, speed);
  }
  else {
      document.getElementById('intro').innerHTML = intro;
  }
  setTimeout(hide, 3000);
}

function typeTitle() {
    if (t < title.length) {
        document.getElementById('title').innerHTML += title.charAt(t);
        t++;
        setTimeout(typeTitle, speed);
    }
    else {
        document.getElementById('title').innerHTML = title;
    }
}

function typeOpenThis() {
  if (o < openThis.length) {
      document.getElementById('open-this').innerHTML += openThis.charAt(o);
      o++;
      setTimeout(typeOpenThis, speed);
  }
  else {
      document.getElementById('open-this').innerHTML = openThis;
  }
}

function typeLoading() {
  if (l < loading.length) {
      document.getElementById('loading').innerHTML += loading.charAt(l);
      l++;
      setTimeout(typeLoading, 500);
  }
  else {
      document.getElementById('loading').innerHTML = loading;
  }
}

function showType2() {
  document.getElementById('type2').classList.remove("hide");
}

function showType3() {
  document.getElementById('type3').classList.remove("hide");
}

function showType4() {
  document.getElementById('type4').classList.remove("hide");
}

function hideBlock1() {
  typeBlock[0].classList.add("hide");
}

function hideBlock2() {
  typeBlock[1].classList.add("hide");
}

function hideBlock3() {
  typeBlock[2].classList.add("hide");
}

function hideType4() {
  document.getElementById('type4').classList.add("hide");
}

setTimeout(typeIntro, 500);
setTimeout(hideBlock1, 3000)
setTimeout(showType2, 3000);
setTimeout(typeTitle, 3500);
setTimeout(hideBlock2, 5500)
setTimeout(showType3, 5500);
setTimeout(typeOpenThis, 6000);
setTimeout(hideBlock3, 8500)
setTimeout(showType4, 8500);
setTimeout(typeLoading, 9000);
setTimeout(hideType4, 10750);
setTimeout(function(){
  window.location.hash = '#about';
}, 11000);

