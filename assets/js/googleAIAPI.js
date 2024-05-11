import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";
import { textArea, selectedLanguage } from "./index.js";
import getKey from "./getAPIKEY.js";

const apiKEY = await getKey();
const genAI = new GoogleGenerativeAI(apiKEY);

const getGeminiResponse = async (transcript) => {
  const prompt = `Você é um tradutor de línguas. Traduza o seguinte texto: ${transcript}
    para o seguinte idioma: ${selectedLanguage}`;

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  textArea.value += text;
};

export default getGeminiResponse;
