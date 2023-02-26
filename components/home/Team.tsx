import Image from "next/image";
import {
  CardIcon,
  CardText,
  ServiceContainer,
  ServiceText,
  TeamCard,
  TeamLink,
  TeamName,
} from "./Service.Styles";
import { data } from "./TeamData";
import Twitter from "../../public/Twitter.svg";
import LinkedIn from "../../public/LinkedIn.svg";

export function TeamSection() {
  return (
    <ServiceContainer>
      {data.map((item: any, index: any) => (
        <TeamCard key={index}>
          <Image src={item.image} width={80} height={80} alt={item.name} />
          <TeamName>{item.name}</TeamName>
          <ServiceText>{item.title}</ServiceText>
          <CardText style={{ textAlign: "center", display: "flex" }}>
            {item.description}
          </CardText>
          <CardIcon>
            <TeamLink href={item.twitter} target="_blank" rel="noreferrer">
              <Image src={Twitter} width={24} height={24} alt="twitter icon" />
            </TeamLink>
            <TeamLink href={item.linkedin} target="_blank" rel="noreferrer">
              <Image
                src={LinkedIn}
                width={24}
                height={24}
                alt="linkedin icon"
              />
            </TeamLink>
          </CardIcon>
        </TeamCard>
      ))}
    </ServiceContainer>
  );
}
