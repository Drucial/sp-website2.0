import { styled } from "@stitches/react";
import { useRecoilValue } from "recoil";
import { ShowContactFormState } from "../../state/atoms";

export const ContactForm = () => {
  const showContact = useRecoilValue(ShowContactFormState);
  return (
    <ContactWrapper show={showContact}>
      <InputWrapper show={showContact}>
        <Input type="email" placeholder="Email address" />
        <SubmitBtn>Subscribe</SubmitBtn>
      </InputWrapper>
    </ContactWrapper>
  );
};

const ContactWrapper = styled("div", {
  height: 37,
  marginTop: 16,
  overflow: 'visible',
  transition: "$medium",
  variants: {
    show: {
      false: {
        height: 0,
        marginTop: 0,
      },
      true: {},
    },
  },
});

const InputWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "2px",
  background: "rgba(255,255,255,.5)",
  borderRadius: "6px",
  transition: "$medium",
  variants: {
    show: {
      false: {
        transform: "translateY(50%)",
        opacity: 0,
      },
    },
  },
});

const Input = styled("input", {
  border: "none",
  background: "none",
  padding: "$s $m",
  margin: "1px 4px 1px 1px",
  color: "$dark200",
  borderRadius: "$radS",
  minWidth: "200px",

  "&::placeholder": {
    color: "$black",
    opacity: 0.6,
  },
});

const SubmitBtn = styled("button", {
  padding: "$s $m",
  borderRadius: "$radS",
  border: "none",
  cursor: "pointer",
  background: "$black",
  "&:hover": {
    background: "$primary100",
  },
});
