import React from 'react';
import s from './Main.module.scss';
import { Expertise, Header } from 'components/landing/pages/main';

const Main: React.FC = () => {
  return (
    <div className={s.Main}>
      <Header />
      <Expertise />
    </div>
  );
};

export default Main;
