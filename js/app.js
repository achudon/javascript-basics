"use strict";

var name = 'Alyssa';

var fruits = ['apple', 'pear', 'kiwi', 'banana'];


function onLoaded() {
	var msgElem = document.getElementById('message'); 
	msgElem.innerHTML = 'Hello ' + name;
}

document.addEventListener('DOMContentLoaded', function() {
	var msgElem = document.getElementById('message'); 
	var idx;
	var fruitListElem = document.getElementById('message');
	var fruitli;
	var animalSound = document.getElementById('animal-sound');
	msgElem.innerHTML = 'Hello ' + name;

	for (idx = 0; idx < fruits.length; ++idx) {
		console.log(fruits[idx]);
		fruitli = document.createElement('li');
		fruitli.innerHTML = fruits[idx];
		fruitListElem.appendChild(fruitli);
	}

	var animalPic = document.getElementById('animal-picture');
	animalPic.addEventListener('click', function() {
		msgElem.innerHTML = 'Meow!';
		animalSound.play();
	});

	animalSound.addEventListener('ended', function(){
		msgElem.innerHTML = '&nbsp';
	});

	window.setInterval(function() {
		animalSound.play();
	}, 500);
	
	window.setInterval(function() {
		document.getElementById('clock').innerHTML = new Date().toLocaleString();
	}, 1000);
});

