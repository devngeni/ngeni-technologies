import { ChatMessage, ChatResponse } from "@/types";
import { useState } from "react";
import { Button } from "../commons";
import { Input } from "../labs/Subcribe.Styles";
import { AiText } from "../navbar/Navbar.Styles";
import { AiBody, AiChart, AiChatCard, AiGrid, AiWrapper } from "./AI.Styles";
import axios from "axios";

export default function Chat() {
  const [messages, setMessages] = useState<(ChatMessage | ChatResponse)[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newMessages = [...messages, { text: inputValue }];
    setMessages(newMessages);
    setInputValue("");
    try {
      const response = await fetch(
        `/api/chat?text=${encodeURIComponent(inputValue)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      const data = await response.json();
      setMessages([...newMessages, data]);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <AiWrapper className="ai-bg">
      <AiBody>
        <form onSubmit={handleSubmit}>
          <AiGrid>
            <Input
              type="text"
              placeholder="Ask me anything"
              value={inputValue}
              onChange={handleInputChange}
              style={{ color: "#fff", border: "1px solid #fff" }}
            />
            <Button type="submit">Send</Button>
          </AiGrid>
        </form>
        <AiChatCard>
          <AiChart>
            {messages.map((message, index) => (
              <AiText key={index}>
                <p>{message.text}</p>
              </AiText>
            ))}
          </AiChart>
        </AiChatCard>
      </AiBody>
    </AiWrapper>
  );
}
