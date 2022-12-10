import { styled } from "@stitches/react";

export const ContactForm = () => {
  return (
    <ContactWrapper>
      <Input type='email' placeholder="Email address"/>
      <SubmitBtn>Subscribe</SubmitBtn>
    </ContactWrapper>
  )
};

const ContactWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  padding: '2px',
  background: '$dark200',
  borderRadius: '6px',
})

const Input = styled('input', {
  border: 'none',
  background: 'none',
  padding: '$s $m',
  margin: '1px 4px 1px 1px',
  color: '$light100',
  borderRadius: '$radS',
  minWidth: '200px',
})

const SubmitBtn = styled('button', {
  padding: '$s $m',
  borderRadius: '$radS',
  border: 'none',
  cursor: 'pointer',
  background: '$black',
  '&:hover': {
    background: '$primary100'
  }
})
