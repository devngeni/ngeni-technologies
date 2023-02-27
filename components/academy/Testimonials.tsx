import Image from "next/image";
import {
  CardText,
  TestimonialWrapper,
  TeamName,
  Testimonialcontainer,
} from "./Service.Styles";
import { hyphenatedData } from "./TeamData";
export default function TestimonialSection() {
  let mapData: any[] = [];
  const teamData = hyphenatedData[0];
  mapData.push(teamData);
  return (
    <Testimonialcontainer>
      {mapData.map((item: any, index: any) => (
        <TestimonialWrapper key={index}>
          <h1>{item.testimonial}</h1>
          <Image src={item.image} width={80} height={80} alt={item.name} />
          <TeamName>{item.name}</TeamName>
          <CardText style={{ textAlign: "center", display: "flex" }}>
            {item.description}
          </CardText>
        </TestimonialWrapper>
      ))}
    </Testimonialcontainer>
  );
}
