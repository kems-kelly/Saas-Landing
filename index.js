const bars = document.getElementById("bars");
const mobile = document.getElementById("mobile");
const close = document.getElementById("close");
const faqItems = document.querySelectorAll(".faq-item");
const bento = document.querySelector(".bento");

bars.addEventListener("click", () => {
  mobile.classList.add("active");
});

close.addEventListener("click", () => {
  mobile.classList.remove("active");
});

faqItems.forEach((item) => {
  const button = item.querySelector(".faq-question");

  button.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    faqItems.forEach((i) => i.classList.remove("active"));

    if (!isActive) {
      item.classList.add("active");
    }
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  },
  { threshold: 0.2 },
);

observer.observe(bento);
