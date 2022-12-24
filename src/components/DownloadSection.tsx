import { styled } from "@stitches/react";
import { Downloader } from "./Downloader";

export const DownloadSection = () => {
  return (
    <Section>
      <Downloader />
    </Section>
  );
};

const Section = styled("section", {
  padding: "$xxl $l $l",
});

