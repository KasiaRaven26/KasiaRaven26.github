const splash = document.querySelector(".splash");
const a = document.querySelector(".logo.fade-in")

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    splash.classList.add("display-none");
  }, 1800);
});

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
    //   a.classList.remove("fade-in");
      a.classList.add("fade-out");
    }, 2000);
  });