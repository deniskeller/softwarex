import React from 'react';
import s from './MoreInfo.module.scss';
import { BaseContainer, BaseText } from '@base/index';
import Image from 'next/image';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const MoreInfo: React.FC = () => {
  const router = useRouter();
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

        {/* ДЕФОЛТНЫЙ */}
        <div className={`${s.MoreInfo_Content} ${s.MoreInfo_Content__Desktop}`}>
          <div className={s.Row}>
            <Link href={'/'} className={`${s.InfoItem} ${s.InfoItem__Big}`}>
              <div className={s.InfoItem_ImageContent}>
                <div className={s.Counter}>
                  <div className={s.Counter_Value}>1</div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="121"
                    height="122"
                    viewBox="0 0 121 122"
                    fill="none"
                    className={s.Counter_Shadow}
                  >
                    <g filter="url(#filter0_f_671_4160)">
                      <path
                        d="M108.517 5.80469L6.65234 108H109.84L108.517 5.80469Z"
                        fill="#413C7C"
                        fillOpacity="0.1"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_671_4160"
                        x="-16.3477"
                        y="-17.1953"
                        width="149.188"
                        height="148.195"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="11.5"
                          result="effect1_foregroundBlur_671_4160"
                        />
                      </filter>
                    </defs>
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 121 121"
                    fill="none"
                    className={s.Counter_Triangle}
                  >
                    <path
                      d="M126.633 0.351562L0.773438 126.619H128.267L126.633 0.351562Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <Image
                  src="/pictures/images/industries/industries-1.png"
                  width={389}
                  height={257}
                  alt=""
                  className={s.Image}
                />
              </div>

              <div className={s.InfoItem_TextContent}>
                <div className={s.Title}>
                  <h3>E-Commerce & Retail</h3>
                </div>
                <div className={s.Description}>
                  <p>
                    We create high-load projects that successfully survive Black
                    Fridays, seasonal sales and other events with millions of
                    visitors.
                  </p>
                </div>

                <div className={s.More}>
                  <span className={s.More_Label}>More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 17"
                    fill="none"
                    className={s.More_Icon}
                  >
                    <path
                      d="M6 3.51953L10.6667 8.1862L6 12.8529"
                      stroke="#1F1E58"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href={'/'} className={s.InfoItem}>
              <div className={s.InfoItem_ImageContent}>
                <div className={s.Counter}>
                  <div className={s.Counter_Value}>2</div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="121"
                    height="122"
                    viewBox="0 0 121 122"
                    fill="none"
                    className={s.Counter_Shadow}
                  >
                    <g filter="url(#filter0_f_671_4160)">
                      <path
                        d="M108.517 5.80469L6.65234 108H109.84L108.517 5.80469Z"
                        fill="#413C7C"
                        fillOpacity="0.1"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_671_4160"
                        x="-16.3477"
                        y="-17.1953"
                        width="149.188"
                        height="148.195"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="11.5"
                          result="effect1_foregroundBlur_671_4160"
                        />
                      </filter>
                    </defs>
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 121 121"
                    fill="none"
                    className={s.Counter_Triangle}
                  >
                    <path
                      d="M126.633 0.351562L0.773438 126.619H128.267L126.633 0.351562Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <Image
                  src="/pictures/images/industries/industries-2.png"
                  width={183}
                  height={183}
                  alt=""
                  className={s.Image}
                />
              </div>

              <div className={s.InfoItem_TextContent}>
                <div className={s.Title}>
                  <h3>Finance & Banking</h3>
                </div>
                <div className={s.Description}>
                  <p>
                    We develop complex corporate websites that no website
                    builder can handle. We create projects that are the best in
                    their competitive niche.
                  </p>
                </div>

                <div className={s.More}>
                  <span className={s.More_Label}>More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 17"
                    fill="none"
                    className={s.More_Icon}
                  >
                    <path
                      d="M6 3.51953L10.6667 8.1862L6 12.8529"
                      stroke="#1F1E58"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href={'/'} className={s.InfoItem}>
              <div className={s.InfoItem_ImageContent}>
                <div className={s.Counter}>
                  <div className={s.Counter_Value}>3</div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="121"
                    height="122"
                    viewBox="0 0 121 122"
                    fill="none"
                    className={s.Counter_Shadow}
                  >
                    <g filter="url(#filter0_f_671_4160)">
                      <path
                        d="M108.517 5.80469L6.65234 108H109.84L108.517 5.80469Z"
                        fill="#413C7C"
                        fillOpacity="0.1"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_671_4160"
                        x="-16.3477"
                        y="-17.1953"
                        width="149.188"
                        height="148.195"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="11.5"
                          result="effect1_foregroundBlur_671_4160"
                        />
                      </filter>
                    </defs>
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 121 121"
                    fill="none"
                    className={s.Counter_Triangle}
                  >
                    <path
                      d="M126.633 0.351562L0.773438 126.619H128.267L126.633 0.351562Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <Image
                  src="/pictures/images/industries/industries-3.png"
                  width={183}
                  height={183}
                  alt=""
                  className={s.Image}
                />
              </div>

              <div className={s.InfoItem_TextContent}>
                <div className={s.Title}>
                  <h3>E-learning & Education</h3>
                </div>
                <div className={s.Description}>
                  <p>
                    We think over a convenient structure, create a functional
                    design, link delivery and payment services - your visitors
                    will want to make purchases again and again.
                  </p>
                </div>

                <div className={s.More}>
                  <span className={s.More_Label}>More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 17"
                    fill="none"
                    className={s.More_Icon}
                  >
                    <path
                      d="M6 3.51953L10.6667 8.1862L6 12.8529"
                      stroke="#1F1E58"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>

          <div className={`${s.Row} ${s.Row__Middle}`}>
            <Link href={'/'} className={s.InfoItem}>
              <div className={s.InfoItem_ImageContent}>
                <div className={s.Counter}>
                  <div className={s.Counter_Value}>4</div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="121"
                    height="122"
                    viewBox="0 0 121 122"
                    fill="none"
                    className={s.Counter_Shadow}
                  >
                    <g filter="url(#filter0_f_671_4160)">
                      <path
                        d="M108.517 5.80469L6.65234 108H109.84L108.517 5.80469Z"
                        fill="#413C7C"
                        fillOpacity="0.1"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_671_4160"
                        x="-16.3477"
                        y="-17.1953"
                        width="149.188"
                        height="148.195"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="11.5"
                          result="effect1_foregroundBlur_671_4160"
                        />
                      </filter>
                    </defs>
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 121 121"
                    fill="none"
                    className={s.Counter_Triangle}
                  >
                    <path
                      d="M126.633 0.351562L0.773438 126.619H128.267L126.633 0.351562Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <Image
                  src="/pictures/images/industries/industries-4.png"
                  width={183}
                  height={183}
                  alt=""
                  className={s.Image}
                />
              </div>

              <div className={s.InfoItem_TextContent}>
                <div className={s.Title}>
                  <h3>Hospitality & Travel</h3>
                </div>
                <div className={s.Description}>
                  <p>
                    We have time-tested solutions for hotel chains and tour
                    operators. We use both packaged solutions and create systems
                    from scratch.
                  </p>
                </div>

                <div className={s.More}>
                  <span className={s.More_Label}>More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 17"
                    fill="none"
                    className={s.More_Icon}
                  >
                    <path
                      d="M6 3.51953L10.6667 8.1862L6 12.8529"
                      stroke="#1F1E58"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href={'/'} className={`${s.InfoItem} ${s.InfoItem__Big}`}>
              <div className={s.InfoItem_ImageContent}>
                <div className={s.Counter}>
                  <div className={s.Counter_Value}>6</div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="121"
                    height="122"
                    viewBox="0 0 121 122"
                    fill="none"
                    className={s.Counter_Shadow}
                  >
                    <g filter="url(#filter0_f_671_4160)">
                      <path
                        d="M108.517 5.80469L6.65234 108H109.84L108.517 5.80469Z"
                        fill="#413C7C"
                        fillOpacity="0.1"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_671_4160"
                        x="-16.3477"
                        y="-17.1953"
                        width="149.188"
                        height="148.195"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="11.5"
                          result="effect1_foregroundBlur_671_4160"
                        />
                      </filter>
                    </defs>
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 121 121"
                    fill="none"
                    className={s.Counter_Triangle}
                  >
                    <path
                      d="M126.633 0.351562L0.773438 126.619H128.267L126.633 0.351562Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <Image
                  src="/pictures/images/industries/industries-6.png"
                  width={389}
                  height={257}
                  alt=""
                  className={s.Image}
                />
              </div>

              <div className={s.InfoItem_TextContent}>
                <div className={s.Title}>
                  <h3>Healthcare</h3>
                </div>
                <div className={s.Description}>
                  <p>
                    We work with special attention in areas where maximum speed
                    and accuracy are important. Which our systems can provide.
                  </p>
                </div>

                <div className={s.More}>
                  <span className={s.More_Label}>More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 17"
                    fill="none"
                    className={s.More_Icon}
                  >
                    <path
                      d="M6 3.51953L10.6667 8.1862L6 12.8529"
                      stroke="#1F1E58"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href={'/'} className={s.InfoItem}>
              <div className={s.InfoItem_ImageContent}>
                <div className={s.Counter}>
                  <div className={s.Counter_Value}>5</div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="121"
                    height="122"
                    viewBox="0 0 121 122"
                    fill="none"
                    className={s.Counter_Shadow}
                  >
                    <g filter="url(#filter0_f_671_4160)">
                      <path
                        d="M108.517 5.80469L6.65234 108H109.84L108.517 5.80469Z"
                        fill="#413C7C"
                        fillOpacity="0.1"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_671_4160"
                        x="-16.3477"
                        y="-17.1953"
                        width="149.188"
                        height="148.195"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="11.5"
                          result="effect1_foregroundBlur_671_4160"
                        />
                      </filter>
                    </defs>
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 121 121"
                    fill="none"
                    className={s.Counter_Triangle}
                  >
                    <path
                      d="M126.633 0.351562L0.773438 126.619H128.267L126.633 0.351562Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <Image
                  src="/pictures/images/industries/industries-5.png"
                  width={183}
                  height={183}
                  alt=""
                  className={s.Image}
                />
              </div>

              <div className={s.InfoItem_TextContent}>
                <div className={s.Title}>
                  <h3>Legislation & Law</h3>
                </div>
                <div className={s.Description}>
                  <p>
                    With experience, we think through and implement systems that
                    help law firms in relationships with clients and document
                    flow.
                  </p>
                </div>

                <div className={s.More}>
                  <span className={s.More_Label}>More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 17"
                    fill="none"
                    className={s.More_Icon}
                  >
                    <path
                      d="M6 3.51953L10.6667 8.1862L6 12.8529"
                      stroke="#1F1E58"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>

          <div className={s.Row}>
            <Link href={'/'} className={`${s.InfoItem} ${s.InfoItem__Big}`}>
              <div className={s.InfoItem_ImageContent}>
                <div className={s.Counter}>
                  <div className={s.Counter_Value}>7</div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="121"
                    height="122"
                    viewBox="0 0 121 122"
                    fill="none"
                    className={s.Counter_Shadow}
                  >
                    <g filter="url(#filter0_f_671_4160)">
                      <path
                        d="M108.517 5.80469L6.65234 108H109.84L108.517 5.80469Z"
                        fill="#413C7C"
                        fillOpacity="0.1"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_671_4160"
                        x="-16.3477"
                        y="-17.1953"
                        width="149.188"
                        height="148.195"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="11.5"
                          result="effect1_foregroundBlur_671_4160"
                        />
                      </filter>
                    </defs>
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 121 121"
                    fill="none"
                    className={s.Counter_Triangle}
                  >
                    <path
                      d="M126.633 0.351562L0.773438 126.619H128.267L126.633 0.351562Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <Image
                  src="/pictures/images/industries/industries-7.png"
                  width={389}
                  height={257}
                  alt=""
                  className={s.Image}
                />
              </div>

              <div className={s.InfoItem_TextContent}>
                <div className={s.Title}>
                  <h3>Real Estate</h3>
                </div>
                <div className={s.Description}>
                  <p>
                    Both for large agencies and individual brokers of luxury
                    properties.
                  </p>
                </div>

                <div className={s.More}>
                  <span className={s.More_Label}>More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 17"
                    fill="none"
                    className={s.More_Icon}
                  >
                    <path
                      d="M6 3.51953L10.6667 8.1862L6 12.8529"
                      stroke="#1F1E58"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href={'/'} className={s.InfoItem}>
              <div className={s.InfoItem_ImageContent}>
                <div className={s.Counter}>
                  <div className={s.Counter_Value}>8</div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="121"
                    height="122"
                    viewBox="0 0 121 122"
                    fill="none"
                    className={s.Counter_Shadow}
                  >
                    <g filter="url(#filter0_f_671_4160)">
                      <path
                        d="M108.517 5.80469L6.65234 108H109.84L108.517 5.80469Z"
                        fill="#413C7C"
                        fillOpacity="0.1"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_671_4160"
                        x="-16.3477"
                        y="-17.1953"
                        width="149.188"
                        height="148.195"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="11.5"
                          result="effect1_foregroundBlur_671_4160"
                        />
                      </filter>
                    </defs>
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 121 121"
                    fill="none"
                    className={s.Counter_Triangle}
                  >
                    <path
                      d="M126.633 0.351562L0.773438 126.619H128.267L126.633 0.351562Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <Image
                  src="/pictures/images/industries/industries-8.png"
                  width={183}
                  height={183}
                  alt=""
                  className={s.Image}
                />
              </div>

              <div className={s.InfoItem_TextContent}>
                <div className={s.Title}>
                  <h3>Insurance</h3>
                </div>
                <div className={s.Description}>
                  <p>
                    We work with govepment and private companies to achieve the
                    best results.
                  </p>
                </div>

                <div className={s.More}>
                  <span className={s.More_Label}>More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 17"
                    fill="none"
                    className={s.More_Icon}
                  >
                    <path
                      d="M6 3.51953L10.6667 8.1862L6 12.8529"
                      stroke="#1F1E58"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href={'/'} className={s.InfoItem}>
              <div className={s.InfoItem_ImageContent}>
                <div className={s.Counter}>
                  <div className={s.Counter_Value}>9</div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="121"
                    height="122"
                    viewBox="0 0 121 122"
                    fill="none"
                    className={s.Counter_Shadow}
                  >
                    <g filter="url(#filter0_f_671_4160)">
                      <path
                        d="M108.517 5.80469L6.65234 108H109.84L108.517 5.80469Z"
                        fill="#413C7C"
                        fillOpacity="0.1"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_671_4160"
                        x="-16.3477"
                        y="-17.1953"
                        width="149.188"
                        height="148.195"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="11.5"
                          result="effect1_foregroundBlur_671_4160"
                        />
                      </filter>
                    </defs>
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 121 121"
                    fill="none"
                    className={s.Counter_Triangle}
                  >
                    <path
                      d="M126.633 0.351562L0.773438 126.619H128.267L126.633 0.351562Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <Image
                  src="/pictures/images/industries/industries-9.png"
                  width={183}
                  height={183}
                  alt=""
                  className={s.Image}
                />
              </div>

              <div className={s.InfoItem_TextContent}>
                <div className={s.Title}>
                  <h3>Sports</h3>
                </div>
                <div className={s.Description}>
                  <p>
                    We create an attractive online image for sports clubs and
                    organizations, and we also know how to develop specialized
                    management systems for them.
                  </p>
                </div>

                <div className={s.More}>
                  <span className={s.More_Label}>More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 17"
                    fill="none"
                    className={s.More_Icon}
                  >
                    <path
                      d="M6 3.51953L10.6667 8.1862L6 12.8529"
                      stroke="#1F1E58"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* СЛАЙДЕР */}
        <Swiper
          className={`${s.MoreInfo_Content} ${s.MoreInfo_Content__Slider}`}
          wrapperClass="MoreInfo_Content"
          modules={[Pagination]}
          breakpoints={{
            320: {
              slidesPerView: 1.1,
              spaceBetween: 19,
              enabled: true,
            },
            601: {
              slidesPerView: 300,
              spaceBetween: 'auto',
              enabled: false,
            },
          }}
          pagination={{
            type: 'bullets',
            clickable: true,
          }}
        >
          <SwiperSlide
            className={`${s.InfoItem} ${s.InfoItem__Big}`}
            onClick={() => router.push('/')}
          >
            <div className={s.InfoItem_ImageContent}>
              <div className={s.Counter}>
                <div className={s.Counter_Value}>1</div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="121"
                  height="122"
                  viewBox="0 0 121 122"
                  fill="none"
                  className={s.Counter_Shadow}
                >
                  <g filter="url(#filter0_f_671_4160)">
                    <path
                      d="M108.517 5.80469L6.65234 108H109.84L108.517 5.80469Z"
                      fill="#413C7C"
                      fillOpacity="0.1"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_671_4160"
                      x="-16.3477"
                      y="-17.1953"
                      width="149.188"
                      height="148.195"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="11.5"
                        result="effect1_foregroundBlur_671_4160"
                      />
                    </filter>
                  </defs>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 121 121"
                  fill="none"
                  className={s.Counter_Triangle}
                >
                  <path
                    d="M126.633 0.351562L0.773438 126.619H128.267L126.633 0.351562Z"
                    fill="white"
                  />
                </svg>
              </div>
              <Image
                src="/pictures/images/industries/industries-1.png"
                width={389}
                height={257}
                alt=""
                className={s.Image}
              />
            </div>

            <div className={s.InfoItem_TextContent}>
              <div className={s.Title}>
                <h3>E-Commerce & Retail</h3>
              </div>
              <div className={s.Description}>
                <p>
                  We create high-load projects that successfully survive Black
                  Fridays, seasonal sales and other events with millions of
                  visitors.
                </p>
              </div>

              <div className={s.More}>
                <span className={s.More_Label}>More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 17"
                  fill="none"
                  className={s.More_Icon}
                >
                  <path
                    d="M6 3.51953L10.6667 8.1862L6 12.8529"
                    stroke="#1F1E58"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={s.InfoItem} onClick={() => router.push('/')}>
            <div className={s.InfoItem_ImageContent}>
              <div className={s.Counter}>
                <div className={s.Counter_Value}>2</div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="121"
                  height="122"
                  viewBox="0 0 121 122"
                  fill="none"
                  className={s.Counter_Shadow}
                >
                  <g filter="url(#filter0_f_671_4160)">
                    <path
                      d="M108.517 5.80469L6.65234 108H109.84L108.517 5.80469Z"
                      fill="#413C7C"
                      fillOpacity="0.1"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_671_4160"
                      x="-16.3477"
                      y="-17.1953"
                      width="149.188"
                      height="148.195"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="11.5"
                        result="effect1_foregroundBlur_671_4160"
                      />
                    </filter>
                  </defs>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 121 121"
                  fill="none"
                  className={s.Counter_Triangle}
                >
                  <path
                    d="M126.633 0.351562L0.773438 126.619H128.267L126.633 0.351562Z"
                    fill="white"
                  />
                </svg>
              </div>
              <Image
                src="/pictures/images/industries/industries-2.png"
                width={183}
                height={183}
                alt=""
                className={s.Image}
              />
            </div>

            <div className={s.InfoItem_TextContent}>
              <div className={s.Title}>
                <h3>Finance & Banking</h3>
              </div>
              <div className={s.Description}>
                <p>
                  We develop complex corporate websites that no website builder
                  can handle. We create projects that are the best in their
                  competitive niche.
                </p>
              </div>

              <div className={s.More}>
                <span className={s.More_Label}>More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 17"
                  fill="none"
                  className={s.More_Icon}
                >
                  <path
                    d="M6 3.51953L10.6667 8.1862L6 12.8529"
                    stroke="#1F1E58"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={s.InfoItem} onClick={() => router.push('/')}>
            <div className={s.InfoItem_ImageContent}>
              <div className={s.Counter}>
                <div className={s.Counter_Value}>3</div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="121"
                  height="122"
                  viewBox="0 0 121 122"
                  fill="none"
                  className={s.Counter_Shadow}
                >
                  <g filter="url(#filter0_f_671_4160)">
                    <path
                      d="M108.517 5.80469L6.65234 108H109.84L108.517 5.80469Z"
                      fill="#413C7C"
                      fillOpacity="0.1"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_671_4160"
                      x="-16.3477"
                      y="-17.1953"
                      width="149.188"
                      height="148.195"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="11.5"
                        result="effect1_foregroundBlur_671_4160"
                      />
                    </filter>
                  </defs>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 121 121"
                  fill="none"
                  className={s.Counter_Triangle}
                >
                  <path
                    d="M126.633 0.351562L0.773438 126.619H128.267L126.633 0.351562Z"
                    fill="white"
                  />
                </svg>
              </div>
              <Image
                src="/pictures/images/industries/industries-3.png"
                width={183}
                height={183}
                alt=""
                className={s.Image}
              />
            </div>

            <div className={s.InfoItem_TextContent}>
              <div className={s.Title}>
                <h3>E-learning & Education</h3>
              </div>
              <div className={s.Description}>
                <p>
                  We think over a convenient structure, create a functional
                  design, link delivery and payment services - your visitors
                  will want to make purchases again and again.
                </p>
              </div>

              <div className={s.More}>
                <span className={s.More_Label}>More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 17"
                  fill="none"
                  className={s.More_Icon}
                >
                  <path
                    d="M6 3.51953L10.6667 8.1862L6 12.8529"
                    stroke="#1F1E58"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={s.InfoItem} onClick={() => router.push('/')}>
            <div className={s.InfoItem_ImageContent}>
              <div className={s.Counter}>
                <div className={s.Counter_Value}>4</div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="121"
                  height="122"
                  viewBox="0 0 121 122"
                  fill="none"
                  className={s.Counter_Shadow}
                >
                  <g filter="url(#filter0_f_671_4160)">
                    <path
                      d="M108.517 5.80469L6.65234 108H109.84L108.517 5.80469Z"
                      fill="#413C7C"
                      fillOpacity="0.1"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_671_4160"
                      x="-16.3477"
                      y="-17.1953"
                      width="149.188"
                      height="148.195"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="11.5"
                        result="effect1_foregroundBlur_671_4160"
                      />
                    </filter>
                  </defs>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 121 121"
                  fill="none"
                  className={s.Counter_Triangle}
                >
                  <path
                    d="M126.633 0.351562L0.773438 126.619H128.267L126.633 0.351562Z"
                    fill="white"
                  />
                </svg>
              </div>
              <Image
                src="/pictures/images/industries/industries-4.png"
                width={183}
                height={183}
                alt=""
                className={s.Image}
              />
            </div>

            <div className={s.InfoItem_TextContent}>
              <div className={s.Title}>
                <h3>Hospitality & Travel</h3>
              </div>
              <div className={s.Description}>
                <p>
                  We have time-tested solutions for hotel chains and tour
                  operators. We use both packaged solutions and create systems
                  from scratch.
                </p>
              </div>

              <div className={s.More}>
                <span className={s.More_Label}>More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 17"
                  fill="none"
                  className={s.More_Icon}
                >
                  <path
                    d="M6 3.51953L10.6667 8.1862L6 12.8529"
                    stroke="#1F1E58"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className={`${s.InfoItem} ${s.InfoItem__Big}`}
            onClick={() => router.push('/')}
          >
            <div className={s.InfoItem_ImageContent}>
              <div className={s.Counter}>
                <div className={s.Counter_Value}>6</div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="121"
                  height="122"
                  viewBox="0 0 121 122"
                  fill="none"
                  className={s.Counter_Shadow}
                >
                  <g filter="url(#filter0_f_671_4160)">
                    <path
                      d="M108.517 5.80469L6.65234 108H109.84L108.517 5.80469Z"
                      fill="#413C7C"
                      fillOpacity="0.1"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_671_4160"
                      x="-16.3477"
                      y="-17.1953"
                      width="149.188"
                      height="148.195"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="11.5"
                        result="effect1_foregroundBlur_671_4160"
                      />
                    </filter>
                  </defs>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 121 121"
                  fill="none"
                  className={s.Counter_Triangle}
                >
                  <path
                    d="M126.633 0.351562L0.773438 126.619H128.267L126.633 0.351562Z"
                    fill="white"
                  />
                </svg>
              </div>
              <Image
                src="/pictures/images/industries/industries-6.png"
                width={389}
                height={257}
                alt=""
                className={s.Image}
              />
            </div>

            <div className={s.InfoItem_TextContent}>
              <div className={s.Title}>
                <h3>Healthcare</h3>
              </div>
              <div className={s.Description}>
                <p>
                  We work with special attention in areas where maximum speed
                  and accuracy are important. Which our systems can provide.
                </p>
              </div>

              <div className={s.More}>
                <span className={s.More_Label}>More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 17"
                  fill="none"
                  className={s.More_Icon}
                >
                  <path
                    d="M6 3.51953L10.6667 8.1862L6 12.8529"
                    stroke="#1F1E58"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={s.InfoItem} onClick={() => router.push('/')}>
            <div className={s.InfoItem_ImageContent}>
              <div className={s.Counter}>
                <div className={s.Counter_Value}>5</div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="121"
                  height="122"
                  viewBox="0 0 121 122"
                  fill="none"
                  className={s.Counter_Shadow}
                >
                  <g filter="url(#filter0_f_671_4160)">
                    <path
                      d="M108.517 5.80469L6.65234 108H109.84L108.517 5.80469Z"
                      fill="#413C7C"
                      fillOpacity="0.1"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_671_4160"
                      x="-16.3477"
                      y="-17.1953"
                      width="149.188"
                      height="148.195"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="11.5"
                        result="effect1_foregroundBlur_671_4160"
                      />
                    </filter>
                  </defs>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 121 121"
                  fill="none"
                  className={s.Counter_Triangle}
                >
                  <path
                    d="M126.633 0.351562L0.773438 126.619H128.267L126.633 0.351562Z"
                    fill="white"
                  />
                </svg>
              </div>
              <Image
                src="/pictures/images/industries/industries-5.png"
                width={183}
                height={183}
                alt=""
                className={s.Image}
              />
            </div>

            <div className={s.InfoItem_TextContent}>
              <div className={s.Title}>
                <h3>Legislation & Law</h3>
              </div>
              <div className={s.Description}>
                <p>
                  With experience, we think through and implement systems that
                  help law firms in relationships with clients and document
                  flow.
                </p>
              </div>

              <div className={s.More}>
                <span className={s.More_Label}>More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 17"
                  fill="none"
                  className={s.More_Icon}
                >
                  <path
                    d="M6 3.51953L10.6667 8.1862L6 12.8529"
                    stroke="#1F1E58"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide
            className={`${s.InfoItem} ${s.InfoItem__Big}`}
            onClick={() => router.push('/')}
          >
            <div className={s.InfoItem_ImageContent}>
              <div className={s.Counter}>
                <div className={s.Counter_Value}>7</div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="121"
                  height="122"
                  viewBox="0 0 121 122"
                  fill="none"
                  className={s.Counter_Shadow}
                >
                  <g filter="url(#filter0_f_671_4160)">
                    <path
                      d="M108.517 5.80469L6.65234 108H109.84L108.517 5.80469Z"
                      fill="#413C7C"
                      fillOpacity="0.1"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_671_4160"
                      x="-16.3477"
                      y="-17.1953"
                      width="149.188"
                      height="148.195"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="11.5"
                        result="effect1_foregroundBlur_671_4160"
                      />
                    </filter>
                  </defs>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 121 121"
                  fill="none"
                  className={s.Counter_Triangle}
                >
                  <path
                    d="M126.633 0.351562L0.773438 126.619H128.267L126.633 0.351562Z"
                    fill="white"
                  />
                </svg>
              </div>
              <Image
                src="/pictures/images/industries/industries-7.png"
                width={389}
                height={257}
                alt=""
                className={s.Image}
              />
            </div>

            <div className={s.InfoItem_TextContent}>
              <div className={s.Title}>
                <h3>Real Estate</h3>
              </div>
              <div className={s.Description}>
                <p>
                  Both for large agencies and individual brokers of luxury
                  properties.
                </p>
              </div>

              <div className={s.More}>
                <span className={s.More_Label}>More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 17"
                  fill="none"
                  className={s.More_Icon}
                >
                  <path
                    d="M6 3.51953L10.6667 8.1862L6 12.8529"
                    stroke="#1F1E58"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={s.InfoItem} onClick={() => router.push('/')}>
            <div className={s.InfoItem_ImageContent}>
              <div className={s.Counter}>
                <div className={s.Counter_Value}>8</div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="121"
                  height="122"
                  viewBox="0 0 121 122"
                  fill="none"
                  className={s.Counter_Shadow}
                >
                  <g filter="url(#filter0_f_671_4160)">
                    <path
                      d="M108.517 5.80469L6.65234 108H109.84L108.517 5.80469Z"
                      fill="#413C7C"
                      fillOpacity="0.1"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_671_4160"
                      x="-16.3477"
                      y="-17.1953"
                      width="149.188"
                      height="148.195"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="11.5"
                        result="effect1_foregroundBlur_671_4160"
                      />
                    </filter>
                  </defs>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 121 121"
                  fill="none"
                  className={s.Counter_Triangle}
                >
                  <path
                    d="M126.633 0.351562L0.773438 126.619H128.267L126.633 0.351562Z"
                    fill="white"
                  />
                </svg>
              </div>
              <Image
                src="/pictures/images/industries/industries-8.png"
                width={183}
                height={183}
                alt=""
                className={s.Image}
              />
            </div>

            <div className={s.InfoItem_TextContent}>
              <div className={s.Title}>
                <h3>Insurance</h3>
              </div>
              <div className={s.Description}>
                <p>
                  We work with govepment and private companies to achieve the
                  best results.
                </p>
              </div>

              <div className={s.More}>
                <span className={s.More_Label}>More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 17"
                  fill="none"
                  className={s.More_Icon}
                >
                  <path
                    d="M6 3.51953L10.6667 8.1862L6 12.8529"
                    stroke="#1F1E58"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={s.InfoItem} onClick={() => router.push('/')}>
            <div className={s.InfoItem_ImageContent}>
              <div className={s.Counter}>
                <div className={s.Counter_Value}>9</div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="121"
                  height="122"
                  viewBox="0 0 121 122"
                  fill="none"
                  className={s.Counter_Shadow}
                >
                  <g filter="url(#filter0_f_671_4160)">
                    <path
                      d="M108.517 5.80469L6.65234 108H109.84L108.517 5.80469Z"
                      fill="#413C7C"
                      fillOpacity="0.1"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_671_4160"
                      x="-16.3477"
                      y="-17.1953"
                      width="149.188"
                      height="148.195"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="11.5"
                        result="effect1_foregroundBlur_671_4160"
                      />
                    </filter>
                  </defs>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 121 121"
                  fill="none"
                  className={s.Counter_Triangle}
                >
                  <path
                    d="M126.633 0.351562L0.773438 126.619H128.267L126.633 0.351562Z"
                    fill="white"
                  />
                </svg>
              </div>
              <Image
                src="/pictures/images/industries/industries-9.png"
                width={183}
                height={183}
                alt=""
                className={s.Image}
              />
            </div>

            <div className={s.InfoItem_TextContent}>
              <div className={s.Title}>
                <h3>Sports</h3>
              </div>
              <div className={s.Description}>
                <p>
                  We create an attractive online image for sports clubs and
                  organizations, and we also know how to develop specialized
                  management systems for them.
                </p>
              </div>

              <div className={s.More}>
                <span className={s.More_Label}>More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 17"
                  fill="none"
                  className={s.More_Icon}
                >
                  <path
                    d="M6 3.51953L10.6667 8.1862L6 12.8529"
                    stroke="#1F1E58"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </BaseContainer>
    </section>
  );
};

export default MoreInfo;
