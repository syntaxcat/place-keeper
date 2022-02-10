'use strict';

let map;
let clickedLocation;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: 29.572426, lng: 34.941011 },
		zoom: 13
	});

	renderLocation();

	map.addListener('click', (mapsMouseEvent) => {
		document.querySelector('.modal').style.display = 'block';
		clickedLocation = mapsMouseEvent.latLng.toJSON();
	});
}

function centerMap(lat, lng) {
	map.setCenter({ lat, lng });
}

function onCurrentLocation() {
	centerOnCurrLocation();
}

function renderLocation() {
	let strHTMLs = gPlaces.map(
		(place) =>
			`
            <li>
               ${place.name}<button onclick="onDeleteLocation(event, '${place.id}')">delete</button>
            </li>
       `
	);
	document.querySelector('#locations-names').innerHTML = strHTMLs.join('');
}

function onDeleteLocation(ev, placeId) {
	ev.stopPropagation();
	console.log('Delete location', placeId);

	deleteLocation(placeId);
	renderLocation();
}

function downloadCSV(elLink) {
	const csvContent = getLocationsAsCSV();
	elLink.href = 'data:text/csv;charset=utf-8,' + csvContent;
}

function onCloseModal() {
	document.querySelector('.modal').style.display = 'none';
}

function onLocationSubmit(ev) {
	ev.preventDefault();
	const name = document.querySelector('input[name="Name"]').value;
	const id = makeId();
	const place = { ...clickedLocation, name, id };
	addPlace(place);
	renderLocation();
	document.querySelector('.modal').style.display = 'none';
	document.querySelector('input[name="Name"]').value = '';
}
