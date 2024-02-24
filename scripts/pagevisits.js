const visitsDisplay = document.getElementById('visitCount');

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
if (numVisits !== 0)
{
	visitsDisplay.textContent = 'Site Visits: ' + numVisits;
} 
else
{
	visitsDisplay.textContent = `This is your first time on this site!`;
}
numVisits++;
localStorage.setItem("numVisits-ls", numVisits);