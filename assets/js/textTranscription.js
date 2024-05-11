import { textArea } from "./index.js";

const textTranscripter = () => {
    if (textArea.value !== undefined) {
        let utterance = new SpeechSynthesisUtterance(textArea.value);
        speechSynthesis.speak(utterance);
    }
    
};

export default textTranscripter;