document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contact-form");
const iframe = document.getElementById("hidden_iframe");
const status = document.getElementById("form-status");
let submitted = false;

form.addEventListener("submit", () => {
  submitted = true;
});

iframe.addEventListener("load", () => {
  if (!submitted) return;
  status.classList.add("show");
  form.reset();
  submitted = false;
});

// Track which links get clicked (GA4)
document.querySelectorAll("[data-track]").forEach((el) => {
  el.addEventListener("click", () => {
    if (typeof gtag === "function") {
      gtag("event", "link_click", { link_name: el.dataset.track });
    }
  });
});
