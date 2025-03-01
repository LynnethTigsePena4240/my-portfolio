
var showbtn1 = document.getElementById("showbtn1")
var showbtn2 = document.getElementById("showbtn2")
var showbtn3 = document.getElementById("showbtn3")
var display = document.getElementById("text1")

showbtn1.addEventListener("click",function()
{
    var text = document.getElementById("text1")
    if(text.style.display === "none")
    {
        text.style.display = "block"
        showbtn1.innerText = "Hide Details"
    }

    else
    {
        text.style.display = "none"
        showbtn1.innerText = "Show Details"
    }

})

showbtn2.addEventListener("click",function()
{
    var text = document.getElementById("text2")
    if (text.style.display === "none")
    {
        text.style.display = "block"
        showbtn2.innerText = "Hide Details"
    }
    
    else
    {
         text.style.display = "none"
         showbtn2.innerText = "Show Details"
    }
})

showbtn3.addEventListener("click",function()
{
    var text = document.getElementById("text3")
    if (text.style.display === "none")
    {
        text.style.display = "block"
        showbtn3.innerText = "Hide Details"
    }
        
    else
    {
        text.style.display = "none"
        showbtn3.innerText = "Show Details"
    }
})

var form = document.getElementById("contact-form")
const nameInput = document.getElementById("name")
var emailInput = document.getElementById("email")
var messageInput = document.getElementById("message")
var submitbtn = document.getElementById("submitbtn") 

var nameErr = document.getElementById("nameError")
var emailErr = document.getElementById("emailError")
var msgErr = document.getElementById("messageError")

form.addEventListener("submit", function(event)
{
    nameErr.textContent = "";
    if(nameInput.value.trim() === "")
    {
        nameErr.textContent = "Please enter your name"
        event.preventDefault();
    }

    if(emailInput.value.trim() === "")
    {
        emailErr.textContent = "Please enter your email"
        event.preventDefault()
    }
    else if (!validateEmail(emailInput.value))
    {
        emailErr.textContent = "Please enter a vaild email"
        event.preventDefault();
    }

    if(messageInput.value.trim() === "")
    {
        msgErr.textContent = "Please leave a message"
        event.preventDefault();
    }
})

function validateEmail(email)
{
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(String(email))
}