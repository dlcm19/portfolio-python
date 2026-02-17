const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

const prevBtnPandas = document.getElementById("prevBtn-pandas")
const nextBtnPandas = document.getElementById("nextBtn-pandas")

console.log(prevBtnPandas)

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});