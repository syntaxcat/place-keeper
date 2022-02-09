'use strict';

function onInit() {}

function onSetBackgroundColor(color) {
	setBackgroundColor(color);
	console.log(color);
}

function onSetTextColor(color) {
	setTextColor(color);
}

function onSave(ev) {
	ev.preventDefault();
	document.querySelector('body').style.backgroundColor = getBackgroundColor();
	document.querySelector('body').style.color = getTextColor();
	onSaveUserData();
}

function onSaveUserData() {
	saveUserData();
}

// function onShowAge(age) {
// 	showAge(age);
// }
