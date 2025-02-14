const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector("#navbar");

menu.addEventListener("click", function () {
    navbar.classList.toggle("active");
});

window.onscroll = () => {
    navbar.classList.remove("active");
};


document.getElementById("signInBtn").addEventListener("click", function () {
    document.getElementById("signInModal").style.display = "block";
});

document.getElementById("signUpBtn").addEventListener("click", function () {
    document.getElementById("signUpModal").style.display = "block";
});

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

function signIn() {
    alert("Sign In successful!");
    closeModal('signInModal');
}

function signUp() {
    alert("Sign Up successful!");
    closeModal('signUpModal');
}