import { LinuxIcon } from "../svg/LinuxIcon";
import { WindowsIcon } from "../svg/WindowsIcon";
import { AppleIcon } from "./../svg/AppleIcon";

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

export const testimonials = [
  {
    name: "Chris",
    role: "Product at Algolia",
    photo: "/img/testimonials/chris.jpg",
    quote:
      "Stashpad is the tool I always wanted as developer, it works the way I think and slotted perfectly into my workflow.",
  },
  {
    name: "Fred",
    role: "Developer at WillowTree",
    photo: "/img/testimonials/fred.jpg",
    quote:
      "Stashpad is the best default place to catch things so that I can find them later. It's the tool I was missing.",
  },
  {
    name: "Jacqui",
    role: "Engineer at Atlassian",
    photo: "/img/testimonials/jacqui.jpg",
    quote:
      "I no longer think twice about how or where to jot down quick notes. Stashpad is fast, easy to use, and brings just enough order to organic thoughts and ideas.",
  },
  {
    name: "Scott",
    role: "VP at Cloudinary",
    photo: "/img/testimonials/schnaar.jpg",
    quote:
      "The key is the lightweight structure - it’s easy to get quick notes into Stashpad, but thankfully, they actually stay organized for later.",
  },
  {
    name: "Frikkie",
    role: "Tech Lead at Relive",
    photo: "/img/testimonials/frikkie.jpg",
    quote:
      "Stashpad helps me stay in flow. When I have a fleeting thought while I’m coding, I jot it down in Stashpad and continue coding.",
  },
  {
    name: "Shawn",
    role: "Software Engineer",
    photo: "/img/testimonials/shawn.png",
    quote:
      "Stashpad provides an unprecedented level of flexibility and simplicity that makes it part of my everyday workflow.",
  },
];

export const bios = [
  {
    name: "Cara Borenstein",
    role: "Co-founder, CEO",
    photo: "/img/bios/Cara.jpg",
    webp: "/img/bios/Cara.webp",
    past: "Engineering at Twilio. Techstars & Columbia Alum.",
  },
  {
    name: "Theo Marin",
    role: "Co-founder, CTO",
    photo: "/img/bios/Theo.jpg",
    webp: "/img/bios/Theo.webp",
    past: "Engineering at Nextdoor. Techstars & Columbia Alum.",
  },
  {
    name: "Eli Williamson",
    role: "Head of Design",
    photo: "/img/bios/Eli.jpg",
    webp: "/img/bios/Eli.webp",
    past: "Creative Director at Netlify. Owner at DUSK Digital.",
  },
  {
    name: "Chris Lawrence",
    role: "Engineering",
    photo: "/img/bios/Chris.jpg",
    webp: "/img/bios/Chris.webp",
    past: "Engineering at Levitate, Precision Lender, Citrix.",
  },
  {
    name: "Nick Beaulieu",
    role: "Engineering",
    photo: "/img/bios/Nick.jpg",
    webp: "/img/bios/Nick.webp",
    past: "Engineering at Levitate, Caterpillar.",
  },
  {
    name: "Drew White",
    role: "Developer Experience",
    photo: "/img/bios/Drew.jpg",
    webp: "/img/bios/Drew.webp",
    past: "Developer and Marketing Director at EMX, Dunstone.",
  },
  {
    name: "Luc Sanchez",
    role: "Engineering and Developer Experience",
    photo: "/img/bios/Luc.jpg",
    webp: "/img/bios/Luc.webp",
    past: "Engineering at Xfinity.",
  },
  {
    name: "Tristan Dyer",
    role: "Engineering",
    photo: "/img/bios/Tristan.jpg",
    webp: "/img/bios/Tristan.webp",
    past: "Civil Engineering PhD at NC State. Computer Science Postdoc at Brown University.",
  },
];

export const shortcutsArr = [
  {
    text: "Focus text box",
    keys: ["Space"],
    gif: "/img/gifs/focusTextbox.gif",
    vid: "/vid/focusTextbox.webm",
    length: 6440,
  },
  {
    text: "Navigate",
    keys: ["↑ / ↓"],
    gif: "/img/gifs/selectBytesArrows.gif",
    vid: "/vid/selectBytesArrows.webm",
    length: 5390,
  },
  {
    text: "Multi select",
    keys: ["⇧", "↑ / ↓"],
    gif: "/img/gifs/selectMultiple.gif",
    vid: "/vid/selectMultiple.webm",
    length: 3360,
  },
  {
    text: "Move locally",
    keys: ["⌘", "↑ / ↓"],
    gif: "/img/gifs/moveWithArrows.gif",
    vid: "/vid/moveWitHArrows.webm",
    length: 4340,
  },
  {
    text: "Color",
    keys: ["L"],
    gif: "/img/gifs/selectColors.gif",
    vid: "/vid/selectColors.webm",
    length: 6580,
  },
  {
    text: "Mark as done",
    keys: ["X"],
    gif: "/img/gifs/markAsDone.gif",
    vid: "/vid/markAsDone.webm",
    length: 6160,
  },
  {
    text: "Open tab",
    keys: ["⌘", "1,2,3..."],
    gif: "/img/gifs/openTab.gif",
    vid: "/vid/openTab.webm",
    length: 5320,
  },
];

export const pricingTiers = [
  {
    title: "Community",
    price: "Free forever",
    details: [
      "Secure local storage",
      "Unlimited desktop app usage",
      "Import and export",
      "Custom keybindings",
      "Custom themes",
    ],
    emoji: "🐟",
  },
  {
    title: "Sync",
    price: "$10/month",
    details: [
      "Community features",
      "+",
      "Sync unlimited devices",
      "Unlimited mobile app usage",
    ],
    emoji: "🥽",
  },
  {
    title: "Commercial",
    price: "$50/yr",
    details: [
      "Community features",
      "+",
      "Bulk licensing options",
      "Designated support",
    ],
    emoji: "🤿",
  },
];
