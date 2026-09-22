
const loginScreen = document.getElementById("loginScreen");
const website = document.getElementById("website");

const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const togglePassword = document.getElementById("togglePassword");
const loginMessage = document.getElementById("loginMessage");

const logoutButton = document.getElementById("logoutButton");
const mobileLogoutButton =
  document.getElementById("mobileLogoutButton");

const menuButton = document.getElementById("menuButton");
const mobileNav = document.getElementById("mobileNav");

const mobileLinks = document.querySelectorAll(".mobile-link");

const greetingButton = document.getElementById("greetingButton");
const greetingMessage = document.getElementById("greetingMessage");

const year = document.getElementById("year");



year.textContent = new Date().getFullYear();


togglePassword.addEventListener("click", function () {

  if (passwordInput.type === "password") {

    passwordInput.type = "text";
    togglePassword.textContent = "Hide";

  } else {

    passwordInput.type = "password";
    togglePassword.textContent = "Show";

  }

});

loginForm.addEventListener("submit", function (event) {

  
  event.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  
  if (username === "") {

    showLoginMessage("Please enter your username.");
    return;

  }

  // Check the password length.
  if (password.length < 4) {

    showLoginMessage(
      "Password must contain at least 4 characters."
    );

    return;

  }
    
  loginMessage.classList.add("hidden");

  
  loginScreen.classList.add("hidden");

  
  website.classList.remove("hidden");
    
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


function showLoginMessage(message) {

  loginMessage.textContent = message;
  loginMessage.classList.remove("hidden");

}

function logout() {
  website.classList.add("hidden");
    
  loginScreen.classList.remove("hidden");
    
  loginForm.reset();
    
  passwordInput.type = "password";
  togglePassword.textContent = "Show";
    
  mobileNav.classList.add("hidden");
    
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}

logoutButton.addEventListener("click", logout);

mobileLogoutButton.addEventListener("click", logout);

menuButton.addEventListener("click", function () {

  mobileNav.classList.toggle("hidden");

});


mobileLinks.forEach(function (link) {

  link.addEventListener("click", function () {

    mobileNav.classList.add("hidden");

  });

});

greetingButton.addEventListener("click", function () {

  greetingMessage.textContent =
    "Thank you for visiting my personal website! " +
    "Have a great day. 😊";

  greetingMessage.classList.remove("hidden");

});
