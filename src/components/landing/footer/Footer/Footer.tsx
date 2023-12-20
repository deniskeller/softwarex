import React from 'react';
import s from './Footer.module.scss';
import { BaseContainer, BaseIcon } from '@base/index';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ALL_ICONS } from '@constants/icons';

interface Props {}

const Footer: React.FC<Props> = () => {
  const router = useRouter();

  return (
    <div className={s.Footer}>
      <BaseContainer className={s.Footer_Container}>
        <Link href={'/'} className={s.Footer_Logo}>
          <BaseIcon
            viewBox="0 0 71 39"
            icon={ALL_ICONS.LOGO}
            className={s.Icon}
          />
          <span className={s.Label}>Softwarex</span>
        </Link>

        <ul className={`${s.Footer_Navbar} ${s.Footer_Navbar__Desktop}`}>
          <li>
            <Link href={'/pay-invoice'} className={s.Link}>
              Pay invoice
            </Link>
          </li>

          <li>
            <Link href={'/about-and-contacts'} className={s.Link}>
              About&Contacts
            </Link>
          </li>

          <li>
            <Link href={'/cookies-policy'} className={s.Link}>
              Cookies Policy
            </Link>
          </li>

          <li>
            <Link href={'/industries'} className={s.Link}>
              Industries
            </Link>
          </li>

          <li>
            <Link href={'/privacy-policy'} className={s.Link}>
              Privacy Policy
            </Link>
          </li>

          <li>
            <Link href={'/terms-of-service'} className={s.Link}>
              Terms of Service
            </Link>
          </li>

          <li>
            <Link href={'/technologies'} className={s.Link}>
              Technologies
            </Link>
          </li>

          <li>
            <Link href={'/refund-policy'} className={s.Link}>
              Refund Policy
            </Link>
          </li>
        </ul>

        <ul className={`${s.Footer_Navbar} ${s.Footer_Navbar__Mobile}`}>
          <li>
            <Link href={'/pay-invoice'} className={s.Link}>
              Pay invoice
            </Link>
          </li>

          <li>
            <Link href={'/privacy-policy'} className={s.Link}>
              Privacy Policy
            </Link>
          </li>

          <li>
            <Link href={'/industries'} className={s.Link}>
              Industries
            </Link>
          </li>

          <li>
            <Link href={'/refund-policy'} className={s.Link}>
              Refund Policy
            </Link>
          </li>

          <li>
            <Link href={'/technologies'} className={s.Link}>
              Technologies
            </Link>
          </li>

          <li>
            <Link href={'/cookies-policy'} className={s.Link}>
              Cookies Policy
            </Link>
          </li>

          <li>
            <Link href={'/about-and-contacts'} className={s.Link}>
              About&Contacts
            </Link>
          </li>

          <li>
            <Link href={'/terms-of-service'} className={s.Link}>
              Terms of Service
            </Link>
          </li>
        </ul>

        <div className={s.Footer_Info}>
          <div className={s.Partners}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="69"
              height="21"
              viewBox="0 0 69 21"
              fill="none"
              className={s.Partners_Visa}
            >
              <g clipPath="url(#clip0_57_253)">
                <path
                  d="M44.3573 0.0273438C39.5338 0.0273438 35.2234 2.4053 35.2234 6.79875C35.2234 11.8372 42.8681 12.1852 42.8681 14.7164C42.8681 15.7822 41.584 16.7362 39.3908 16.7362C36.2783 16.7362 33.9519 15.4031 33.9519 15.4031L32.9565 19.8366C32.9565 19.8366 35.6364 20.9627 39.1944 20.9627C44.468 20.9627 48.6176 18.468 48.6176 13.9994C48.6176 8.67533 40.941 8.33767 40.941 5.9883C40.941 5.15342 41.9952 4.23865 44.1821 4.23865C46.6496 4.23865 48.6627 5.20815 48.6627 5.20815L49.6369 0.926159C49.6369 0.926159 47.4464 0.0273438 44.3573 0.0273438ZM0.227474 0.350514L0.11068 0.996852C0.11068 0.996852 2.13991 1.35009 3.96756 2.05473C6.32081 2.86273 6.48844 3.33311 6.88477 4.79409L11.2035 20.6294H16.9928L25.9117 0.350514H20.1356L14.4047 14.1382L12.0662 2.45111C11.8517 1.11353 10.7654 0.350514 9.43567 0.350514H0.227474ZM28.2343 0.350514L23.7032 20.6294H29.2111L33.7263 0.350514H28.2343ZM58.9539 0.350514C57.6258 0.350514 56.9221 1.02685 56.4057 2.20874L48.3362 20.6294H54.1123L55.2298 17.5593H62.2667L62.9462 20.6294H68.0427L63.5965 0.350514H58.9539ZM59.7051 5.82925L61.4172 13.4389H56.8304L59.7051 5.82925Z"
                  fill="#00549A"
                />
              </g>
              <defs>
                <clipPath id="clip0_57_253">
                  <rect
                    width="68"
                    height="21"
                    fill="white"
                    transform="translate(0.0742188)"
                  />
                </clipPath>
              </defs>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="28"
              viewBox="0 0 45 28"
              fill="none"
              className={s.Partners_MasterCard}
            >
              <g clipPath="url(#clip0_112_2087)">
                <path
                  d="M28.5878 24.4501H16.4185V3.36719H28.588L28.5878 24.4501Z"
                  fill="#FF5F00"
                />
                <path
                  d="M17.19 13.9083C17.19 9.6316 19.2672 5.82193 22.5018 3.36681C20.0534 1.50568 17.025 0.495573 13.907 0.500015C6.2262 0.500015 0 6.503 0 13.9083C0 21.3135 6.2262 27.3165 13.907 27.3165C17.0251 27.321 20.0535 26.3109 22.502 24.4497C19.2676 21.995 17.19 18.1851 17.19 13.9083Z"
                  fill="#EB001B"
                />
                <path
                  d="M45.0056 13.9083C45.0056 21.3135 38.7794 27.3165 31.0986 27.3165C27.9802 27.3209 24.9514 26.3108 22.5025 24.4497C25.738 21.9946 27.8152 18.1851 27.8152 13.9083C27.8152 9.63139 25.738 5.82193 22.5025 3.36681C24.9514 1.50573 27.98 0.495651 31.0984 0.500014C38.7792 0.500014 45.0054 6.503 45.0054 13.9083"
                  fill="#F79E1B"
                />
              </g>
              <defs>
                <clipPath id="clip0_112_2087">
                  <rect
                    width="45"
                    height="27"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className={s.Copyright}>
            <p>Copyright © 2023.&nbsp;</p>
            <p>English & Indian Software Exs LIMITED.&nbsp;</p>
            <p>All Rights Reserved.&nbsp;</p>
          </div>
        </div>
      </BaseContainer>
    </div>
  );
};

export default Footer;
