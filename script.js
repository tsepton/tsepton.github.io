window.onload = main

function main() {
    const avatar = document.getElementById("avatar")

    setTimeout(handleLinks, 1000)
    avatar.onclick = handleLinks

}

function handleLinks() {
    links = document.getElementById("links")
    if (links.classList.contains("expanded")) {
        links.classList.remove("expanded")
    } else {
        links.classList.add("expanded")
    }
}
