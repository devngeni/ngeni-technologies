import {
  Button,
  Input,
  SubscribeContainer,
  SubscribeGrid,
  SubscribeText,
  SubscribeTitle,
  SubscribeWrapper,
} from "./Subcribe.Styles";

export default function SubscribeSection() {
  return (
    <SubscribeWrapper>
      <SubscribeContainer>
        <SubscribeGrid>
          <SubscribeTitle>
            Subscribe to our newsletter
            <br /> to get updates on our
            <br /> latest projects
          </SubscribeTitle>
          <SubscribeText>
            <Input type="text" placeholder="Enter your email address" />
            <Button>Subscribe</Button>
          </SubscribeText>
        </SubscribeGrid>
      </SubscribeContainer>
    </SubscribeWrapper>
  );
}

656025