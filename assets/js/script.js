import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
let runnung = false;

const apiKEY = "AIzaSyBDkj1Qd65XR1HnilDoUZskM7xp5KRkpuo";

const genAI = new GoogleGenerativeAI(apiKEY);


////////////////////////////////////////////////////////////
const btnLang = document.getElementById("btn-lang");

const links = document.querySelectorAll(".dropdown-item");
let selectedLanguage = "";
links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
     selectedLanguage = event.target.textContent;
     btnLang.textContent = selectedLanguage;
  });
});


/////////////////////////////////////////////////////////

const textArea = document.getElementById("text-area");

recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript;

  async function run() {
    
    const prompt = "Traduza o texto" + transcript + "para o idioma" + selectedLanguage;

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    textArea.innerHTML += text;
  }
  run();
};

const recordButton = document.getElementById("record-button");

recordButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (runnung == true) {
    runnung = false;
    recognition.stop();
  } else if (recognition) {
    runnung = true;
    textArea.innerHTML = "";
    recognition.start();
  }
});
