const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector('#cards');

async function getProphetData(){
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);
    displayProphets(data.prophets);
}
const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let name = document.createElement("h2");
        let image = document.createElement("img");
        let card = document.createElement("section");
        card.classList.add('card');

        name.textContent = `${prophet.name} ${prophet.lastname}`

        image.setAttribute('src', prophet.imageurl);
        image.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // fill in the blank
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '340');
        image.setAttribute('height', '440');

        card.appendChild(name);
        card.appendChild(image);
        cards.appendChild(card);
    });
}
getProphetData();