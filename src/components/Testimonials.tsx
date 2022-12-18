import { styled } from "@stitches/react";
import { testimonials } from "../data/data";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface ICardProps {
  name: string;
  role: string;
  photo: string;
  quote: string;
}

const CARD_WIDTH = 350;

const Card = ({ name, role, photo, quote }: ICardProps) => (
  <CardWrapper>
    <Image
      src={photo}
      alt="Stashpad for Mac OS"
      width={100}
      height={100}
      style={{ borderRadius: 50, boxShadow: "0px 0px 20px rgba(0,0,0,.5)" }}
    />
    <Role>{role}</Role>
    <Name>{name}</Name>
    <Quote>{quote}</Quote>
  </CardWrapper>
);

const CardWrapper = styled("div", {
  flexShrink: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: CARD_WIDTH,
  height: 300,
  position: "relative",
  background: "$glassGradientMiddle",
  color: "$light100",
  padding: "$l $xxl $xxl",
  margin: "0 auto",
  borderRadius: 4,
  backdropFilter: "blur(4px)",
  transition: "250ms ease-in",

  transform: "scale(.9)",

  "&:hover": {
    transform: "scale(1)",
  },
});

const Name = styled("div", {
  textAlign: "center",
  fontSize: "$medium",
  margin: "$l 0",
  fontWeight: "$400",
});

const Role = styled("div", {
  position: "absolute",
  padding: "$m $l",
  background: "$primaryGradient",
  width: "80%",
  textAlign: "center",
  fontSize: "$medium",
  color: "$light100",
  fontWeight: "$400",
  borderRadius: 4,
  bottom: -20,
  boxShadow: "0px 0px 20px rgba(0,0,0,.5)",
});

const Quote = styled("p", {
  fontWeight: "$200",
});

export const Testimonials = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const quoteLoop = [...testimonials, ...testimonials];

  // Start the slider in the middle

  // useEffect(() => {
  //   if (!carouselRef.current || !sliderRef.current) return
  //   setInitialSliderPosition(carouselRef.current, sliderRef.current)
  // },[])

  // const setInitialSliderPosition = (carousel: HTMLDivElement, slider: HTMLDivElement) => {
  //   const initialOffset = (slider.clientWidth / 2) - (carousel.clientWidth / 2)
  //   carousel.scrollTo(initialOffset, 0)
  // }
  useEffect(() => {
    if (!carouselRef.current) return;
    const track = carouselRef.current;

    track.onmousedown = (e) => {
      track.dataset.mouseDownAt = e.clientX.toString();
    };

    track.onmousemove = (e) => {
      const data:string = track.dataset.mouseDownAt
      const mouseDelta = parseFloat(data) - e.clientX,
        maxDelta = window.innerWidth / 2;

      const percentage = (mouseDelta / maxDelta) * 100;

      // sliderRef.current?.scrollTo({ left: mouseDelta, behavior: "smooth" });
    };
  });
  const handleScroll = () => {
    console.log(carouselRef.current);
  };

  return (
    <Carousel ref={carouselRef} onScroll={handleScroll} data-mouse-down-at={0}>
      <Slider ref={sliderRef}>
        {quoteLoop.map((item, index) => (
          <Card
            name={item.name}
            role={item.role}
            photo={item.photo}
            quote={item.quote}
            key={index}
          />
        ))}
      </Slider>
    </Carousel>
  );
};

const Carousel = styled("div", {
  maxWidth: "100%",
  height: 320,
  MsOverflowStyle: "none",
  scrollbarWidth: "none",
  overflowX: "scroll",
  gap: "$l",
  margin: "$xl 0",

  "&::-webkit-scrollbar": {
    display: "none",
  },
});

const Slider = styled("div", {
  display: "flex",
  justifyContent: "center",
  width: "max-content",
});
