import { styled } from "@stitches/react";
import { MAX_WIDTH } from "../../styles/constants";

type Title = {
  title: string;
  subtitle: string;
}

export const PageTitle = ({title, subtitle}: Title) => {
  return (
      <PageHeading>
        <MainTitle>
          <TitleSpan>{title}</TitleSpan>
          <BarSpan>|</BarSpan>
          <SubtitleSpan>{subtitle}</SubtitleSpan>
        </MainTitle>
      </PageHeading>
  );
};

const PageHeading = styled("div", {
  width: '100%',
  margin: '0 auto',
  padding: "$xxxl 0",
  display: "flex",
  maxWidth: MAX_WIDTH,
});

const MainTitle = styled('h1', {
  fontSize: 'clamp($small, 2vw, $large)',
  display: 'flex',
  alignItems: 'flex-end',
  gap: '$m'
})
const TitleSpan = styled('span', {
})
const BarSpan = styled('span', {
  fontWeight: '$2',
  opacity: .6,
})
const SubtitleSpan = styled('span', {
  fontWeight: '$2',
  opacity: .6,
})
