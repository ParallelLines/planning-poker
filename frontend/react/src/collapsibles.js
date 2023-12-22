const togglers = document.querySelectorAll(".toggle-btn")

for (let toggler of togglers) {
    toggler.addEventListener("click", function() {
        const targetId = this.dataset.target
        const collapsible = document.querySelector(`#${targetId}`)
        this.classList.toggle("close-btn")
        collapsible.classList.toggle("opened")
    })
}

function closeCollapsiblesWhenClickAnywhere(e) {
    const collapsibles = document.querySelectorAll(".collapsible")

    for (let collapsible of collapsibles) {
        const isClickInside = collapsible.contains(e.target)
        const togglerId = collapsible.dataset.toggler
        const toggler = document.querySelector(`#${togglerId}`)
        const isClickOnToggler = toggler.contains(e.target)
        if (!isClickInside && !isClickOnToggler) {
            collapsible.classList.remove("opened")
            toggler.classList.remove("close-btn")
        }
    }
} 

document.addEventListener("click", closeCollapsiblesWhenClickAnywhere, false)