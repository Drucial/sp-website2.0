import Image from "next/image";
import { styled } from "@stitches/react";
import { useRecoilValue } from "recoil";
import { IsMobileState } from "../../../state/atoms";

export const HeroSection = () => {
  const isMobile = useRecoilValue(IsMobileState);
  return (
    <Section mobile={isMobile}>
      {isMobile ? (
        <Image
          alt="Stashpad for Mac OS"
          src="/img/home/phones.png"
          width={699}
          height={800}
          style={{
            display: "block",
            height: "clamp(390px, 80vw, 820px)",
            width: "auto",
            margin: "0 auto",
          }}
        />
      ) : (
        <Image
          priority
          alt="Stashpad for Mac OS"
          src="/img/home/macbook2.png"
          width={1300}
          height={933}
          style={{
            display: "block",
            height: "clamp(200px, 50vw, 820px)",
            width: "auto",
            margin: "0 auto",
          }}
        />
      )}
    </Section>
  );
};

const Section = styled("section", {
  position: "relative",
  variants: {
    mobile: {
      true: {
        marginTop: "$l",
      },
    },
  },
  "&::after": {
    content: "",
    position: "absolute",
    width: "15vw",
    height: "15vw",
    right: "25%",
    top: "20%",
    zIndex: -1,
    borderRadius: 150,
    boxShadow: "$bigPrimary",
    opacity: 0.5,
  },
  "&::before": {
    content: "",
    position: "absolute",
    width: "10vw",
    height: "10vw",
    left: "30%",
    bottom: "40%",
    zIndex: -1,
    borderRadius: 150,
    boxShadow: "$bigPrimary200",
    opacity: 0.5,
  },
});
