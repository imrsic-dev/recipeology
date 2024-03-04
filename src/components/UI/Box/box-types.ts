interface BoxProps {
  children?: React.ReactNode;
  $direction?: 'row' | 'column';
  $content?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  $items?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch';
  $gap?: string;
}

export default BoxProps;
