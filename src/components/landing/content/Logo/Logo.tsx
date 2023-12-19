import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import Link from 'next/link';
import React from 'react';
import s from './Logo.module.scss';

interface Props {
  className?: string;
}

const Logo: React.FC<Props> = ({ className = '' }) => {
  return (
    <BaseIcon
      viewBox="0 0 71 39"
      icon={ALL_ICONS.LOGO}
      className={`${s.Logo} ${className}`}
    />
  );
};

export default Logo;
