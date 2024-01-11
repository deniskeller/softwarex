import React from 'react';
import s from './Main.module.scss';
import {
  Achievements,
  Expertise,
  Form,
  Header,
  HowWeWork,
  Solutions,
  Technologies,
} from 'components/landing/pages/main';

const Main: React.FC = () => {
  return (
    <div className={s.Main}>
      <Header />
      {/* <Expertise />
      <Solutions />
      <HowWeWork />
      <Achievements />
      <Technologies /> */}
      <Form />
    </div>
  );
};

export default Main;
