'use strict';

const STORAGE_KEY = 'placesDB';
let gPlaces = loadFromStorage(STORAGE_KEY) || [];

function deleteLocation(placeId) {
	const idx = gPlaces.findIndex((place) => place.id === placeId);
	gPlaces.splice(idx, 1);
	saveToStorage(STORAGE_KEY, gPlaces);
}

function getLocationsAsCSV() {
	let csvStr = `Id, Name, lat, lng`;
	gPlaces.forEach((place) => {
		const csvLine = `\n${place.id}, ${place.name}, ${place.lat}, ${place.lng}`;
		csvStr += csvLine;
	});
	return csvStr;
}

function addPlace(place) {
	gPlaces.push(place);
	saveToStorage(STORAGE_KEY, gPlaces);
}
