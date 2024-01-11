// Last Modified Date
let lastModified = document.lastModified;
let lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = lastModified;

// Copyright Year
let currentYear = (new Date()).getFullYear();
let currentYearElement = document.getElementById("currentYear");
currentYearElement.textContent = currentYear;