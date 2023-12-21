import React from 'react';
import s from './Main.module.scss';
import { Expertise, Header, Solutions } from 'components/landing/pages/main';

const Main: React.FC = () => {
  return (
    <div className={s.Main}>
      <Header />
      <Expertise />
      <Solutions />
    </div>
  );
};

export default Main;
