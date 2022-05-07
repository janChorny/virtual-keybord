'use strict'
//create elements
const body = document.querySelector('body');
const wrapper = document.createElement('div');
const header = document.createElement('header');
const headerTitle = document.createElement('h1');
const headerDescription = document.createElement('p');
const main = document.createElement('div');
const mainScreen = document.createElement('textarea');
const mainKeybord = document.createElement('div');
const keyLayout = [
	"1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
	"q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
	"caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
	"done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
	"space"
];
keyLayout.forEach(key => {
	const keyElement = document.createElement("button");
	keyElement.classList.add('keybord__key');
	keyElement.textContent = key;
	mainKeybord.append(keyElement);
});

//add classes

wrapper.classList.add('wrapper');
header.classList.add('header');
headerTitle.classList.add('header__title');
headerDescription.classList.add('header__description');
main.classList.add('main');
mainScreen.classList.add('main__screen');
mainKeybord.classList.add('main__keybord');

//elements textcontent

headerTitle.textContent = 'RSS Keybord';
headerDescription.textContent = 'Keybord for Windows. To switch languages push Shift + Alt.';

// elements attribute

mainScreen.setAttribute('rows', 4);
//add elements to html

body.append(wrapper);
wrapper.append(header);
header.append(headerTitle);
header.append(headerDescription);
wrapper.append(main);
main.append(mainScreen);
main.append(mainKeybord);