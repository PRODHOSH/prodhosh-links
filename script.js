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
