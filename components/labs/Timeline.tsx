import Image from "next/image";
import {
  RightHeader,
  RightP,
  Text,
  TimeContainer,
  TimeGrid,
  TimeImage,
  TimeImageWrapper,
  Timeline,
  TimeLineCircle,
  TimelineGrid,
  TimelineLeftGrid,
  TimelineP,
  TimelineRightGrid,
  TimeLineRightHeader,
  TimelineText,
  TimeLineTitle,
  TimelineWrapper,
  Container,
  StyledDiv1,
  StyledDiv2,
  StyledDiv3,
  StyledDiv4,
  fadeIn,
  fadeOut,
  FADE_IN_ANIMATION_NAME,
  StyledDiv5,
} from "./Timeline.Style";
import Vector from "../../public/Vector.svg";
import Curve from "../../public/Curve.svg";
import { useEffect, useState } from "react";

export default function TimelineSection() {
  const [showDivs, setShowDivs] = useState(false);

  const handleAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) => {
    if (e.animationName === FADE_IN_ANIMATION_NAME) {
      const styledDivs = document.querySelectorAll(".TimeGrid");
      const allAreVisible = Array.from(styledDivs).every(
        (div: any) => div.style.opacity === "1"
      );
      if (allAreVisible) {
        styledDivs.forEach((div: any) => {
          div.style.animationName = fadeOut;
          div.style.animationDelay = "4s";
          div.style.animationPlayState = "running";
        });
      }
    }
  };

  useEffect(() => {
    setShowDivs(true);
  }, []);
  return (
    <TimelineWrapper>
      <TimelineGrid>
        <TimelineLeftGrid>
          <TimeContainer>
            <TimelineText>Development Timeline</TimelineText>
            <TimeImage>
                <Image src={Curve} alt="curve-text" />
            </TimeImage>
          </TimeContainer>
          <TimeLineRightHeader>
            <TimeLineTitle>
              Engineering
              <br /> World-class
              <br /> Products start to completion
            </TimeLineTitle>
            <TimelineP>Start To Completion</TimelineP>
          </TimeLineRightHeader>
        </TimelineLeftGrid>
        <TimeLineCircle>
          <StyledDiv1 onAnimationEnd={handleAnimationEnd} className="TimeGrid">
            <TimelineRightGrid>
              <Timeline>
                <Text>1</Text>
              </Timeline>
              <TimeImageWrapper>
                <Image src={Vector} width={100} height={100} alt="lines" />
              </TimeImageWrapper>
            </TimelineRightGrid>
            <TimelineRightGrid>
              <RightHeader>Ideation & Evaluation</RightHeader>
              <RightP>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                est purus eu tempor tincidunt commodo.
              </RightP>
            </TimelineRightGrid>
          </StyledDiv1>

          <StyledDiv2 onAnimationEnd={handleAnimationEnd} className="TimeGrid">
            <TimelineRightGrid>
              <Timeline>
                <Text>2</Text>
              </Timeline>
              <TimeImageWrapper>
                <Image src={Vector} alt="lines" />
              </TimeImageWrapper>
            </TimelineRightGrid>
            <TimelineRightGrid>
              <RightHeader>Product Design</RightHeader>
              <RightP>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                est purus eu tempor tincidunt commodo.
              </RightP>
            </TimelineRightGrid>
          </StyledDiv2>

          <StyledDiv3 onAnimationEnd={handleAnimationEnd} className="TimeGrid">
            <TimelineRightGrid>
              <Timeline>
                <Text>3</Text>
              </Timeline>
              <TimeImageWrapper>
                <Image src={Vector} alt="lines" />
              </TimeImageWrapper>
            </TimelineRightGrid>
            <TimelineRightGrid>
              <RightHeader>Web, App and dApp Development</RightHeader>
              <RightP>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                est purus eu tempor tincidunt commodo.
              </RightP>
            </TimelineRightGrid>
          </StyledDiv3>

          <StyledDiv4 onAnimationEnd={handleAnimationEnd} className="TimeGrid">
            <TimelineRightGrid>
              <Timeline>
                <Text>4</Text>
              </Timeline>
              <TimeImageWrapper>
                <Image src={Vector} alt="lines" />
              </TimeImageWrapper>
            </TimelineRightGrid>
            <TimelineRightGrid>
              <RightHeader>AI & Machine Learning</RightHeader>
              <RightP>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                est purus eu tempor tincidunt commodo.
              </RightP>
            </TimelineRightGrid>
          </StyledDiv4>

          <StyledDiv5 onAnimationEnd={handleAnimationEnd} className="TimeGrid">
            <TimelineRightGrid>
              <Timeline>
                <Text>5</Text>
              </Timeline>
            </TimelineRightGrid>
            <TimelineRightGrid>
              <RightHeader>Support & Management</RightHeader>
              <RightP>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                est purus eu tempor tincidunt commodo.
              </RightP>
            </TimelineRightGrid>
          </StyledDiv5>
        </TimeLineCircle>
      </TimelineGrid>
    </TimelineWrapper>
  );
}
