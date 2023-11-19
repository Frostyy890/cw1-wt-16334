// Modal form code
const modal = document.querySelector(".modal");
const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const loginBtn = document.querySelector(".login-btn");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

function showLogin() {
  modal.classList.add("active-form");
}
function closeLogin() {
  modal.classList.remove("active-form");
  wrapper.classList.remove("active");
}

function logRegComplete() {
  const username = document.getElementById("usernameInput");
  if (username.value == "" && password.value == "") {
    alert("Username and password required");
  } else {
    alert(`Welcome, ${username.value}!`);
    closeLogin();
  }
}

window.onresize = () => {
  const top = (window.innerHeight - modal.offSetHeight) / 2;
  const left = (window.innerWidth - modal.offSetWidth) / 2;
  modal.style.top = top + "px";
  modal.style.left = left + "px";
};



// Hamburger menu code
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".nav-menu");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active-hamburger");
  navbar.classList.toggle("active-hamburger");
});

// Send to enroll code
const enrollBtn = document.getElementById("enroll-btn");

enrollBtn.onclick = function () {
  location.href = "enrollpage.html";
}


// Logo to homepage code
const logo = document.getElementById("logo");

logo.onclick = function () {
  location.href = "homepage.html";
}



