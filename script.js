
var showbtn1 = document.getElementById("showbtn1")
var showbtn2 = document.getElementById("showbtn2")
var showbtn3 = document.getElementById("showbtn3")
var display1 = document.getElementById("text1")
var display2 = document.getElementById("text2")
var display3 = document.getElementById("text3")
var preview1 = document.getElementById("preview1")
var preview2 = document.getElementById("preview2")
var preview3 = document.getElementById("preview3")

showbtn1.addEventListener("click",function()
{
    var flexItem = showbtn1.closest(".flex-item")
    if(display1.style.display === "none")
    {
        preview1.style.display = "none"
        display1.style.display = "block"
        showbtn1.innerText = "Hide Details"
        flexItem.classList.add("fixed-height")
    }

    else
    {
        preview1.style.display = "block"
        display1.style.display = "none"
        showbtn1.innerText = "Show Details"
        flexItem.classList.remove("fixed-height")
    }

})

showbtn2.addEventListener("click",function()
{
    var flexItem = showbtn2.closest(".flex-item")
    if (display2.style.display === "none")
    {
        preview2.style.display = "none"
        display2.style.display = "block"
        showbtn2.innerText = "Hide Details"
        flexItem.classList.add("fixed-height")
    }
    
    else
    {
        preview2.style.display = "block"
        display2.style.display = "none"
        showbtn2.innerText = "Show Details"
        flexItem.classList.remove("fixed-height")
    }
})

showbtn3.addEventListener("click",function()
{
    var flexItem = showbtn3.closest(".flex-item")
    if (display3.style.display === "none")
    {
        preview3.style.display = "none"
        display3.style.display = "block"
        showbtn3.innerText = "Hide Details"
        flexItem.classList.add("fixed-height")
    }
        
    else
    {
        preview3.style.display = "block"
        display3.style.display = "none"
        showbtn3.innerText = "Show Details"
        flexItem.classList.remove("fixed-height")
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
        
    } 
    else if (!validateEmail(emailInput.value))
    {
        emailErr.textContent = "Please enter a vaild email"
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
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(String(email))
}

let typed;

document.getElementById("email").addEventListener("focus", function()
{

    if (!typed)
    {
        typed = new Typed('#email', {
            strings: ['Enter your email', 'Heres an example:', 'smith@hotmail.com'],
            typeSpeed: 0,
            backSpeed: 0,
            attr: 'placeholder',
            bindInputFocusEvents: true,
            loop: false
        })
    }

})

// added the type.js external libraries
var aboutSec = document.getElementById("about")
var aboutText = aboutSec.innerHTML //save the text before it is cleared
//to clear the text in the html already
aboutSec.innerHTML = ""

//the type animation is then set up
var typed1= new Typed('#about', {
    strings: [aboutText],
    typeSpeed: 0,
    backSpeed: 0,
    bindInputFocusEvents: true,
    loop: false,
    showCursor: false
})

var darkbtn = document.getElementById("darkBtn")

if (localStorage.getItem("dark-mode") === "true")
{
    document.body.classList.add("dark-mode")
    darkbtn.innerText = "Light Mode"
}
else
{
    document.body.classList.remove("dark-mode")
    darkbtn.innerText = "Dark Mode"
}

darkBtn.addEventListener("click",function()
{
    var element = document.body;
    element.classList.toggle("dark-mode")
    
    if (element.classList.contains("dark-mode"))
    {
        localStorage.setItem("dark-mode", "true")
        darkbtn.innerText = "Light Mode"
    }
    else
    {
        localStorage.setItem("dark-mode", "false")
        darkbtn.innerText = "Dark Mode"
    }
})