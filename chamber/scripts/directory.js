const url = './data/members.json';

function displayMembers(members){
    const cards = document.querySelector('#members');
        members.forEach((member) =>
        {
            let section = document.createElement('section')
            section.classList.add('directoryCard');

            let image = document.createElement('img');
            image.setAttribute('src', member.imageFile);
            image.setAttribute('alt', member.name);
            image.setAttribute('loading', 'lazy');
            image.setAttribute('width', '200');

            let sectionHTML = `
            ${image.outerHTML}
            <div class=directoryCardText>
            <h2>${member.name}</h2>
            <h3>${member.membershipLevel}</h3>
            <p>${member.address}</p>
            <p>${member.phoneNumber}</p>
            <a href="${member.websiteURL}">Website</a>
            </div>`;

        section.innerHTML = sectionHTML;
        cards.appendChild(section);
        }
    );
}

async function getMemberData(){
    const response = await fetch(url)
    if (response.ok){
        const data = await response.json();
        displayMembers(data.members)
    }
}

getMemberData();

const gridbutton = document.querySelector("#grid-button");
const listbutton = document.querySelector("#list-button");
const display = document.querySelector('#members');

gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

