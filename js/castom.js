"use strict";

let passwordQuality = document.getElementById('PasswordQuality');
let passwordCharacter = document.getElementById('PasswordCharacter');

let passwordShow = document.getElementById('PasswordShow');
let btn = document.getElementById('btn');


let number = "0123456789";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let char = "!@#$%^&*()=-_|?/.,<>";


btn.addEventListener("click", function() {
	let qualityVlu = passwordQuality.value;
	let lengthVlu = passwordCharacter.value;

	let password = "";

	let quelity = 0;

	if (qualityVlu == 1) {
		quelity = number;
	} else if (qualityVlu == 2) {
		quelity = number + upperCase + lowerCase;
	} else if (qualityVlu == 3) {
		quelity = number + upperCase + lowerCase + char;
	}

	if (lengthVlu == 0 && qualityVlu == 0) {
		passwordQuality.style.borderColor = "red";
		passwordCharacter.style.borderColor = "red";
	} else if (lengthVlu !== 0 && qualityVlu == 0) {
		passwordQuality.style.borderColor = "red";
		passwordCharacter.style.borderColor = "red";
	} else if (lengthVlu == 0 && qualityVlu !== 0) {
		passwordQuality.style.borderColor = "red";
		passwordCharacter.style.borderColor = "red";
	} else {
		passwordQuality.style.borderColor = "#3335";
		passwordCharacter.style.borderColor ="#3335";

		for(let i = 0; i < lengthVlu; i++) {
			let random = Math.floor(Math.random() * quelity.length);
			password += quelity.substring(random, random + 1);
		}
	}

	passwordShow.value = password;

})