const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll("[data-animate], .card, .glass, .project").forEach((el) => {
  el.setAttribute("data-animate", "");
  observer.observe(el);
});

