import React from 'react';
import s from './Header.module.scss';
import { BaseContainer, BaseText } from '@base/index';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <section className={s.Header}>
      <div className={s.Header_Background}></div>
      <BaseContainer className={s.Header_Container}>
        <BaseText className={s.Header_Title}>
          Industry-specific solutions
        </BaseText>

        <BaseText className={s.Header_Subtitle} as="p">
          To give a sense of our scale, here is a partial list of industries we
          cover.
        </BaseText>

        <Image
          src="/pictures/images/industries/industries-header.png"
          width={905}
          height={779}
          alt=""
          priority
          quality={100}
          className={`${s.Header_Image} ${s.Header_Image__Desktop}`}
        />

        <Image
          src="/pictures/images/industries/industries-header-mobile.png"
          width={560}
          height={481}
          alt=""
          priority
          quality={100}
          className={`${s.Header_Image} ${s.Header_Image__Mobile}`}
        />
      </BaseContainer>
    </section>
  );
};

export default Header;
