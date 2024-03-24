function DisplayBanner()
{
    if (dayOfWeek >= 1 && dayOfWeek <=3)
    {
        banner.style.display = 'grid';
    }
    else
    {
        banner.style.display = 'none';
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