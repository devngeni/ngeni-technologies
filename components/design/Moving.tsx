import {
  MovingContainer,
  MovingHeader,
  MovingScroll,
  MovingTitle,
  MovingWrapper,
} from "./Moving.Styles";

export default function MovingSection() {
  return (
    <MovingWrapper className="moving-bg">
      <MovingContainer>
        <MovingScroll>
          <MovingHeader>IMMERSIVE EXPERIENCES</MovingHeader>
        </MovingScroll>
        <MovingScroll>
          <MovingTitle>FOR THE NEXT PHASE OF THE INTERNET</MovingTitle>
        </MovingScroll>
      </MovingContainer>
    </MovingWrapper>
  );
}
