const contactIput = document.querySelector(".contact__input");
const input = document.querySelector(".contact__input input");

var validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const send = (e) => {
  e.preventDefault();
  if (input.value.match(validRegex)) {
    contactIput.classList.remove("error");
    alert("Valid email address!");
    input.value = "";
    input.focus();
  } else {
    contactIput.classList.add("error");
  }
};
