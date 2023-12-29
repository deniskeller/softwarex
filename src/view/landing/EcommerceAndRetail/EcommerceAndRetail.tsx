import React from 'react';
import s from './EcommerceAndRetail.module.scss';
import {
  Bonuses,
  Elasticsearch,
  Header,
  Microservices,
  WhatIsHighload,
} from 'components/landing/pages/ecommerceAndRetail';

const EcommerceAndRetail: React.FC = () => {
  return (
    <div className={s.EcommerceAndRetail}>
      <Header />
      <WhatIsHighload />
      <Bonuses />
      <Microservices />
      <Elasticsearch />
    </div>
  );
};

export default EcommerceAndRetail;
