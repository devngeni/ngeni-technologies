import {
  AboutContainer,
  AboutText,
  AboutTitle,
  AboutWrapper,
} from "./Design.Style";

export default function AboutSection() {
  return (
    <AboutWrapper>
      <AboutContainer>
        <AboutTitle>
          WE
          <br /> DESIGN <br />
          FOR <br />
          WEB3
        </AboutTitle>
        <AboutText>
          We use web3 design to solve problems. By creating a user-centered and<br />
          intuitive web experiences, our services enable seamless interaction
          with<br /> decentralized applications (dApps) and blockchain technologies.
          Our<br /> team is always ready to use the latest technologies to tackle
          today’s <br />most pressing issues in human computer interaction.
        </AboutText>
      </AboutContainer>
    </AboutWrapper>
  );
}
