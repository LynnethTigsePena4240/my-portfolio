
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

const form = document.getElementById("contact-form")
const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const messageInput = document.getElementById("message")
const submitbtn = document.getElementById("submitbtn") 

const nameErr = document.getElementById("nameError")
const emailErr = document.getElementById("emailError")
const msgErr = document.getElementById("messageError")

form.addEventListener("submit", function(event)
{

    nameErr.textContent = "";
    emailErr.textContent = "";
    msgErr.textContent = "";

    let isVaild = true;
    
    if(nameInput.value.trim() === "")
    {
        nameErr.textContent = "Please enter your name"
        isVaild = false;
    }

    if(emailInput.value.trim() === "")
    {
        emailErr.textContent = "Please enter your email"
        isVaild = false;
        console.log("falses");
        
    } 
    else if (!validateEmail(emailInput.value))
    {
        emailErr.textContent = "Please enter a vaild email"
        console.log("false");
        isVaild = false;
    }

    if(messageInput.value.trim() === "")
    {
        msgErr.textContent = "Please leave a message"
        isVaild = false;
    }

    if (!isVaild)
    {
        event.preventDefault();
    }

})

function validateEmail(email)
{
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email))
}