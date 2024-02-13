const root = document.documentElement;
const body = document.body;
const header = document.querySelector("header");
const darkmode = document.querySelector("#darkmode");
const nav = document.querySelector("nav");
const hamburger = document.querySelector("#hamburger")
const main = document.querySelector("main");
const card = document.getElementsByClassName("card");
const footer = document.querySelector("footer");


darkmode.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) 
    {
    // Darkmode On
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    // Header
            main.style.backgroundColor = "var(--darkmodeMainColor)";
            header.style.backgroundColor = "var(--darkmodeMainColor)"
            header.style.color = "var(--lightTextColor)";
    // Nav
            nav.style.backgroundColor = "var(--darkmodeBackgroundColor)";
            darkmode.style.color = "var(--lightTextColor)";
            darkmode.style.backgroundColor = "var(--darkmodeMainColor)";
            hamburger.style.backgroundColor = "var(--darkmodeMainColor)"
    // Footer
            footer.style.backgroundColor = "var(--darkmodeBackgroundColor)";
    // Card
            for (let i = 0; i < card.length; i++)
            {
                card[i].style.backgroundColor = "var(--darkmodeLightBackgroundColor)";
                
                const h2 = card[i].querySelector("h2");
                h2.style.backgroundColor = "var(--darkmodeBackgroundColor)";
            }
            darkmode.textContent = 'LIGHT';
    } 
    else if (body.classList.contains('dark-mode'))
    {
    // Darkmode Off
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    // Header
        main.style.backgroundColor = "var(--lightmodeMainColor)";
        header.style.backgroundColor = "var(--lightTextColor)"
        header.style.color = "var(--darkTextColor)";
    // Nav
        nav.style.backgroundColor = "var(--lightmodeBackgroundColor)";
        darkmode.style.color = "var(--lightmodeBackgroundColor)";
        darkmode.style.backgroundColor = "var(--lightTextColor)";
        hamburger.style.backgroundColor = "var(--darkmodeMainColor)"
    // Footer
        footer.style.backgroundColor = "var(--lightmodeBackgroundColor)";
    // Card
        for (let i = 0; i < card.length; i++)
        {
            card[i].style.backgroundColor = "var(--lightmodeMainColor)";
            
            const h2 = card[i].querySelector("h2");
            h2.style.backgroundColor = "var(--lightmodeBackgroundColor)";
        }
        darkmode.textContent = 'DARK';
    }
    });