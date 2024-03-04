const LAST_VISIT_DATE_KEY = 'last-visit';
const DAY_IN_MILLIS = 24*60*60*1000;

function GetDiscoverInformation(){
    var message = "Welcome! Let us know if you have any questions."
    var lastVisitValue = new Date(localStorage.getItem('lastVisitDate'))
    var currentDate = new Date();
    
    if (lastVisitValue != null){
        var timeDifference = currentDate.getTime() - lastVisitValue.getTime()
        var daysSinceLastVisit = Math.floor(timeDifference/DAY_IN_MILLIS)

        daysSinceLastVisit = lastVisitValue/DAY_IN_MILLIS
    }

    if (daysSinceLastVisit == 0){
        console.log(daysSinceLastVisit)
        message = "Welcome back!"
    }
    else if (daysSinceLastVisit == 1){
        message = "Welcome! You last visited 1 day ago."
    }
    else{
        message = `Welcome! You last visited ${daysSinceLastVisit} days ago.`
    }

    localStorage.setItem(LAST_VISIT_DATE_KEY, `${currentDate.getTime()}`)
    return message;
}

document.getElementById("last-visit").textContent = GetDiscoverInformation();