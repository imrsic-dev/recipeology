import React from 'react';
import Image from 'next/image';
import IconProps from './icon-types';

const Icon: React.FC<IconProps> = ({ name, width = 16, height = 16, alt }) => (
  <Image
    priority
    src={`/images/icons/${name}.svg`}
    height={height}
    width={width}
    alt={alt}
  />
);

export default Icon;
