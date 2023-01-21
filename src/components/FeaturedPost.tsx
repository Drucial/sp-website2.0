import { styled } from "@stitches/react";
import client from "../../client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { Post } from "../../typings";
import moment from "moment";
import { theme } from "../../styles/stitches.config";

function urlFor(source: {}) {
  return imageUrlBuilder(client).image(source);
}

type Props = {
  blog: Post;
};

export const FeaturedPost = ({ blog }: Props) => {
  const image = urlFor(blog.mainImage)
    .height(750)
    .width(1350)
    .fit("max")
    .auto("format")
    .url();

  return (
    <Section>
      <Wrapper>
        <Left>
          <Image
            alt={blog.title}
            src={image}
            width={1350}
            height={750}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </Left>
        <Right>
          <Category>{blog.category}</Category>
          <Title>{blog.title}</Title>
          <Subtitle>{blog.subtitle}</Subtitle>

          <BottomLine>
            <Author>{blog.name}</Author>
            <BarSpan>|</BarSpan>
            <Date>{moment(blog.publishedAt).format("LL")}</Date>
          </BottomLine>
        </Right>
      </Wrapper>
    </Section>
  );
};

const Section = styled("section", {});
const Wrapper = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
  gap: "$xxl",
  transition: "$medium",
  background: "$black",
  cursor: "pointer",
  position: "relative",
  transform: "scale(.95)",

  "&::before": {
    content: "",
    position: "absolute",
    top: -2,
    bottom: -2,
    left: -2,
    right: -2,
    zIndex: -1,
    borderRadius: "$radL",
    background: "$primaryGradient",
    transition: "$medium",
    opacity: 0,
  },
  "&::after": {
    content: "",
    position: "absolute",
    top: -2,
    bottom: -2,
    left: -2,
    right: -2,
    boxShadow: `0px 0px 100px ${theme.colors.primary100}`,
    transition: "$medium",
    opacity: 0,
  },

  "&:hover": {
    transform: "scale(1)",
    "&::before": {
      opacity: 1,
    },
    "&::after": {
      opacity: 0.5,
    },
  },
});
const Left = styled("div", {});
const Right = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "$l",
});
const Category = styled("p", {
  textTransform: "uppercase",
  opacity: .6
});
const Title = styled("h2", {
  fontSize: "clamp($h2, 5vw, $extraLarge)",
  marginTop: "$xl",
});
const Subtitle = styled("h3", {
  fontSize: "clamp($h4, 3vw, $large)",
  marginTop: "$xl",
  opacity: 1
});
const BottomLine = styled("p", {
  marginTop: "$xl",
});
const Author = styled("span", {
  opacity: 0.6,
});
const BarSpan = styled("span", {
  marginLeft: "$s",
  opacity: 0.4,
});
const Date = styled("span", {
  marginLeft: "$s",
  opacity: 0.4,
});
