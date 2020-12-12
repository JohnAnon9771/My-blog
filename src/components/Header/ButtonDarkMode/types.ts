export interface TypesProperties {
  dark: {
    circle: {
      r: string;
    };
    mask: {
      cx: string;
      cy: string;
    };
    svg: {
      transform: string;
    };
    lines: {
      opacity: string;
    };
  };
  light: {
    circle: {
      r: string;
    };
    mask: {
      cx: string;
      cy: string;
    };
    svg: {
      transform: string;
    };
    lines: {
      opacity: string;
    };
  };
  springConfig: { mass: string; tension: string; friction: string };
}

type SVGProps = Omit<React.HTMLAttributes<HTMLOrSVGElement>, 'setColorMode'>;
export interface ButtonDarkModeProps extends SVGProps {
  style?: React.CSSProperties;
  size?: number;
  animationProperties?: TypesProperties;
}
