import { keyframes, styled } from "@stitches/react";

export const Loading = () => {
  const boxes = [...Array(10)];
  console.log(boxes);
  return (
    <FullHeightSection>
      <Container>
        <Text>Loading...</Text>
        <Boxes>
          {boxes.map((i) => (
            <Box key={i} />
          ))}
        </Boxes>
      </Container>
    </FullHeightSection>
  );
};

const FullHeightSection = styled('section', {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const Container = styled("div", {
  width: 200,
  height: 200,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
});

const Pulse = keyframes({
  "0%": {
    transfom: "scale(1)",
  },
  "50%": {
    transform: "scale(1.1)",
  },
});

const Text = styled("h2", {
  fontSize: "$medium",
  animation: `${Pulse} 2s infinite ease-in-out`,
});

const Boxes = styled("div", {});

const Spin = keyframes({
  "0%": {
    transform: "rotate(0deg)",
    opacity: 1,
  },
  "80%": {
    transform: "rotate(-360deg)",
    opacity: 0,
  },
  "100%": {
    transform: "rotate(-360deg)",
    opacity: 1,
  },
});

const Stretch = keyframes({
  "0%": {
    transform: "translatex(-50%) scalex(0.5)",
  },
  "50%": {
    transform: "translatex(-50%) scalex(2)",
  },
  "80%": {
    transform: "translatex(-50%) scalex(0.5)",
  },
  "100%": {
    transform: "translatex(-50%) scalex(0.5)",
  },
});

const Box = styled("div", {
  position: "absolute",
  inset: 0,

  "&::before": {
    position: "absolute",
    content: "",
    width: 10,
    height: 10,
    borderRadius: 2,
    background: "$primary100",
    bottom: 0,
    left: "50%",
    transform: "translatex(-50%)",
  },

  "&:nth-child(1)": {
    animation: `${Spin} 2s infinite ease-in-out 0s`,
    "&::before": {
      animation: `${Stretch} 2s infinite 0s`,
    },
  },
  "&:nth-child(2)": {
    animation: `${Spin} 2s infinite ease-in-out 0.1s`,
    "&::before": {
      animation: `${Stretch} 2s infinite 0.1s`,
    },
  },
  "&:nth-child(3)": {
    animation: `${Spin} 2s infinite ease-in-out 0.2s`,
    "&::before": {
      animation: `${Stretch} 2s infinite 0.2s`,
    },
  },
  "&:nth-child(4)": {
    animation: `${Spin} 2s infinite ease-in-out 0.3s`,
    "&::before": {
      animation: `${Stretch} 2s infinite 0.3s`,
    },
  },
  "&:nth-child(5)": {
    animation: `${Spin} 2s infinite ease-in-out 0.4s`,
    "&::before": {
      animation: `${Stretch} 2s infinite 0.4s`,
    },
  },
  "&:nth-child(6)": {
    animation: `${Spin} 2s infinite ease-in-out 0.5s`,
    "&::before": {
      animation: `${Stretch} 2s infinite 0.5s`,
    },
  },
  "&:nth-child(7)": {
    animation: `${Spin} 2s infinite ease-in-out 0.6s`,
    "&::before": {
      animation: `${Stretch} 2s infinite 0.6s`,
    },
  },
  "&:nth-child(8)": {
    animation: `${Spin} 2s infinite ease-in-out 0.7s`,
    "&::before": {
      animation: `${Stretch} 2s infinite 0.7s`,
    },
  },
  "&:nth-child(9)": {
    animation: `${Spin} 2s infinite ease-in-out 0.8s`,
    "&::before": {
      animation: `${Stretch} 2s infinite 0.8s`,
    },
  },
  "&:nth-child(10)": {
    animation: `${Spin} 2s infinite ease-in-out 0.9s`,
    "&::before": {
      animation: `${Stretch} 2s infinite 0.9s`,
    },
  },
});
