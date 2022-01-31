const emailInput = document.querySelector(".email__ input");
const emailBtn = document.querySelector(".email__ button");
const emailList = document.querySelector(".email__list");
const alertBox = document.querySelector(".alert_box");

emailBtn.addEventListener("click", () => {
  var re = /\S+@\S+\.\S+/;
  if (emailInput.value !== "" && re.test(emailInput.value)) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.textContent = emailInput.value;
    span.textContent = "x";
    li.appendChild(span);
    emailList.appendChild(li);

    emailInput.value = "";
  } else {
    alertBox.classList.add("show");
    alertBox.textContent = "Please Validate the Email";
    setInterval(() => {
      alertBox.classList.remove("show");
    }, 2000);
  }
});
