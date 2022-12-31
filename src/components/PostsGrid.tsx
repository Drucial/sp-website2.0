import { styled } from "@stitches/react";
import { Posts } from "../../typings";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";
import moment from "moment";
import { theme } from "../../styles/stitches.config";

function urlFor(source: {}) {
  return imageUrlBuilder(client).image(source);
}

type Props = {
  blogs: [Posts];
};

export const PostsGrid = ({ blogs }: Props) => {
  console.log(blogs[0]);
  return (
    <Section>
      <PostGrid>
        {blogs.map((blog, i) => {
          const image = urlFor(blog.mainImage)
            .height(400)
            .width(700)
            .fit("max")
            .auto("format")
            .url();

          return (
            <BlogCard key={i}>
              <Image
                alt={blog.title}
                src={image}
                width={700}
                height={350}
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
              <Bottom>
                <Category>{blog.category}</Category>
                <Title>{blog.title}</Title>
                <Preview>{blog.snippet}</Preview>
                <BottomLine>
                  <Author>{blog.name}</Author>
                  <BarSpan>|</BarSpan>
                  <Date>{moment(blog.publishedAt).format("LL")}</Date>
                </BottomLine>
              </Bottom>
              <Mask />
            </BlogCard>
          );
        })}
      </PostGrid>
    </Section>
  );
};

const Section = styled("section", {});
const PostGrid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "$xxxl",
  maxWidth: 1000,
  paddingTop: '$xxxl',
  margin: "$xxxl auto",
});

const BlogCard = styled("div", {
  marginBottom: 'auto',
  transition: "$medium",
  background: '$black',
  cursor: "pointer",
  position: "relative",

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
    transform: "scale(1.05)",
    "&::before": {
      opacity: 1,
    },
    "&::after": {
      opacity: 0.25,
    },
  },
});

const Mask = styled("div", {
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  top: 0,
  background: "$black",
  borderRadius: "$radL",
  zIndex: -1,
});

const Bottom = styled("div", {
  padding: '$l'
})
const Category = styled("p", {
  textTransform: "uppercase",
  marginTop: "$l",
  fontSize: '$smallest',
  opacity: .7,
});
const Title = styled("h2", {
  fontSize: '$h3',
  marginTop: "$s",
});
const Preview = styled("p", {
  marginTop: "$l",
  opacity: .7,
});
const BottomLine = styled("p", {
  marginTop: "$xxl",
  fontSize: '$smallest'
});
const Author = styled("span", {
  opacity: .7,
});
const BarSpan = styled("span", {
  marginLeft: "$s",
  opacity: .4,
});
const Date = styled("span", {
  marginLeft: "$s",
  opacity: .4,
});
