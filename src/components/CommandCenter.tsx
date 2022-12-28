import { styled } from "@stitches/react";
import { theme } from "../../styles/stitches.config";
import { actions } from "../data/actions";

export const CommandCenter = () => {
  return (
    <OuterWrapper>
      <Wrapper>
        <SearchWrapper>
          <Search placeholder="Type a command..." />
        </SearchWrapper>
        <ActionList>
          {actions.map((item, i) => (
            <ActionItem key={i}>
              {item.text}
              <ShortcutWrapper>
                {item.keys.map((key, index) => (
                  <Shortcut key={index}>{key}</Shortcut>
                ))}
              </ShortcutWrapper>
            </ActionItem>
          ))}
        </ActionList>
      </Wrapper>
      <Mask />
    </OuterWrapper>
  );
};
const OuterWrapper = styled("div", {
  width: "90%",
  maxWidth: 575,
  height: "80%",
  maxHeight: 375,
  margin: "$xxxl auto",
  position: "relative",
  display: 'flex',

  "&::before": {
    content: "",
    position: "absolute",
    top: -2,
    bottom: -2,
    left: -2,
    right: -2,
    zIndex: -1,
    borderRadius: 10,
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
    borderRadius: 10,
    opacity: 0.4,
  },
});
const Wrapper = styled("div", {
  width: "100%",
  display: 'grid',

  background: "hsla(205, 17%, 18%, 0.8)",
  backdropFilter: "blur(4px)",
  border: "1px solid hsla(200, 16%, 12%, 1)",
  borderRadius: 8,
  position: 'relative',
  zIndex: 1,
});

const Mask = styled("div", {
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: "$black",
  borderRadius: 10,
  zIndex: 0,
});

const SearchWrapper = styled("div", {
  padding: "0 17px",
  margin: 4,
  height: 56,
  display: "flex",
  alignItems: "center",
  borderBottom: "1px solid hsla(0, 0%, 100%, 0.1)",
});
const Search = styled("input", {
  width: "100%",
  background: "none",
  border: "none",
  color: "$light200",
  fontSize: "$regular",

  "&:focus-visible": {
    outline: "none",
  },
});
const ActionList = styled("ul", {
  padding: 4,
  maxHeight: 302,
  overflowY: "overlay",
});

const ActionItem = styled("li", {
  display: "flex",
  justifyContent: "space-between",
  padding: '12px 13px 12px 12px',
  borderRadius: 4,
  cursor: "pointer",
  fontSize: '$small',

  "&:hover": {
    background: "hsla(210, 6%, 24%, 1)",
  },
});
const ShortcutWrapper = styled("div", {
  display: "flex",
});
const Shortcut = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 17,
  minWidth: 17,
  padding: "0 3px",
  marginLeft: 4,
  fontSize: 12,
  background: "hsla(234, 5%, 35%, 1)",
  borderRadius: 4,
});
