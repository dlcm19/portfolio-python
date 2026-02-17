
const carousel = document.getElementById("carousel");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const carouselPandas = document.getElementById("carousel-pandas")
const nextBtnPandas = document.getElementById("nextBtn-pandas")
const prevBtnPandas = document.getElementById("prevBtn-pandas")

nextBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: 300, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -300, behavior: "smooth" });
});


const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

if (carouselPandas && nextBtnPandas && prevBtnPandas) {
nextBtnPandas.addEventListener("click", () => {
    carouselPandas.scrollBy({ left: 300, behavior: "smooth" });
});

prevBtnPandas.addEventListener("click", () => {
    carouselPandas.scrollBy({ left: -300, behavior: "smooth" });
});
 }

console.log(nextBtn)
console.log(prevBtnPandas)
console.log()