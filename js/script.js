/*
===============================================
; Title: Mark Watson's Portfolio Script
; Author: Mark Watson
; Date: 25 January 2021
; Last Modified: 3 August 2023
; Description: This program creates a scripted CLI-like typing effect on Mark's Portfolio page.
===============================================
*/

// text to be "typed" onto the page
const texts = [
  `Hi, my name is Mark Watson`,
  `I'm a full-stack developer`,
  'open section/about.html',
  '...'
]

// letter retrievers for texts
let i = 0;
let t = 0;
let o = 0;
let l = 0;

// default speed that letters are "typed"
const speed = 80;

// selector for all elements with type-block class
const typeBlock = document.querySelectorAll('.type-block');

// FUNCTION DECLARATIONS

/**
* Params: n/a
* Response: adds characters from intro variable to HTML at rate of speed
* Description: creates typing effect on page
*/
function typeIntro() {
  if (i < texts[0].length) {
    document.getElementById('intro-text').innerHTML += texts[0].charAt(i);
    i++;
    setTimeout(typeIntro, speed);
  }
  else {
    document.getElementById('intro-text').innerHTML = texts[0];
  }
}

/**
* Params: n/a
* Response: adds characters from title variable to HTML at rate of speed
* Description: creates typing effect on page
*/
function typeTitle() {
  if (t < texts[1].length) {
    document.getElementById('career-title-text').innerHTML += texts[1].charAt(t);
    t++;
    setTimeout(typeTitle, speed);
  }
  else {
    document.getElementById('career-title-text').innerHTML = texts[1];
  }
}

/**
* Params: n/a
* Response: adds characters from openThis variable to HTML at rate of speed
* Description: creates typing effect on page
*/
function typeOpenAbout() {
  if (o < texts[2].length) {
    document.getElementById('open-about-text').innerHTML += texts[2].charAt(o);
    o++;
    setTimeout(typeOpenAbout, speed);
  }
  else {
    document.getElementById('open-about-text').innerHTML = texts[2];
  }
}

/**
* Params: n/a
* Response: adds characters from load variable to HTML at rate of 500 ms
* Description: creates loading effect on page
*/
function loading() {
  if (l < texts[3].length) {
    document.getElementById('load-text').innerHTML += texts[3].charAt(l);
    l++;
    setTimeout(loading, 500);
  }
  else {
    document.getElementById('load-text').innerHTML = texts[3];
  }
}

/**
* Params: n/a
* Response: removes .hide CSS class
* Description: makes element appear on page
*/
function showLine2() {
  document.getElementById('line-2').classList.remove('hide');
}

/**
* Params: n/a
* Response: removes .hide CSS class
* Description: makes element appear on page
*/
function showLine3() {
  document.getElementById('line-3').classList.remove('hide');
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
* Description: erases content from #open-about element on page
*/
function hideOpenAbout() {
  document.getElementById('open-about').innerHTML = '';
}

/**
* Params: n/a
* Response: scroll to section
* Description: scrolls to #about section on page
*/
function openAbout() {
  if (window.scrollY < 500) {
    window.location.hash = '#about';
  }
}

// start script


// FUNCTION CALLS & OUTPUTS
// On timer from window load
setTimeout(typeIntro, 500);
setTimeout(hideBlock1, 3200)
setTimeout(showLine2, 3300);
setTimeout(typeTitle, 3800);
setTimeout(hideBlock2, 6500)
setTimeout(showLine3, 6600);
setTimeout(typeOpenAbout, 7100);
setTimeout(hideBlock3, 9600)
setTimeout(showLoading, 9900);
setTimeout(loading, 10300);
setTimeout(hideLoading, 11950);
setTimeout(hideOpenAbout, 12000);
setTimeout(showBlock3, 12100);
setTimeout(openAbout, 12400);

// end script
