"use server";
import { OpenAI } from "@langchain/openai";

export const genratingQuiz = async () => {
  const llm = new OpenAI({});
  const response = await llm.invoke("Who is Prime Minister of India ?");
  console.log("Response: ", response);
  console.log("monu");
};
