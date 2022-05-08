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
	"caps lock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter",
	"Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Up","Shift",
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

//add functions
//click on any key add fill in the screen
let selectedButton;

// keybord.onclick = function (event) {
// 	let target = event.target; // где был клик?
// 	if (target.tagName != 'button') return; // не на TD? тогда не интересует
// 	mainScreen.textContent = target.textContent;
// };


keybord.onclick = function(event){
	let button = event.target.closest('button');
	// let str = mainScreen.textContent;
	let str = mainScreen.value;
	if (!button) return;
	if (!keybord.contains(button)) return;
	button.value = button.textContent;
	if (button.textContent === 'backspace' || 
	button.textContent === 'Tab' || 
	button.textContent === 'del' || 
	button.textContent === 'caps lock' || 
	button.textContent === 'Enter' ||
	button.textContent === 'Shift' ||
	button.textContent === 'Up' ||
	button.textContent === 'Ctrl' ||
	button.textContent === 'Win' ||
	button.textContent === 'Alt' ||
	button.textContent === 'Space' ||
	button.textContent === 'Left' ||
	button.textContent === 'Down' ||
	button.textContent === 'Right') {
	button.value = '';
	}
	mainScreen.append(button.value);
	str = mainScreen.value;
	console.log(str);
	
}