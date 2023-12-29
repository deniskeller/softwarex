import React from 'react';
import s from './Header.module.scss';
import { BaseContainer, BaseText } from '@base/index';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <section className={s.Header}>
      <div className={s.Header_Background}></div>
      <BaseContainer className={s.Header_Container}>
        <BaseText className={s.Header_Title}>E - Commerce & Retail</BaseText>

        <BaseText className={s.Header_Subtitle} as="p">
          In addition to the usual flow of users, every online store or web
          service has particularly busy days. A classic example for e-commerce
          is Black Friday. We create projects that not only successfully cope
          with daily loads, but also easily scale to meet peak loads.
        </BaseText>

        <Image
          src="/pictures/images/industries/ecommerce-and-retail-1.png"
          width={811}
          height={724}
          alt=""
          priority
          quality={100}
          className={s.Header_Image}
        />
      </BaseContainer>
    </section>
  );
};

export default Header;
