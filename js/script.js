/*
===============================================
; Title: Mark Watson's Portfolio Script
; Author: Mark Watson
; Date: 25 January 2021
; Last Modified: 3 August 2023
; Description: This program creates a scripted CLI-like typing effect on Mark's Portfolio page.
===============================================
*/

// variables - text to be "typed" onto the page
const intro = `Hi, my name is Mark Watson`;
const title = `I'm a software engineer`;
const openThis = 'open section/about.html';
const load = '...'
const swapThemeText = 'Click here to swap themes!'

// variables - letter retrievers for above variables
let i = 0;
let t = 0;
let o = 0;
let l = 0;
let c = 0;

// variable - default speed that letters are "typed"
const speed = 80;
// variable - selector for all elements with type-block class
const typeBlock = document.querySelectorAll('.type-block');

// FUNCTION DECLARATIONS

/**
* Params: n/a
* Response: adds characters from intro variable to HTML at rate of speed
* Description: creates typing effect on page
*/
function typeIntro() {
  if (i < intro.length) {
      document.getElementById('intro').innerHTML += intro.charAt(i);
      i++;
      setTimeout(typeIntro, speed);
  }
  else {
      document.getElementById('intro').innerHTML = intro;
  }
}

/**
* Params: n/a
* Response: adds characters from title variable to HTML at rate of speed
* Description: creates typing effect on page
*/
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

/**
* Params: n/a
* Response: adds characters from openThis variable to HTML at rate of speed
* Description: creates typing effect on page
*/
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

/**
* Params: n/a
* Response: adds characters from load variable to HTML at rate of 500 ms
* Description: creates loading effect on page
*/
function loading() {
  if (l < load.length) {
      document.getElementById('load').innerHTML += load.charAt(l);
      l++;
      setTimeout(loading, 500);
  }
  else {
      document.getElementById('load').innerHTML = load;
  }
}

/**
* Params: n/a
* Response: removes .hide CSS class
* Description: makes element appear on page
*/
function typeSwapTheme() {
  if (c < swapThemeText.length) {
    document.getElementById('swap-theme-text').innerHTML += swapThemeText.charAt(c);
    c++;
    setTimeout(typeSwapTheme, speed);
  }
  else {
    document.getElementById('swap-theme-text').innerHTML = swapThemeText;
  }
}

/**
* Params: n/a
* Response: removes .hide CSS class
* Description: makes element appear on page
*/
function showType2() {
  document.getElementById('type2').classList.remove('hide');
}

/**
* Params: n/a
* Response: removes .hide CSS class
* Description: makes element appear on page
*/
function showType3() {
  document.getElementById('type3').classList.remove('hide');
}

/**
* Params: n/a
* Response: removes .hide CSS class
* Description: makes element appear on page
*/
function showLoading() {
  document.getElementById('loading').classList.remove('hide');
}

/**
* Params: n/a
* Response: adds .hide CSS class
* Description: hides "typing-block" on page
*/
function hideBlock1() {
  typeBlock[0].classList.add('hide');
}

/**
* Params: n/a
* Response: adds .hide CSS class
* Description: hides "typing-block" on page
*/
function hideBlock2() {
  typeBlock[1].classList.add('hide');
}

/**
* Params: n/a
* Response: adds .hide CSS class
* Description: hides "typing-block" on page
*/
function hideBlock3() {
  typeBlock[2].classList.add('hide');
}

/**
* Params: n/a
* Response: adds .hide CSS class
* Description: hides "typing-block" on page
*/
function showBlock3() {
  typeBlock[2].classList.remove('hide');
}

/**
* Params: n/a
* Response: adds .hide CSS class
* Description: hides "loading" element on page
*/
function hideLoading() {
  document.getElementById('loading').classList.add('hide');
}

/**
* Params: n/a
* Response: change element text to empty string
* Description: erases content from #open-this element on page
*/
function hideOpenText() {
  document.getElementById('open-this').innerHTML = '';
}

/**
* Params: n/a
* Response: scroll to section
* Description: scrolls to #about section on page
*/
function openAbout(){
  if (window.scrollY < 500) {
    window.location.hash = '#about';
  }
}

// start script


// FUNCTION CALLS & OUTPUTS
// On timer from window load
setTimeout(typeIntro, 500);
setTimeout(hideBlock1, 3000)
setTimeout(showType2, 3000);
setTimeout(typeTitle, 3500);
setTimeout(hideBlock2, 5500)
setTimeout(showType3, 5500);
setTimeout(typeOpenThis, 6000);
setTimeout(hideBlock3, 8500)
setTimeout(showLoading, 8500);
setTimeout(loading, 9000);
setTimeout(hideLoading, 10750);
setTimeout(hideOpenText, 10900);
setTimeout(openAbout, 11000);
setTimeout(showBlock3, 11500);
setTimeout(typeSwapTheme, 13000);


// end script
