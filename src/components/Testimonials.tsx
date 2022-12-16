import { styled } from "@stitches/react";
import { testimonials } from "../data/data";
import Image from "next/image";

interface ICardProps {
  name: string;
  role: string;
  photo: string;
  quote: string;
}

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
  width: 350,
  height: 300,
  position: "relative",
  background: "$glassGradientMiddle",
  color: "$light100",
  padding: "$l $xxl $xxl",
  margin: '0 auto',
  borderRadius: 4,
  backdropFilter: "blur(4px)",
  transition: "250ms ease-in",

  transform: "scale(.9)",

  "&:hover": {
    transform: "scale(1)",
  },
});

const Role = styled("div", {
  textAlign: "center",
  fontSize: '$medium',
  margin: "$l 0",
  fontWeight: "$400",
});

const Name = styled("div", {
  position: "absolute",
  padding: "$m $l",
  background: "$primaryGradient",
  width: "80%",
  textAlign: "center",
  fontSize: '$medium',
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
  return (
    <Carousel>
        {testimonials.map((item, index) => (
          <Card
            name={item.name}
            role={item.role}
            photo={item.photo}
            quote={item.quote}
            key={index}
          />
        ))}
    </Carousel>
  );
};

const Carousel = styled("div", {
  display: 'flex',
  justifyContent: 'center',
  width: '100vw',
  height: 320,
  MsOverflowStyle: 'none',
  scrollbarWidth: 'none',
  scrollSnapType: 'x mandatory',
  overflowX: 'scroll',
  gap: '$l',
  margin: '$xl 0',

  '&::-webkit-scrollbar': {
    display: 'none',
  }
});
