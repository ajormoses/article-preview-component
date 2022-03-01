const icon = document.querySelector(".owner-media");
const social = document.querySelector(".owner-socials");
const lightShare = document.querySelector(".light-share");
const darkShare = document.querySelector(".dark-share");

icon.addEventListener("click", () => {
  social.classList.toggle("show");
  icon.classList.toggle("show");
  lightShare.classList.toggle("show");
  darkShare.classList.toggle("show");
});
