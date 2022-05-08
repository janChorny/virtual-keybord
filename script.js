'use strict'
//create elements
const body = document.querySelector('body');
const wrapper = document.createElement('div');
const header = document.createElement('header');
const headerTitle = document.createElement('h1');
const headerDescription = document.createElement('p');
const main = document.createElement('div');
const mainScreen = document.createElement('textarea');
const keybord = document.createElement('div');
const keyLayout = [ 
	"`","1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-","=","backspace",
	"Tab","q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[","]","\\","del",
	"caps lock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "enter",
	"shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Up","shift",
	"Ctrl","Win","Alt","Space", "Alt", "Ctrl","Left", "Down", "Right"
];
keyLayout.forEach(key => {
	const keyElement = document.createElement("button");
	keyElement.classList.add('keyboard__key');
	keyElement.textContent = key;
	keybord.append(keyElement);
});
const keybordKeys = keybord.querySelectorAll('button');
keybordKeys[13].classList.add('keyboard__key--wide');
keybordKeys[14].classList.add('keyboard__key--half-wide');
// keybordKeys[28].classList.add('keyboard__key--wide');
keybordKeys[29].classList.add('keyboard__key--wide');
keybordKeys[41].classList.add('keyboard__key--wide');
keybordKeys[42].classList.add('keyboard__key--wide');
keybordKeys[54].classList.add('keyboard__key--wide');
keybordKeys[58].classList.add('keyboard__key--extra-wide');
console.log(keybordKeys);
//add classes

wrapper.classList.add('wrapper');
header.classList.add('header');
headerTitle.classList.add('header__title');
headerDescription.classList.add('header__description');
main.classList.add('main');
mainScreen.classList.add('main__screen');
keybord.classList.add('keybord');

//elements textcontent

headerTitle.textContent = 'RSS Keybord';
headerDescription.textContent = 'Keybord for Windows. To switch languages push Shift + Alt.';

// elements attribute

mainScreen.setAttribute('rows', 6);
//add elements to html

body.append(wrapper);
wrapper.append(header);
header.append(headerTitle);
header.append(headerDescription);
wrapper.append(main);
main.append(mainScreen);
main.append(keybord);

