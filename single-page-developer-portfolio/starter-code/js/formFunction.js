const form = document.getElementById("form");
const button = document.getElementById("buttonSubmit");

const nameInput    = document.getElementById("name");
const emailInput   = document.getElementById("email");
const messageInput = document.getElementById("message");
const errorInput   = document.querySelectorAll(".form__error");
const iconInput    = document.querySelectorAll(".name-icon");


// Función genérica para validar un campo
function validateField(input, errorElement, validationFn, icon) {
  if (!validationFn(input.value)) {
    errorElement.style.display = "block";
    input.style.borderBottomColor = "#FF6F5B";
    icon.style.display = "block";
    return false;
  }

  errorElement.style.display = "none";
  icon.style.display = "none";
  input.style.borderBottomColor = "var(--clr-green)";
  return true;
}

button.addEventListener("click", (event) => {
  event.preventDefault();

  const isNameValid = validateField(
    nameInput,
    errorInput[0],
    (value) => value.trim() !== "",
    iconInput[0]
  );

  const isEmailValid = validateField(
    emailInput,
    errorInput[1],
    (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    iconInput[1]
  );

  const isMessageValid = validateField(
    messageInput,
    errorInput[2],
    (value) => value.trim() !== "",
    iconInput[2]
  );

  if (isNameValid && isEmailValid && isMessageValid) {
    console.log({
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value
    });

    form.reset();
  }
});

/* Hover over projects */

const containers = document.querySelectorAll(".projects__image_container");

containers.forEach((container) => {
  const list = container.querySelector(".projects__links_hover");

  container.addEventListener("mouseover", () => {
    if (window.innerWidth >= 1024) {
      list.style.display = "flex";
    }
  });

  container.addEventListener("mouseout", () => {
    list.style.display = "none";
  });
});