import React from 'react';
import s from './Industries.module.scss';
import { Header, MoreInfo } from 'components/landing/pages/industries';

const Industries: React.FC = () => {
  return (
    <div className={s.Industries}>
      <Header />
      <MoreInfo />
    </div>
  );
};

export default Industries;
