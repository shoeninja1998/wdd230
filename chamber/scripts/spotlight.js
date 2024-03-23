const url = './data/members.json';

function displayMembers(members){
    const spotlights = [];
    const chosenSpotlights = [];
    const cards = document.querySelector('#spotlights');

        members.forEach((member) =>
        {
            if (member.membershipLevel == 'Silver' || member.membershipLevel == 'Gold')
            {
                spotlights.push(member);
            }
        });
        for (let i=3; i>0; i--)
        {
            let randomIndex = Math.floor(Math.random() * spotlights.length);
            chosenSpotlights.push(spotlights[randomIndex]);
            spotlights.splice(randomIndex, 1);
            console.log(i);
        }
        chosenSpotlights.forEach((member) =>
        {
            let section = document.createElement('section')
            section.classList.add('directoryCard');
    
            let image = document.createElement('img');
            image.setAttribute('src', member.imageFile);
            image.setAttribute('alt', member.name);
            image.setAttribute('loading', 'lazy');
            image.setAttribute('width', '200');
    
            let sectionHTML = `
            <div class=directoryCardText>
            <h2>${member.name}</h2>
            ${image.outerHTML}
            <h3>${member.membershipLevel}</h3>
            <p>${member.address}</p>
            <p>${member.phoneNumber}</p>
            <a href="${member.websiteURL}">Website</a>
            </div>`;
    
        section.innerHTML = sectionHTML;
        cards.appendChild(section);
        });
    }

async function getSpotlightData(){
    const response = await fetch(url)
    if (response.ok){
        const data = await response.json();
        displayMembers(data.members)
    }
}

getSpotlightData();