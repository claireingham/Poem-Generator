function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings:"God could not be everywhere, so he made mothers",
    autostart: true;
    delay: 1,
    cursor: "",
  });
  alert("Generating Poem");
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
