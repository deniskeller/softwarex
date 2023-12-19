import { useRouter } from 'next/router';
import React from 'react';
import s from './Landing.module.scss';
// import Footer from 'components/landing/Footer/Footer';
import { BaseToast } from '@base/index';
import { Header } from 'components/landing/header';

const pages = [
  {
    name: 'Pay invoice',
    href: '/pay-invoice',
  },
  {
    name: 'Industries',
    href: '/industries',
  },
  {
    name: 'Tecnologies',
    href: '/tecnologies',
  },
  {
    name: 'About & Contacts',
    href: '/about-and-contacts',
  },
  {
    name: 'Brief',
    href: '/brief',
  },
];

interface Props {
  children: JSX.Element;
  footer?: boolean;
  theme?: string;
}

const Landing: React.FC<Props> = ({
  children,
  footer = true,
  theme = 'dark',
}) => {
  const router = useRouter();

  return (
    <>
      <div className={s.Landing}>
        <Header pages={pages} theme={theme} />

        <div className={s.Content}>{children}</div>

        {/* {footer ? <Footer /> : null} */}
      </div>

      <BaseToast />
    </>
  );
};

export default Landing;
