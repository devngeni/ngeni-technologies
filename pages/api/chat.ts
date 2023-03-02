import { NextApiRequest, NextApiResponse } from "next";
import { OpenAIApi } from "openai";
import { Configuration } from "openai/dist/configuration";
import { ChatMessage, ChatResponse } from "../../types";
export default async function chatHandler(
  req: NextApiRequest,
  res: NextApiResponse<ChatResponse>
) {
    console.log(process.env.OPENAI_API_KEY)
  try {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);
    const { text } = req.query as unknown as ChatMessage;
    const response: any = await openai.createCompletion({
      model: "gpt-3.5-turbo",
      prompt: text,
      max_tokens: 1,
      temperature: 0.7,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0.5,
      stop: ["\n"],
    });
    if (response?.data?.choices?.length === 0) {
      res.status(200).json({ text: "Internal Server Error" });
      return;
    }
    const message = response?.data?.choices[0].text.trim();
    console.log("this is the response", message)
    res.status(200).json({ text: message });
  } catch (error:any) {
    console.error("error data gpt:", error?.response?.data);
    res.status(500).json({ text: "Internal Server Error" });
  }
}
