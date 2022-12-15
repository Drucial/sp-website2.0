import { styled } from "@stitches/react";
import { theme } from "../../styles/stitches.config";
import { Code } from "../svg/Code";
import { Markdown } from "../svg/Markdown";
import { RocketShip } from "../svg/Rocketship";

export const Features = () => {
  return (
    <Section>
      <ShadowBox>
        <Title>Engineered to perfection</Title>
        <CardWrapper>
          <Icon>
            <RocketShip height={120} />
          </Icon>
          <CardContent>
            <h3>Ridiculously Fast Notes</h3>
            <ul>
              <li>Dedicated focus command</li>
              <li>Sub 100ms actions</li>
              <li>Sticky tiny mode</li>
            </ul>
          </CardContent>
        </CardWrapper>
        <CardWrapper css={{ justifySelf: 'end'}}>
          <CardContent>
            <h3>Capture comes first</h3>
            <ul style={{ textAlign: "right" }}>
              <li>Familiar markdown flavor</li>
              <li>Code syntax highlighting</li>
              <li>Default writing location</li>
            </ul>
          </CardContent>
          <Icon>
            <Markdown height={120} />
          </Icon>
        </CardWrapper>
        <CardWrapper>
          <Icon>
            <Code height={120} />
          </Icon>
          <CardContent>
            <h3>Totally customizable</h3>
            <ul>
              <li>Custom Keybindings</li>
              <li>Color theme</li>
              <li>API coming soon</li>
            </ul>
          </CardContent>
        </CardWrapper>
      </ShadowBox>
    </Section>
  );
};

const Section = styled("section", {
  padding: "$xxl $l",
  marginTop: '$xxxl',
});

const ShadowBox = styled("div", {
  display: 'grid',
  width: "100%",
  maxWidth: 800,
  padding: "$xxl",
  margin: "0 auto",
  borderRadius: "$radL",
  position: "relative",
  background: "$black",

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
  },
  "&::after": {
    content: "",
    position: "absolute",
    top: -2,
    bottom: -2,
    left: -2,
    right: -2,
    boxShadow: `0px 0px 100px ${theme.colors.primary100}`,
    opacity: 0.3,
  },
});

const Title = styled("h2", {
  textAlign: "center",
  position: "absolute",
  top: -28,
  left: 20,
  zIndex: 2,
  "&::before": {
    content: "",
    position: "absolute",
    top: "50%",
    left: -8,
    right: -8,
    height: 4,
    zIndex: -1,
    background: "$black",
  },
});

const CardWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
});

const Icon = styled("div", {
  padding: "$l",
});

const CardContent = styled("div", {
  padding: "$l",

  "& h3": {
    fontWeight: '$300'
  },

  "& ul": {
    fontSize: "$medium",
    fontWeight: '$200',
    color: "$light100",
    margin: "$s 0",
  },

  "& li + li": {
    marginTop: "$s",
  },
});
