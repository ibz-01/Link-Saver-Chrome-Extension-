let savedLinks = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")


document.getElementById("save-btn").addEventListener("click",
    function()
    {
        savedLinks.push(inputEl.value)
        renderList()
        console.log(inputEl.value)
    }
)

document.getElementById("input-el").addEventListener("click",
    function()
    {
        console.log("Input field clicked")
    }
)

function renderList()
{
    let listItems = ""

    for(let i =0; i < savedLinks.length; i++)
    {   
        listItems += "<li>" + savedLinks[i] + "</li>"
    }

    ulEl.innerHTML = listItems
}
