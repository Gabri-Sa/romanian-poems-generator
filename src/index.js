function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "A fost odata ca-n povesti",
    autoStart: true,
    delay: 1,
    cursor: "",
  });

  poemElement.innerHTML = "A fost odata ca-n povesti";
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
