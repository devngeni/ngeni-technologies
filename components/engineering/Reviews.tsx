import {
  ArrowButton,
  CardContainer,
  CardText,
  CardWrapper,
  Dot,
  DotsContainer,
  ReviewCard,
  ReviewDate,
  ReviewFooter,
  ReviewHeader,
  ReviewImage,
  ReviewName,
  ReviewSlider,
  ReviewText,
  ReviewWrapper,
  Title,
} from "./Cards.Styles";
import Rating from "../../public/Rating.svg";
import Icon from "../../public/Icon.svg";
import Slider from "react-slick";
import Image from "next/image";
import { useRef, useState } from "react";
export default function ReviewsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);
  const carouselData = [
    {
      name: "Kelvin Pratt",
      title: "CTO, Razor Inc",
      text: "This software has transformed my business. It's intuitive, user-friendly, and has increased efficiency tenfold. Thank you for developing such a game-changing product!",
      date: "9th June, 2022",
      image: Rating,
      icon: Icon,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index: any) => setCurrentSlide(index),
  };
  const handleArrowClick = (direction: any) => {
    if (sliderRef.current) {
      if (direction === "left") {
        sliderRef.current.slickPrev();
      } else {
        sliderRef.current.slickNext();
      }
    }
  };
  const handleDotClick = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };
  return (
    <CardWrapper>
      <CardContainer>
        <Title>Reviews from clients</Title>
        <CardText style={{ color: "#fff" }}>
          We boast of a team of dedicated web3 developers whose work continues
          to make impact globally
        </CardText>
        {/* <Slider ref={sliderRef} {...settings}> */}
        <ReviewSlider>
          {carouselData.map((item, index) => (
            <ReviewCard key={index}>
              <ReviewHeader>
                <ReviewImage>
                  <Image src={item.icon} alt="Rating" />
                </ReviewImage>
                <ReviewWrapper>
                  <ReviewName>{item.name}</ReviewName>
                  <CardText>{item.title}</CardText>
                </ReviewWrapper>
              </ReviewHeader>
              <ReviewText>{item.text}</ReviewText>
              <ReviewFooter>
                <ReviewDate>{item.date}</ReviewDate>
                <ReviewImage>
                  <Image src={item.image} alt="Rating" />
                </ReviewImage>
              </ReviewFooter>
            </ReviewCard>
          ))}
        </ReviewSlider>
        {/* </Slider> */}
        {/* <ArrowButton direction="left" onClick={() => handleArrowClick("left")}>
          &#60;
        </ArrowButton>
        <ArrowButton
          direction="right"
          onClick={() => handleArrowClick("right")}
        >
          &#62;
        </ArrowButton> */}
        <DotsContainer>
          {carouselData.map((slide, index) => (
            <Dot
              key={index}
              isActive={index === currentSlide}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </DotsContainer>
      </CardContainer>
    </CardWrapper>
  );
}
