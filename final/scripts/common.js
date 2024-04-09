// Hamburger Menu
const hamButton = document.querySelector('#hamburger');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
	if(navigation.classList.contains('show'))
	{
		navigation.classList.remove('show');
		hamButton.textContent = "X";
	}
	else
	{
		navigation.classList.toggle('show');
		hamButton.textContent = "☰";
	}
});

// Last Modified
let lastModified = document.lastModified;
let lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = lastModified;