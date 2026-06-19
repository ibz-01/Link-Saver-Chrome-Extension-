let savedLinks = []
const inputEl = document.getElementById("input-el")

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