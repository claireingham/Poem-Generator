function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "God could not be everywhere, so he made mothers",
    autostart: true,
    delay: 1,
    cursor: "",
  });
}

let apiKey = "2ef76df8bbtdbob65420d8afef3dc0e3";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
