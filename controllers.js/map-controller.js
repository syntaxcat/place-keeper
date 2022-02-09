'use strict';

let map;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: 29.572426, lng: 34.941011 },
		zoom: 8
	});
}

// loadFromStorage(STORAGE_KEY);
