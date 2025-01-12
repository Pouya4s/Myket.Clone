
document.addEventListener("scroll",function (){
  const logo = document.getElementById("logo");
  if (window.pageYOffset > 200) {
    logo.classList.add("show");
  }
  if (window.pageYOffset < 200) {
    logo.classList.remove("show");
  }
})