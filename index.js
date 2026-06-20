let savedLinks = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")


document.getElementById("save-btn").addEventListener("click",
    function()
    {
        if (inputEl.value != "")
        { 
            savedLinks.push(inputEl.value)
            inputEl.value = ""
            renderList()
        }
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
        listItems += `
                <li>
                <a href='${savedLinks[i]}' target='_blank'> ${savedLinks[i]} </a>
                </li>
            `
    }

    ulEl.innerHTML = listItems
}
