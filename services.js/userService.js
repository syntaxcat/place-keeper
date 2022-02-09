'use strict';

const STORAGE_KEY = 'userDataDB';

const userPreferences = {
	bgColor: null,
	txtColor: null
};

function setBackgroundColor(color) {
	userPreferences.bgColor = color;
}

function setTextColor(color) {
	userPreferences.txtColor = color;
}

function getBackgroundColor() {
	return userPreferences.bgColor;
}

function getTextColor() {
	return userPreferences.txtColor;
}

function saveUserData() {
	saveToStorage(STORAGE_KEY, userPreferences);
}

// function showAge(age){

// }
