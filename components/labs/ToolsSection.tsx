import { ToolsCard, ToolsGrid, ToolsTitle, ToolsWrapper } from "./Tools.Style";
import Mongo from "../../public/Mongo.svg";
import Elixr from "../../public/Elixr.svg";
import Rust from "../../public/Rust.svg";
import Solana from "../../public/Solana.svg";
import solidity from "../../public/Solidity.svg";
import Flutter from "../../public/Flutter.svg";
import Javascript from "../../public/Javascript.svg";
import Git from "../../public/Git.svg";
import Typescript from "../../public/Typescript.svg";
import Python from "../../public/Python.svg";
import Image from "next/image";
export default function ToolsSection() {
  const toolsData = [
    {
      image: Mongo,
    },
    {
      image: Elixr,
    },
    {
      image: Rust,
    },
    {
      image: Solana,
    },
    {
        image: solidity,
    },
    {
        image: Flutter,
    },
    {
        image: Javascript,
    },
    {
        image: Git,
    },
    {
        image: Typescript,
    },
    {
        image: Python,
    }
  ];
  return (
    <ToolsWrapper>
      <ToolsTitle>
        Some&nbsp;<span>Technologies</span>&nbsp;We Use
      </ToolsTitle>
      <ToolsGrid>
        {toolsData.map((tool, index) => (
          <ToolsCard key={index}>
            <Image src={tool.image} alt="Tool" />
          </ToolsCard>
        ))}
      </ToolsGrid>
    </ToolsWrapper>
  );
}
