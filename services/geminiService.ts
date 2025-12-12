import { GoogleGenAI } from "@google/genai";

declare const process: any;

// Initialize the API client.
// The API key is assumed to be in process.env.API_KEY
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateChatResponse = async (
  message: string,
  history: { role: string; text: string }[]
): Promise<string> => {
  if (!apiKey) {
    return "API Configuration Error: Missing API Key.";
  }

  try {
    const model = 'gemini-2.5-flash';
    const systemInstruction = `You are the "Simtope Connectivity Architect", an AI assistant on the Simtope website. 
    Simtope is a premium B2B distributor of eSIMs, Soldered SIMs (MFF2), plastic SIMs, and Satellite connectivity.
    Your goal is to help businesses choose the right connectivity hardware and network solutions.
    
    Guidelines:
    - Tone: Professional, technical, concise, authoritative yet helpful.
    - Audience: CTOs, Product Managers, Engineers.
    - If asked about "Soldered SIMs", mention durability and MFF2 form factor for industrial IoT.
    - If asked about "eSIM", highlight flexibility and remote provisioning.
    - If asked about "Satellite", emphasize global coverage for remote assets.
    - Keep responses under 100 words unless technical detail is requested.
    - Always steer the conversation towards booking a consultation or requesting a quote if the user seems interested.
    `;

    const contents = [
      ...history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      })),
      { role: 'user', parts: [{ text: message }] }
    ];

    const response = await ai.models.generateContent({
      model,
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "I apologize, but I couldn't generate a response at this time. Please contact our support team.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our systems are currently experiencing high traffic. Please try again later or contact sales directly.";
  }
};