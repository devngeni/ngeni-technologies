import Image from "next/image";
import {
  RightHeader,
  RightP,
  Text,
  TimeContainer,
  TimeGrid,
  TimeImage,
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
} from "./Timeline.Style";
import Vector from "../../public/Vector.svg";
import Curve from "../../public/Curve.svg";

export default function TimelineSection() {
  return (
    <TimelineWrapper>
      <TimelineGrid>
        <TimelineLeftGrid>
          <TimeContainer>
            <TimelineText>Development Timeline</TimelineText>
            <TimeImage>
              <Image src={Curve} width={161} height={161} alt="curve-text" />
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
          <TimeGrid>
            <TimelineRightGrid>
              <Timeline>
                <Text>1</Text>
              </Timeline>
              <TimeImage>
                <Image src={Vector} width={100} height={100} alt="lines" />
              </TimeImage>
            </TimelineRightGrid>
            <TimelineRightGrid>
              <RightHeader>Ideation & Evaluation</RightHeader>
              <RightP>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                est purus eu tempor tincidunt commodo.
              </RightP>
            </TimelineRightGrid>
          </TimeGrid>

          <TimeGrid>
            <TimelineRightGrid>
              <Timeline>
                <Text>2</Text>
              </Timeline>
              <TimeImage>
                <Image src={Vector} width={100} height={100} alt="lines" />
              </TimeImage>
            </TimelineRightGrid>
            <TimelineRightGrid>
              <RightHeader>Ideation & Evaluation</RightHeader>
              <RightP>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                est purus eu tempor tincidunt commodo.
              </RightP>
            </TimelineRightGrid>
          </TimeGrid>

          <TimeGrid>
            <TimelineRightGrid>
              <Timeline>
                <Text>3</Text>
              </Timeline>
              <TimeImage>
                <Image src={Vector} width={100} height={100} alt="lines" />
              </TimeImage>
            </TimelineRightGrid>
            <TimelineRightGrid>
              <RightHeader>Ideation & Evaluation</RightHeader>
              <RightP>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                est purus eu tempor tincidunt commodo.
              </RightP>
            </TimelineRightGrid>
          </TimeGrid>

          <TimeGrid>
            <TimelineRightGrid>
              <Timeline>
                <Text>4</Text>
              </Timeline>
            </TimelineRightGrid>
            <TimelineRightGrid>
              <RightHeader>Ideation & Evaluation</RightHeader>
              <RightP>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                est purus eu tempor tincidunt commodo.
              </RightP>
            </TimelineRightGrid>
          </TimeGrid>
        </TimeLineCircle>
      </TimelineGrid>
    </TimelineWrapper>
  );
}
