// IMAGE SLIDER
let slides = document.querySelectorAll(".slide");
let index = 0;

if (slides.length > 0) {
  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 4000);
}

// FAQ
document.querySelectorAll(".faq-item").forEach(item => {
  item.addEventListener("click", () => {
    let answer = item.querySelector(".faq-answer");
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});

// FADE IN
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".fade").forEach(el => observer.observe(el));