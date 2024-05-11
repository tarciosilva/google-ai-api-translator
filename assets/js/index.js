import recognition  from "./audioRecognition.js";
import textTranscripter from "./textTranscription.js";

const btnLang = document.getElementById("btn-lang");
const links = document.querySelectorAll(".dropdown-item");
const textArea = document.getElementById("text-area");
const recordButton = document.getElementById("record-button");
const trascripButton = document.getElementById("trascrip-button");
let selectedLanguage = "";
let runnung = false;

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    selectedLanguage = event.target.textContent;
    btnLang.textContent = selectedLanguage;
  });
});

recordButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (runnung == true) {
    runnung = false;
    recognition.stop();
  } else if (recognition) {
    runnung = true;
    textArea.value = "";
    recognition.start();
  }
});

trascripButton.addEventListener("click", (event) => {
    event.preventDefault();
    textTranscripter();
});

export { selectedLanguage, textArea };
