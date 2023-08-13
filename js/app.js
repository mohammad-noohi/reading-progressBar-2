/* CUSTOM READING PROGRESS BAR */

const readingProgressBar = document.querySelector(".reading-progress");

window.addEventListener("scroll", function () {
  let percent =
    (window.scrollY /
      (document.documentElement.clientHeight - window.innerHeight)) *
    100;

  readingProgressBar.style.width = percent + "%";
});
