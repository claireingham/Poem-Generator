function displayPoem(response) {
  new Typewriter("#poem", {
    strings: "God could not be everywhere, so he made mothers",
    autostart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let apiKey = "2ef76df8bbtdbob65420d8afef3dc0e3";
  let context =
    "You are a poetry expert and love writing short 4 line poems based on a one word prompt. Provide the output in basic html. Do not exceed four lines";
  let prompt = "";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
