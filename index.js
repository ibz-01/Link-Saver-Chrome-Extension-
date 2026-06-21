let savedLinks = JSON.parse(localStorage.getItem("savedLinks")) || []

const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

const saveBtn = document.getElementById("save-btn")
const tabBtn = document.getElementById("tab-btn")
const deleteBtn = document.getElementById("del-btn")


renderList()

document.getElementById("save-btn").addEventListener("click",
    function()
    {
        if (inputEl.value != "")
        {   
            const formattedUrl = formatUrl(inputEl.value)

            savedLinks.push(formattedUrl)
            localStorage.setItem("savedLinks", JSON.stringify(savedLinks))
            inputEl.value = ""

            renderList()
        }
    }
)

deleteBtn.addEventListener("click", function () {
    localStorage.clear()
    savedLinks = []
    renderList()
})

tabBtn.addEventListener("click", function () {
    chrome.tabs.query(
        { active: true, currentWindow: true },
        function (tabs) 
        {
            savedLinks.push(tabs[0].url)

            localStorage.setItem(
                "savedLinks",
                JSON.stringify(savedLinks)
            )

            renderList()
        }
    )
})

document.getElementById("input-el").addEventListener("click",
    function()
    {
        console.log("Input field clicked")
    }
)

function renderList() 
{
    let listItems = ""

    for (let i = 0; i < savedLinks.length; i++) 
    {
        listItems += `
            <li>
                <a href="${savedLinks[i]}" target="_blank">
                    ${savedLinks[i]}
                </a>
                <button class="delete-btn" data-index="${i}">X</button>
            </li>
        `
    }

   ulEl.innerHTML = listItems

    const deleteButtons = document.querySelectorAll(".delete-btn")

    deleteButtons.forEach((button) => {
        button.addEventListener("click", function () 
        {
            const index = button.dataset.index
            deleteLink(index)
        })
    })
}

function deleteLink(index) 
{
    savedLinks.splice(index, 1)

    localStorage.setItem(
        "savedLinks",
        JSON.stringify(savedLinks)
    )

    renderList()
}


function formatUrl(url) {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        return "https://" + url
    }
    return url
}