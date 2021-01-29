/*
===============================================
; Title: MW's Portfolio Theme Changer
; Author: Mark Watson
; Date: 28 January 2021
; Modified By: Mark Watson
; Description: This program adds a click event which will change the color theme of Mark's portfolio page.
===============================================
*/

// start program


// variables - SELECTORS
const welcome = document.getElementById('welcome');
const cli = document.getElementById('cli');
const badges = document.querySelectorAll('.badge-dark');
const projects = document.getElementById('projects');
const creator = document.getElementById('creator');
const theme = document.getElementById('theme-name');
const button = document.getElementById('toggle-colors');

// array of colors with name and creditor
const bgColors = [
  {
    hex: '#090B10',
    altHex: '#0F111A',
    name: 'Ocean High Contrast',
    inspiredBy: 'Material Theme'
  },
  {
    hex: '#1B1E2B',
    altHex: '#292D3E',
    name: 'Palenight High Contrast',
    inspiredBy: 'Material Theme'
  },
  {
    hex: '#192227',
    altHex: '#263238',
    name: 'Default High Contrast',
    inspiredBy: 'Material Theme'
  },
  {
    hex: '#00264D',
    altHex: '#004080',
    name: 'Tomorrow Night Blue',
    inspiredBy: 'VS Code'
  },
  {
    hex: '#660000',
    altHex: '#990000',
    name: 'Red',
    inspiredBy: 'VS Code'
  }
]

// theme picker variable
let index = 1;

/**
* Params: n/a
* Response: change styles and texts to corresponding object property based on index
* Description: changes the color theme of the page
*/
function changeBg() {
  // resets index once all colors have been cycled through
  if (index > 4) {
    index = 0;
  }
  // change backgroundColor of these elements
  welcome.style.backgroundColor = bgColors[index].hex;
  cli.style.backgroundColor = bgColors[index].altHex;
  projects.style.backgroundColor = bgColors[index].hex;
  // selects and changes all badges background-colors
  for (b = 0; b < badges.length; b++) {
    badges[b].style.backgroundColor = bgColors[index].altHex;
  }
  // changes text on page to give credit for the current theme
  creator.innerText = bgColors[index].inspiredBy;
  theme.innerText = bgColors[index].name
  // adds one to index
  index = (index + 1) % bgColors.length;
}

// EVENT
button.addEventListener('click', changeBg);


// end program
