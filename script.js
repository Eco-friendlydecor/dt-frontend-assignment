const nameInput = document.getElementById("name");
const greet = document.getElementById("greet");

nameInput.addEventListener("input", function() {
  const userName = nameInput.value || "Learner";
  greet.textContent = `Welcome, ${userName}! 👋`;
});