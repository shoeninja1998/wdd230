const currentDate = new Date();
const dayOfWeek = currentDate.getDay();
const bannerButton = document.querySelector('#bannerButton');
const banner = document.querySelector('#banner');

// Last Modified Date
let lastModified = document.lastModified;
let lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = lastModified;