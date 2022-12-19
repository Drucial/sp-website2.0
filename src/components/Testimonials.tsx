import { styled } from "@stitches/react";
import { testimonials } from "../data/data";
import Image from "next/image";
import { MouseEvent, TouchEvent, useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { IsMobileState } from "../../state/atoms";
import { calcLength } from "framer-motion";

interface ICardProps {
  name: string;
  role: string;
  photo: string;
  quote: string;
}

const CARD_WIDTH = 350;
const CARD_HEIGHT = 300;

const Card = ({ name, role, photo, quote }: ICardProps) => {
  const isMobile = useRecoilValue(IsMobileState);
  return (
    <CardWrapper mobile={isMobile}>
      <Image
        src={photo}
        alt="Stashpad for Mac OS"
        width={100}
        height={100}
        style={{
          borderRadius: 50,
          boxShadow: "0px 0px 20px rgba(0,0,0,.5)",
          pointerEvents: "none",
        }}
      />
      <Role>{role}</Role>
      <Name>{name}</Name>
      <Quote>{quote}</Quote>
    </CardWrapper>
  );
};

const CardWrapper = styled("div", {
  flexShrink: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: CARD_WIDTH,
  height: CARD_HEIGHT,
  position: "relative",
  background: "$glassGradientMiddle",
  color: "$light100",
  padding: "$l $xxl $xxl",
  margin: "0 auto",
  borderRadius: 4,
  transition: "250ms ease-in",
  userSelect: "none",
  transform: "scale(.9)",

  "&:hover": {
    transform: "scale(1)",
  },
  variants: {
    mobile: {
      true: {
        width: CARD_WIDTH - 50,
        height: CARD_HEIGHT + 20,
      },
    },
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
  const shouldReverse = useRef(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const mouseDownAt = useRef<number>(0);
  const prevLocation = useRef<number>(0);
  const location = useRef<number>(0);

  const quoteLoop = [...testimonials, ...testimonials];
  // Needs Touch handlers & initial animation
  const handleOnDown = (e: MouseEvent) => (mouseDownAt.current = e.clientX);
  const handleOnUp = (e: MouseEvent) => {
    mouseDownAt.current = 0;
    prevLocation.current = location.current;
  };
  const handleOnMove = (e: MouseEvent) => {
    if (mouseDownAt.current === 0 || !sliderRef.current) return;

    const mouseDelta = mouseDownAt.current - e.clientX,
      maxDelta = sliderRef.current.clientWidth;

    const percentage = (mouseDelta / maxDelta) * -100,
      nextPercentageUnconstrained = prevLocation.current + percentage,
      nextPercentage = Math.max(
        Math.min(nextPercentageUnconstrained, 0),
        ((maxDelta - window.innerWidth) / maxDelta) * -100
      );

    location.current = nextPercentage;
    sliderRef.current.animate(
      {
        transform: `translateX(${nextPercentage}%)`,
      },
      { duration: 500, fill: "forwards" }
    );
  };

  const autoScroller = () => {
    if (!sliderRef.current) return;

    const sliderWidth = sliderRef.current.clientWidth,
      speed = 3,
      reverse = shouldReverse.current,
      maxTravel = ((sliderWidth - window.innerWidth) / sliderWidth) * -100;

    const moveOffset =
        sliderRef.current.clientWidth / (quoteLoop.length * speed),
      movePercentage = (moveOffset / sliderWidth) * -100,
      // Glitches a bit on the direction change. Why?
      nextPercentageUnconstrained = reverse
        ? prevLocation.current - movePercentage
        : prevLocation.current + movePercentage,
      nextPercentage = Math.max(
        Math.min(nextPercentageUnconstrained, 0),
        maxTravel
      );

    if (nextPercentageUnconstrained <= maxTravel) shouldReverse.current = true;
    if (nextPercentageUnconstrained >= 0) shouldReverse.current = false;
    console.log(nextPercentageUnconstrained);
    location.current = nextPercentage;
    prevLocation.current = location.current;

    sliderRef.current.animate(
      {
        transform: `translateX(${nextPercentage}%)`,
      },
      { duration: 1000, fill: "forwards" }
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      autoScroller();
    }, 1000);
    // should stop on hover
    // sliderRef.current?.addEventListener('mouseover', clearInterval(interval))
    return () => clearInterval(interval);
  });

  return (
    <Carousel>
      <Slider
        ref={sliderRef}
        onMouseDown={handleOnDown}
        onMouseMove={handleOnMove}
        onMouseUp={handleOnUp}
        onMouseLeave={handleOnUp}
      >
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
  cursor: "grab",
});
