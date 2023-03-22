function buy() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");
  let coffee = prompt("How do you take your coffee? (black/cream/sugar)");

  if (coffee === "black") {
    alert("Thank you " + name + "! We'll be in touch by email! 😎");
  } else if (coffee === "cream") {
    alert("Thank you " + name + "! We'll be in touch by email! 🤠");
  } else if (coffee === "sugar") {
    alert("Thank you " + name + "! We'll be in touch by email! 🥸");
  }
}

let buyButton = document.querySelector(".buy-button");
buyButton.addEventListener("click", buy);
