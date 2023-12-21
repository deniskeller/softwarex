import React from 'react';
import s from './Main.module.scss';
import {
  Achievements,
  Expertise,
  Header,
  Solutions,
  Technologies,
} from 'components/landing/pages/main';

const Main: React.FC = () => {
  return (
    <div className={s.Main}>
      <Header />
      <Expertise />
      <Solutions />
      <Achievements />
      <Technologies />
    </div>
  );
};

export default Main;
