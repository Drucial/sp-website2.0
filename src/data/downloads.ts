import { LinuxIcon } from "../svg/LinuxIcon";
import { WindowsIcon } from "../svg/WindowsIcon";
import { AppleIcon } from "../svg/AppleIcon";

export const downloadLinks = [
  {
    os: "Mac",
    version: "M1",
    link: "https://releases.stashpad.com/download/mac_arm64",
    icon: AppleIcon,
  },
  {
    os: "Mac",
    version: "Intel",
    link: "https://releases.stashpad.com/download/mac",
    icon: AppleIcon,
  },
  {
    os: "iOS",
    version: "",
    link: "", //This need updating once appstore link is available
    icon: AppleIcon,
  },
  {
    os: "Windows",
    version: "",
    link: "https://releases.stashpad.com/download/win",
    icon: WindowsIcon,
  },
  {
    os: "Linux",
    version: "",
    link: "https://releases.stashpad.com/download/appimage",
    icon: LinuxIcon,
  },
];
