const month = document.querySelector(".month");
const week = document.querySelector(".week");

month.addEventListener("click", () => {
  month.classList.add("active2");
  week.classList.remove("active2");
});

week.addEventListener("click", () => {
  week.classList.add("active2");
  month.classList.remove("active2");
});

function myFunction() {
  // Get the text field
  var copyText = document.getElementById("copy-text");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  
}
function myFunction1() {
  // Get the text field
  var copyText1 = document.getElementById("copy-text1");

  // Select the text field
  copyText1.select();
  copyText1.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText1.value);
  
}


const limit4 = document.querySelector(".limit4");
const limit2 = document.querySelector(".limit2");
const limit3 = document.querySelector(".limit3");

limit4.addEventListener("click", () => {
  limit4.classList.toggle("active3");
});

limit2.addEventListener("click", () => {
  limit2.classList.toggle("active");
});

limit3.addEventListener("click", () => {
  limit3.classList.toggle("active");
});

const navbarToggle = document.querySelector(".navbar-toggle");
const navbarLinks = document.querySelector(".center-menu");

navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("active");
  navbarLinks.classList.toggle("active");
});



