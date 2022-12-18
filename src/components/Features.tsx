import { styled } from "@stitches/react";
import { theme } from "../../styles/stitches.config";
import { Code } from "../svg/Code";
import { Capture } from "../svg/Capture";
import { RocketShip } from "../svg/Rocketship";
import { NarrowApp } from "../svg/NarrowApp";

export const Features = () => {
  return (
    <Section>
      <ShadowBox>
        <Title>Engineered to perfection</Title>
        <LeftSide>
          <CardWrapper>
            <Icon>
              <RocketShip height={96} />
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
          <CardWrapper >
            <Icon>
              <Capture height={96} />
            </Icon>
            <CardContent>
              <h3>Capture comes first</h3>
              <ul>
                <li>Familiar markdown flavor</li>
                <li>Code syntax highlighting</li>
                <li>Default writing location</li>
              </ul>
            </CardContent>
          </CardWrapper>
          <CardWrapper >
            <Icon>
              <Code height={96} />
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
        </LeftSide>
        <RightSide>
          <AppWrapper>
            <NarrowApp height={500}/>
          </AppWrapper>
        </RightSide>
      </ShadowBox>
    </Section>
  );
};

const Section = styled("section", {
  padding: "$xxl $l",
  marginTop: "$xxxl",
});

const ShadowBox = styled("div", {
  display: "grid",
  gridTemplateColumns: 'auto auto',
  gap: '$xl',
  justifyContent: "space-between",
  maxWidth: 1000,
  padding: "$xxl $xxxl",
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

const LeftSide = styled('div',{})

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
    fontWeight: "$300",
  },

  "& ul": {
    fontSize: "$medium",
    fontWeight: "$200",
    color: "$light100",
    margin: "$s 0",
  },

  "& li + li": {
    marginTop: "$s",
  },
});

const RightSide = styled('div',{
  padding: '$l'
})

const AppWrapper = styled('div', {
  position: 'relative',
  zIndex: 1,

  '&::before' : {
    content: "",
    position: "absolute",
    top: 1,
    bottom: 1,
    left: 1,
    right: 1,
    borderRadius: 10,
    // background: '$primaryGradient',
    boxShadow: `0px 0px 50px ${theme.colors.primary200}`,
    opacity:.15,
    zIndex: -1,
  },
})
