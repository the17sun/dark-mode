var elBody = document.querySelector("body");
var elDarkModeBtn = document.querySelector(".js-dark-mode");

elDarkModeBtn.addEventListener("click", function() {
    elBody.classList.toggle("theme-dark");
    elDarkModeBtn.classList.toggle("dark-mode-img");
    // console.log(elDarkModeBtn.classList);

    if(elDarkModeBtn.classList[2] === "dark-mode-img"){
        elDarkModeBtn.textContent = "Light Mode";
    } else {
        elDarkModeBtn.textContent = "Dark Mode";
    }
});