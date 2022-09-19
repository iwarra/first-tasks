let button = document.querySelector(".btn")

  button.addEventListener("click", () => {
    if (event.target.getAttribute("aria-expanded") == "true") {
    button.textContent = "Less"
    }

    if (event.target.getAttribute("aria-expanded") == "false") {
    button.textContent = "More"
    }
  })