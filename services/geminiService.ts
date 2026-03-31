
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getGeneratorRecommendation(query: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Sen bir jeneratör uzmanısın. Kullanıcı sana hangi jeneratörü seçmesi gerektiğini soruyor: "${query}". 
      Lütfen şunlara dikkat et:
      1. Ev tipi, ticari, hayvancılık, balıkçılık veya endüstriyel (Bursa sanayisi) olup olmadığını anla.
      2. KVA tahmini yap.
      3. Bursa Batı Jeneratör firmasının uzmanlığını vurgula.
      4. Yanıtı kısa, öz ve profesyonel Türkçe ile ver.`,
      config: {
        temperature: 0.7,
        maxOutputTokens: 300,
      }
    });
    return response.text || "Üzgünüm, şu an bir yanıt oluşturamıyorum.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Teknik bir sorun oluştu, lütfen daha sonra tekrar deneyin.";
  }
}
