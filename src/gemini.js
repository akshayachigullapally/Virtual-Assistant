import { GoogleGenerativeAI } from "@google/generative-ai";

const api_Key="AIzaSyD1qSJlUGy6DQY4XksAFn4t6cHKtuxyrAA"

const genAI = new GoogleGenerativeAI(api_Key);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash", // Updated to 1.5 Flash
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 40,
//   maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chatSession.sendMessage(prompt);
//   const candidates = result.response.candidates;

//   for (let candidate of candidates) {
//     for (let part of candidate.content.parts) {
//       if (part.inlineData) {
//         try {
//           const blob = new Blob([Uint8Array.from(atob(part.inlineData.data), c => c.charCodeAt(0))], {
//             type: part.inlineData.mimeType,
//           });

//           const link = document.createElement("a");
//           link.href = URL.createObjectURL(blob);
//           link.download = `output.${part.inlineData.mimeType.split("/")[1]}`;
//           document.body.appendChild(link);
//           link.click();
//           document.body.removeChild(link);
//         } catch (err) {
//           console.error(err);
//         }
//       }
//     }
//   }

   return result.response.text();
}

export default run;