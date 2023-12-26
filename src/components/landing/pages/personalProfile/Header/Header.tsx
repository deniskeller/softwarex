import React from 'react';
import s from './Header.module.scss';
import { BaseContainer, BaseText } from '@base/index';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <section className={s.Header}>
      <div className={s.Header_Background}></div>
      <BaseContainer className={s.Header_Container}>
        <BaseText className={s.Header_Title}>Personal profile</BaseText>

        <BaseText className={s.Header_Subtitle} as="p">
          Dear Customer, welcome to your profile page. Here is your personal and
          orders data. In case some of your orders displayed incorrectly,
          please, contact our manager.
        </BaseText>

        <Image
          src="/pictures/images/personal-profile/personal-profile-header.png"
          width={905}
          height={779}
          alt=""
          priority
          quality={100}
          className={`${s.Header_Image} ${s.Header_Image__Desktop}`}
        />

        <Image
          src="/pictures/images/personal-profile/personal-profile-header-mobile.png"
          width={905}
          height={779}
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
