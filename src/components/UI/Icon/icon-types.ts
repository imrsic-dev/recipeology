interface IconProps {
  name: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export default IconProps;
