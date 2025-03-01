
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