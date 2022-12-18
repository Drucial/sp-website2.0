import { SvgGraphic } from "../SvgGraphic";
import { theme } from "../../styles/stitches.config";

type IProps = {
  height?: number;
};

export const Code = ({ height }: IProps) => {
  return (
    <SvgGraphic
      xmlns="http://www.w3.org/2000/svg"
      width={81}
      height={80}
      style={{ height: height }}
      fill="none"
      stroke="black"
      strokeWidth={2}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M53.476 14.3238C54.0229 12.9563 53.3578 11.4044 51.9904 10.8574C50.623 10.3105 49.0711 10.9756 48.5241 12.343L27.1907 65.6763C26.6438 67.0437 27.3089 68.5957 28.6763 69.1424C30.0438 69.6896 31.5956 69.0245 32.1426 67.6571L53.476 14.3238ZM20.8856 27.4478C21.9271 28.4892 21.9271 30.1776 20.8856 31.219L12.1046 40.0001L20.8856 48.7811C21.9271 49.8225 21.9271 51.5109 20.8856 52.5523C19.8442 53.5936 18.1558 53.5936 17.1144 52.5523L6.44775 41.8857C5.40633 40.8443 5.40633 39.1558 6.44775 38.1145L17.1144 27.4478C18.1558 26.4064 19.8442 26.4064 20.8856 27.4478ZM59.7808 27.4478C60.8224 26.4064 62.5109 26.4064 63.5525 27.4478L74.2192 38.1145C75.2603 39.1558 75.2603 40.8443 74.2192 41.8857L63.5525 52.5523C62.5109 53.5936 60.8224 53.5936 59.7808 52.5523C58.7398 51.5109 58.7398 49.8225 59.7808 48.7811L68.5621 40.0001L59.7808 31.219C58.7398 30.1776 58.7398 28.4892 59.7808 27.4478Z"
        fill="url(#paint0_linear_12_15966)"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_12_15966"
          x1="5.66669"
          y1="40"
          x2="85.7467"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={theme.colors.primary100}></stop>
          <stop offset="1" stop-color={theme.colors.primary200}></stop>
        </linearGradient>
      </defs>
    </SvgGraphic>
  );
};
