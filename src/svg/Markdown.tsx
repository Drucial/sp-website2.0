import { SvgGraphic } from "../SvgGraphic";
import { theme } from "../../styles/stitches.config";

type IProps = {
  height?: number;
};

export const Markdown = ({ height }: IProps) => {

  return (
    <SvgGraphic
      xmlns="http://www.w3.org/2000/svg"
      width={135}
      height={80}
      style={{ height: height }}
      fill="none"
    >
      <path
        d="M8.36581 9.90909H17.1954L37.9567 60.6193H38.6726L59.434 9.90909H68.2635V71H61.3431V24.5852H60.7465L41.6556 71H34.9738L15.8829 24.5852H15.2863V71H8.36581V9.90909Z"
        fill="url(#paint0_linear_12_15963)"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M91.8333 13.3334C91.8333 11.8606 93.0272 10.6667 94.5 10.6667H115.833C117.306 10.6667 118.5 11.8606 118.5 13.3334V26.6667H131.833C132.832 26.6667 133.747 27.2249 134.205 28.1131C134.662 29.0013 134.584 30.0705 134.003 30.8833L107.337 68.2166C106.836 68.9174 106.028 69.3334 105.167 69.3334C104.305 69.3334 103.497 68.9174 102.997 68.2166L76.3301 30.8833C75.7494 30.0705 75.6718 29.0013 76.1289 28.1131C76.5859 27.2249 77.5011 26.6667 78.5 26.6667H91.8333V13.3334ZM97.1666 16V29.3334C97.1666 30.8061 95.9727 32 94.5 32H83.6818L105.167 62.079L126.651 32H115.833C114.361 32 113.167 30.8061 113.167 29.3334V16H97.1666Z"
        fill="url(#paint0_linear_12_15963)"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_12_15963"
          x1="0.833313"
          y1="40"
          x2="87.4583"
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
