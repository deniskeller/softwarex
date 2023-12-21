import React from 'react';
import s from './Header.module.scss';
import { BaseButton, BaseContainer, BaseTitle } from '@base/index';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <section className={s.Header}>
      <BaseContainer className={s.Header_Container}>
        <BaseTitle className={s.Header_Title}>
          Custom software development & IT consulting services
        </BaseTitle>

        <BaseButton as="a" href="/" className={s.Header_GetAQuote}>
          Get a quote
        </BaseButton>

        <Image
          src="/pictures/images/engineers.png"
          width={1148}
          height={748}
          alt="Engineers"
          priority
          className={s.Header_Image}
        />
      </BaseContainer>
    </section>
  );
};

export default Header;
