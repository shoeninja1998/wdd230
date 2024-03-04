const submit = document.getElementById("submit")
const confirmation = document.getElementById("confirmation")
const password = document.getElementById("password")
const message = document.getElementById('message')

confirmation.addEventListener('blur', ()=>
{
    if(password.value == confirmation.value)
    {
        message.innerHTML = ""
    }
    else
    {
        message.innerHTML = "Passwords do not match!"
        confirmation.value = ""
        password.focus()
    }
})

const rating = document.getElementById('rating')
const currentRating = document.getElementById('currentRating')

rating.addEventListener('change', ()=>
{
    currentRating.innerHTML = rating.value
})