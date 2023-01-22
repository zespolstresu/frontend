import React from 'react';
import { Image } from './Avatar.styles';
import { IAvatar } from './Avatar.types';

const Avatar = ({src}: IAvatar): JSX.Element => (
  <Image src={src} alt="" />
);

export default Avatar;