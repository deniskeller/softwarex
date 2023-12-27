import React from 'react';
import s from './MoreInfo.module.scss';
import { BaseContainer, BaseText } from '@base/index';
import Image from 'next/image';

const MoreInfo: React.FC = () => {
  return (
    <section className={s.MoreInfo}>
      <BaseContainer className={s.MoreInfo_Container}>
        <BaseText className={s.MoreInfo_Title} as="h2">
          <span>Learn more about</span> how we do what we do
        </BaseText>

        <BaseText className={s.MoreInfo_Subtitle} as="p">
          In our work, we are guided by the main principle - based on the human
          needs of users. Each project employs a team of diverse specialists. We
          work together at all stages of the project from idea to
          implementation.
        </BaseText>

        <div className={s.MoreInfo_Content}>
          <div className={s.InfoItem}></div>
          <div className={s.InfoItem}></div>
          <div className={s.InfoItem}></div>
          <div className={s.InfoItem}></div>
          <div className={s.InfoItem}></div>
          <div className={s.InfoItem}></div>
          <div className={s.InfoItem}></div>
          <div className={s.InfoItem}></div>
          <div className={s.InfoItem}></div>
        </div>

        {/* <Image
          src="/pictures/images/industries/industries-header.png"
          width={905}
          height={779}
          alt=""
          priority
          quality={100}
          className={`${s.Header_Image} ${s.Header_Image__Desktop}`}
        /> */}
      </BaseContainer>
    </section>
  );
};

export default MoreInfo;
