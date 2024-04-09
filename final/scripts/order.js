let url = new URL(window.location);
let params  = url.searchParams;

const fruitURL = `./data/fruit.json`;

const fruit1 = params.get("fruit1");
const fruit2 = params.get("fruit2");
const fruit3 = params.get("fruit3");
const fruits = [fruit1, fruit2, fruit3];

let calories = 0;
let carbohydrates = 0;
let fat = 0;
let sugar = 0;
let protein = 0;

function GetPickupTime(){
    var currentTime = new Date();
    var format = {hour: 'numeric', minute: '2-digit', hour12: 'true'};
    currentTime.setMinutes(currentTime.getMinutes() + 30);
    return currentTime.toLocaleTimeString([], format);
}

function GetOrderTime(){
    var currentTime = new Date();
    var format = {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: 'true'};
    currentTime.setMinutes(currentTime.getMinutes());
    return currentTime.toLocaleTimeString([], format);
}

function GetNutrition(fruitsData){
    fruits.forEach(fruitName => {
        const fruitData = fruitsData.find(fruit => fruit.name === fruitName);

        if (fruitData) {
            calories += fruitData.nutritions.calories;
            sugar += fruitData.nutritions.sugar;
            carbohydrates += fruitData.nutritions.carbohydrates;
            protein += fruitData.nutritions.protein;
            fat += fruitData.nutritions.fat;
        }
    });}

async function GetFruitData(){
    try{
        const response = await fetch(fruitURL)
        if (response.ok){
            const data = await response.json();
            GetNutrition(data.fruits);
            SetOrderInfo();
            let count = parseInt(localStorage.getItem('drinkCounter') || 0);
            count++;
            localStorage.setItem('drinkCounter', count);
            }
    }
    catch (error){
        console.error("Didn't fetch fruit data.", error);
    }
}

function SetOrderInfo(){
    // Nutrition info
    document.querySelector('#calories').textContent = `${calories}`;
    document.querySelector('#sugar').textContent = `${sugar}`;
    document.querySelector('#carbohydrates').textContent = `${carbohydrates}`;
    document.querySelector('#protein').textContent = `${protein}`;
    document.querySelector('#fat').textContent = `${fat}`;
    
    // Customer info
    document.querySelector('#name').textContent = params.get("fname");
    document.querySelector('#email').textContent = params.get("email");
    document.querySelector('#phone').textContent = params.get("phone");
    
    // Order info
    document.querySelector('#fruit1').textContent = fruit1;
    document.querySelector('#fruit2').textContent = fruit2;
    document.querySelector('#fruit3').textContent = fruit3;
    
    let pickupTime = GetPickupTime();
    let orderTime = GetOrderTime();

    document.querySelector('#pickupTime').textContent = pickupTime;
    document.querySelector('#orderTime').textContent = orderTime;
    let instructions = params.get("instructions");
    if (instructions == "")
    {
        document.querySelector('#instructions').textContent = "None"
    }
    else
    {
        document.querySelector('#instructions').textContent = instructions;
    }
}

GetFruitData();