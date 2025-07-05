document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("modeToggle");
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  // Form validation
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    if (!validateEmail(email.value)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!message.value.trim()) {
      alert("Please enter your message.");
      return;
    }
    alert("Message sent successfully!");
    form.reset();
  });

  function validateEmail(email) {
    const re = /^\S+@\S+\.\S+$/;
    return re.test(email);
  }
});
