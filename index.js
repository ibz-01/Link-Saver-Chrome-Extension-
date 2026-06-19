let savedLinks = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let listItems = ""

document.getElementById("save-btn").addEventListener("click",
    function()
    {
        savedLinks.push(inputEl.value)
        console.log(inputEl.value)
    }
)

document.getElementById("input-el").addEventListener("click",
    function()
    {
        console.log("Input field clicked")
    }
)

for(let i =0; i < savedLinks.length; i++)
{   
    listItems += "<li>" + savedLinks[i] + "</li>"
}

ulEl.innerHTML = listItems

