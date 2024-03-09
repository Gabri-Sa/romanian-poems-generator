function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "a4cf7a5b0a77537beftcb4bo13d400ab";
  let prompt = `Generate a Romanian poem about ${instructionsInput.value}`;
  let context =
    "You are a romantic poetry expert and love to write short poems.Your mission is to generate a 4 lines poem, and to make sure to input it in basic HTML format and separate each line with a <br />. Please mention the poem's author at the end of the poem, and then, after the author, two <br /> down, sign the poem with 'SheCodes AI' inside element in Italic.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">
  ⏳ ... Generating a Romanian poem about <em>${instructionsInput.value}</em></div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
