// Typing effect
const text = " Hi, I’m Mugisha.;
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 40);
    }
}

typing();

// Smooth scroll
document.querySelectorAll("a[href^='#']").forEach(a => {
    a.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(a.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});


// Subtle fade-in on scroll (Apple style = minimal)
const elements = document.querySelectorAll(".card, h2, p");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(10px)";
    el.style.transition = "0.6s ease";
    observer.observe(el);
});