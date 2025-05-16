const toggleButton = document.getElementById("toggle-theme");
const body = document.body;

// Toggle dark mode on click
toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Update theme in localStorage
  const isDark = body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  // Update button text
  toggleButton.textContent = isDark ? "Bright Mode" : "Dark Mode";
});

// Load saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    toggleButton.textContent = "Bright Mode";
  } else {
    body.classList.remove("dark-mode");
    toggleButton.textContent = "Dark Mode";
  }
});

function navigateToContact() {
    window.location.href = '#contact';
  }