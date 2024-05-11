import getGeminiResponse from "./googleAIAPI.js"

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    getGeminiResponse(transcript);
  };

export default recognition;