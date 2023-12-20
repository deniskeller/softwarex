import { useRouter } from 'next/router';
import React from 'react';
import s from './NotFound.module.scss';
import Image from 'next/image';
import { BaseContainer } from '@base/index';
import { ToMainPage } from '@content/landing/index';

const NotFound: React.FC = () => {
  const router = useRouter();

  return (
    <section className={s.NotFound}>
      <div className={s.Background}></div>

      <BaseContainer className={s.NotFound_Container}>
        <h1 className={s.NotFound_Title}>Hmmm...</h1>
        <p className={s.NotFound_Subtitle}>
          We couldn't find the page you were looking for
        </p>

        <Image
          src="/pictures/images/404/404-image.png"
          width={734}
          height={522}
          alt="404 image"
          className={s.NotFound_Image}
        />

        <ToMainPage className={s.NotFound_ToMainPage} />
      </BaseContainer>
    </section>
  );
};

export default NotFound;
