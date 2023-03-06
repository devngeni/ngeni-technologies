import {
  DevsContainer,
  WhatBody,
  WhatCard,
  WhatContainer,
  WhatGrid,
  WhatHeader,
  WhatImage,
  WhatText,
  WhatTitle,
  WhatWrapper,
} from "./Engineering.Styles";
import Asana from "../../public/Asana.svg";
import Abstract from "../../public/Abstract.svg";
import Adobe from "../../public/Adobe.svg";
import Airtable from "../../public/Airtable.svg";
import Logitech from "../../public/Logitech.svg";
import Image from "next/image";
import Globe from "../../public/Globe.svg";
import Stream from "../../public/Stream.svg";
import Cloud from "../../public/Cloud.svg";
import Dns from "../../public/Dns.svg";
import Terminal from "../../public/Terminal.svg";
import Contacts from "../../public/Contacts.svg";
export default function WhatWeDoSection() {
  const images = [
    {
      image: Asana,
      alt: "Asana",
    },
    {
      image: Abstract,
      alt: "Abstract",
    },
    {
      image: Adobe,
      alt: "Adobe",
    },
    {
      image: Airtable,
      alt: "Airtable",
    },
    {
      image: Logitech,
      alt: "Logitech",
    },
  ];

  const whatWeDo = [
    {
      title: "Blockchain Development",
      text: "We build custom blockchain solutions for your business.",
      image: Globe,
    },
    {
      title: "Web3 Development",
      text: "We build custom blockchain solutions for your business.",
      image: Stream,
    },
    {
      title: "Fintech Development",
      text: "We build custom blockchain solutions for your business.",
      image: Cloud,
    },
    {
      title: "Design Development",
      text: "We build custom blockchain Designs for your business Website.",
      image: Dns,
    },
    {
      title: "Item 5",
      text: "Next-gen Web 3, Blockchain & Fintech Engineering Studio.",
      image: Terminal,
    },
    {
      title: "Item 6",
      text: "Next-gen Web 3, Blockchain & Fintech Engineering Studio.",
      image: Contacts,
    },
  ];
  return (
    <WhatWrapper>
      <WhatContainer>
        {images.map((image, index) => (
          <WhatBody key={index}>
            <Image src={image.image} alt={image.alt} />
          </WhatBody>
        ))}
      </WhatContainer>
      <DevsContainer>
        <WhatTitle>What We Do</WhatTitle>
        <WhatGrid>
          {whatWeDo.map((item, index) => (
            <WhatCard key={index}>
              <WhatImage>
                <Image src={item.image} alt={item.title} />
              </WhatImage>
              <WhatHeader>{item.title}</WhatHeader>
              <WhatText>{item.text}</WhatText>
            </WhatCard>
          ))}
        </WhatGrid>
      </DevsContainer>
    </WhatWrapper>
  );
}
