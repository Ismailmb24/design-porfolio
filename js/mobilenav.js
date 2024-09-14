const nav = document.getElementById("nav");
const bar = document.getElementById("bars-icon");

function toggleActive(stimulusNode, targetNode) {
    stimulusNode.classList.toggle("active");
    targetNode.classList.toggle("active");
}

bar.addEventListener("click", () => {
    toggleActive(bar, nav);
});

const navLinks = document.getElementsByClassName("nav-links");
for (let navLink of navLinks) {
    navLink.addEventListener("click", e => {
        toggleActive(bar, nav);
    }, false);
}