function toggleBar() {
  const navLink = document.querySelector(".nav-links");
  if (navLink.style.display === "flex") {
    navLink.style.display = "none";
  } else {
    navLink.style.display = "flex";
  }
}
