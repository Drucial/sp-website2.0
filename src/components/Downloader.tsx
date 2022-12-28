import { styled } from "@stitches/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { IsMobileState } from "../../state/atoms";
import { PrimaryButton } from "../../styles/commonStyles";
import { downloadLinks } from "../data/downloads";

export const Downloader = () => {
  type Download = {
    os: string;
    version: string;
    link: string;
    icon: () => JSX.Element;
  };

  const router = useRouter();
  const isMobile = useRecoilValue(IsMobileState);
  const [primaryDownload, setPrimaryDownload] = useState<Download>(
    downloadLinks[0]
  );
  const [altDownloads, setAltDownloads] = useState<Download[]>([
    ...downloadLinks.slice(1),
  ]);
  const userOS = useRef<string>("");

  useEffect(() => {
    getOS();
    setDownloadLinks();
  }, []);

  const getOS = () => {
    const userAgent = window.navigator.userAgent;

    if (userAgent.includes("Mac")) userOS.current = "Mac";
    if (userAgent.includes("Mac") && /iPhone|iPad/gi.test(userAgent))
      userOS.current = "iOS";
    if (userAgent.includes("Windows")) userOS.current = "Windows";
    if (userAgent.includes("Linux")) userOS.current = "Linux";
    if (userAgent.includes("Linux") && /Android/.test(userAgent))
      userOS.current = "Android";
  };

  const setDownloadLinks = () => {
    const altDownloadsArr: Download[] = [];
    let primaryDL;

    downloadLinks.forEach((item) => {
      if (userOS.current.indexOf(item.os) !== -1 && item.version !== "Intel") {
        primaryDL = item;
      } else {
        altDownloadsArr.push(item);
      }
    });

    if (!primaryDL) {
      primaryDL = altDownloadsArr.shift();
    }

    setPrimaryDownload(primaryDL || downloadLinks[0]);
    setAltDownloads(altDownloadsArr);
  };

  // const handleAnalyticsEvent = () => {
  //   // window.fathom.trackGoal("O2GUMWOC", 0)
  //   // analytics.track("Clicked Download", {
  //   // 	route: router.asPath,
  //   // })
  // };

  const handleDownload = (link: string) => {
    router.push(link);
  };

  const DownloadButton = () => {
    return (
      <PrimaryButton
        large
        onClick={() => {
          // handleAnalyticsEvent();
          handleDownload(primaryDownload.link);
        }}
      >
        {`Download for ${primaryDownload?.version} ${primaryDownload?.os}`}
      </PrimaryButton>
    );
  };

  const AltDownloads = () => {
    return (
      <AlternateDownloads>
        Also available for{" "}
        {altDownloads.map((item, i) => (
          <span key={i}>
            <Link href={item.link}>{`${item.version} ${item.os}`}</Link>
            {item.os === "Windows" ? ", and" : item.os === "Linux" ? "" : ", "}
          </span>
        ))}
        {isMobile ? ". Android coming soon!" : "."}
      </AlternateDownloads>
    );
  };

  return (
    <DownloadWrapper>
      <MainDownload>
        <DownloadButton />
      </MainDownload>
      <AltDownloads />
    </DownloadWrapper>
  );
};

const DownloadWrapper = styled("div", {
  display: "grid",
  justifyItems: "center",
  gap: "$l",
});
const MainDownload = styled("div", {});
const AlternateDownloads = styled("p", {
  textAlign: "center",
  color: "$light100",
});
