const currentDate = new Date();
const dayOfWeek = currentDate.getDay();
const bannerButton = document.querySelector('#bannerButton');
const banner = document.querySelector('#banner');

// Last Modified Date
let lastModified = document.lastModified;
let lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = lastModified;

function DisplayBanner()
{
    if (dayOfWeek >= 1 && dayOfWeek <=3)
    {
        banner.style.display = 'grid';
    }
}
function CloseBanner()
{
    banner.style.display = 'none';
}

bannerButton.addEventListener('click', ()=> {
    bannerButton.classList.toggle('hide'); 
})

DisplayBanner();