const $indexBtn = document.getElementById("btnIndex");
$indexBtn.addEventListener("click", (e) => {
  window.scrollTo({
    top: 0,
    //left: 0,
    behavior: "smooth",
  });
});
document.addEventListener("scroll", (e) => {
  if (window.scrollY >= 650) {
    $indexBtn.classList.remove("hide-index");
  } else {
    $indexBtn.classList.add("hide-index");
  }
});
