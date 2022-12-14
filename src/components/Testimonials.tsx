import { styled } from "@stitches/react";
import { testimonials } from "../data/data";
import Image from "next/image";
import { relative } from "node:path/win32";

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
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  width: 200,
  background: "$glassGradientMiddle",
  margin: "$l",
  color: "$light100",
  padding: "$l $l $xxl",
  borderRadius: 4,
  backdropFilter: 'blur(4px)'
});
const Role = styled("div", {
  height: 40,
  textAlign: "center",
  margin: "$l 0",
  fontWeight: "$400",
});
const Name = styled("div", {
  position: "absolute",
  padding: "$m $l",
  background: "$primaryGradient",
  width: "80%",
  textAlign: "center",
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
    <FullWidthWrapper>
      {testimonials.map((item, index) => (
        <Card
          name={item.name}
          role={item.role}
          photo={item.photo}
          quote={item.quote}
          key={index}
        />
      ))}
    </FullWidthWrapper>
  );
};

const FullWidthWrapper = styled("div", {
  display: "flex",
  margin: "$xl 0",
});
