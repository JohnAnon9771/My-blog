// import { motion } from 'framer-motion';

import { Button } from './styles';

interface Props {
  colorMode: string;
}

export default function ButtonDarkMode({ colorMode }: Props): JSX.Element {
  return (
    <Button
      aria-label={`Activate ${colorMode} mode`}
      title={`Activate ${colorMode} mode`}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" className="svg_darkmode">
        <mask id="moon-mask-main-nav">
          <rect
            x="0"
            y="0"
            width="18"
            height="18"
            fill="var(--color-text-variant)"
          ></rect>
          <circle cx="25" cy="0" r="8" fill="black"></circle>
        </mask>
        <circle
          cx="9"
          cy="9"
          fill="var(--color-text-variant)"
          mask="url(#moon-mask-main-nav)"
          r="5"
        ></circle>
        <g>
          <circle
            cx="17"
            cy="9"
            r="1.5"
            fill="var(--color-text-variant)"
          ></circle>
          <circle
            cx="13"
            cy="15.928203230275509"
            r="1.5"
            fill="var(--color-text-variant)"
          ></circle>
          <circle
            cx="5.000000000000002"
            cy="15.92820323027551"
            r="1.5"
            fill="var(--color-text-variant)"
          ></circle>
          <circle
            cx="1"
            cy="9.000000000000002"
            r="1.5"
            fill="var(--color-text-variant)"
          ></circle>
          <circle
            cx="4.9999999999999964"
            cy="2.071796769724492"
            r="1.5"
            fill="var(--color-text-variant)"
          ></circle>
          <circle
            cx="13"
            cy="2.0717967697244912"
            r="1.5"
            fill="var(--color-text-variant)"
          ></circle>
        </g>
      </svg>
    </Button>
  );
}
