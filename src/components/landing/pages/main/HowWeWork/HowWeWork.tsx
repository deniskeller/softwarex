import React, { useEffect, useRef, useState } from 'react';
import s from './HowWeWork.module.scss';
import { BaseContainer, BaseIcon, BaseText } from '@base/index';
import Image from 'next/image';
import { ALL_ICONS } from '@constants/icons';

import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import { gsap } from 'gsap';

const HowWeWork: React.FC = () => {
  // useEffect(() => {
  //   window.addEventListener('resize orientationchange', () => {});
  // }, []);

  const refCard_1 = useRef<HTMLDivElement>(null);
  const refCard_2 = useRef<HTMLDivElement>(null);
  const refCard_3 = useRef<HTMLDivElement>(null);

  const refText_1 = useRef<HTMLSpanElement>(null);
  const refText_2 = useRef<HTMLSpanElement>(null);
  const refText_3 = useRef<HTMLSpanElement>(null);

  const refTriangle_1 = useRef<SVGSVGElement>(null);
  const refTriangle_2 = useRef<SVGSVGElement>(null);

  const swiperSlide = useRef<SwiperRef>(null);
  // console.log('swiperSlide: ', swiperSlide);

  useEffect(() => {
    const card1 = refCard_1.current;
    const card2 = refCard_2.current;
    const card3 = refCard_3.current;

    const text1 = refText_1.current;
    const text2 = refText_2.current;
    const text3 = refText_3.current;

    const triangle1 = refTriangle_1.current;
    const triangle2 = refTriangle_2.current;
    // if (!card1 || !card2 || !card3 || !triangle1 || !triangle2 || !triangle3) {
    //   return;
    // }

    const duration = 1;
    var animateOne = gsap.timeline({ repeat: -1, delay: 1 });
    animateOne
      .to(card1, { opacity: 1, duration: duration })
      .to(triangle1, { opacity: 1, duration: duration }, '<')
      .to(
        text1,
        {
          backgroundImage:
            'linear-gradient(89deg, #6e6ccf 0.91%, #fb8873 93.07%)',
          duration: duration,
        },
        '<'
      )
      .to(card1, { opacity: 0, duration: duration }, '>')
      .to(triangle1, { opacity: 0, duration: duration }, '<')
      .to(
        text1,
        {
          backgroundImage:
            'linear-gradient(89deg,#1f1e58 0.91%,#1f1e58 93.07%)',
          duration: duration,
        },
        '<'
      )
      .to(card2, { opacity: 1, duration: duration }, '>')
      .to(triangle2, { opacity: 1, duration: duration }, '<')
      .to(
        text2,
        {
          backgroundImage:
            'linear-gradient(89deg, #6e6ccf 0.91%, #fb8873 93.07%)',
          duration: duration,
        },
        '<'
      )
      .to(card2, { opacity: 0, duration: duration }, '>')
      .to(triangle2, { opacity: 0, duration: duration }, '<')
      .to(
        text2,
        {
          backgroundImage:
            'linear-gradient(89deg,#1f1e58 0.91%,#1f1e58 93.07%)',
          duration: duration,
        },
        '<'
      )
      .to(card3, { opacity: 1, duration: duration }, '>')
      .to(
        text3,
        {
          backgroundImage:
            'linear-gradient(89deg, #6e6ccf 0.91%, #fb8873 93.07%)',
          duration: duration,
        },
        '<'
      )
      .to(card3, { opacity: 0, duration: duration }, '>')
      .to(
        text3,
        {
          backgroundImage:
            'linear-gradient(89deg,#1f1e58 0.91%,#1f1e58 93.07%)',
          duration: duration,
        },
        '<'
      );
  }, []);

  return (
    <section className={s.HowWeWork}>
      <BaseContainer className={s.HowWeWork_Container}>
        <BaseIcon
          viewBox="0 0 124 124"
          icon={ALL_ICONS.STAR}
          className={s.HowWeWork_Star}
        />

        <BaseText className={s.HowWeWork_Title} as="h2">
          How we work
        </BaseText>

        <BaseText className={s.HowWeWork_Text} as="p">
          We consciously and purposefully help businesses develop in the digital
          environment. We build strategies, conduct research, design, develop
          and support digital products.
        </BaseText>

        <Swiper
          ref={swiperSlide}
          className={s.HowWeWork_Slider}
          wrapperClass="HowWeWork_Slider"
          modules={[Pagination]}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 34,
              enabled: true,
            },
            601: {
              slidesPerView: 3,
              spaceBetween: 'auto',
              enabled: false,
            },
          }}
          pagination={{
            type: 'bullets',
            clickable: true,
          }}
        >
          <SwiperSlide className={`${s.Slide} ${s.Slide__1}`}>
            <div className={`${s.Background} ${s.Background__Default}`}></div>
            <div
              className={`${s.Background} ${s.Background__Gradient}`}
              ref={refCard_1}
            ></div>
            <div className={`${s.Background} ${s.Background__White}`}></div>

            <svg
              viewBox="0 0 22 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${s.Arrow} ${s.Arrow__Default}`}
            >
              <g clipPath="url(#clip0_1946_9676)">
                <path
                  d="M-1 0.645163L20.6617 24.9997L-1 49.3542L-1 0.645163Z"
                  fill="white"
                  stroke="#D9D9F2"
                  strokeWidth="2"
                />
              </g>
              <defs>
                <clipPath id="clip0_1946_9676">
                  <rect width="22" height="50" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <svg
              viewBox="0 0 22 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${s.Arrow} ${s.Arrow__Gradient}`}
              ref={refTriangle_1}
            >
              <g clipPath="url(#clip0_1946_9675)">
                <path
                  d="M-1 0.645163L20.6617 24.9997L-1 49.3542L-1 0.645163Z"
                  fill="white"
                  stroke="url(#paint0_linear_1946_9675)"
                  strokeWidth="2"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_1946_9675"
                  x1="-1.86445"
                  y1="51.5422"
                  x2="24.2366"
                  y2="30.5652"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C97E94" />
                  <stop offset="1" stopColor="#D9828A" />
                </linearGradient>
                <clipPath id="clip0_1946_9675">
                  <rect width="22" height="50" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <div className={s.Slide_Number}>
              <span>1</span>
            </div>
            <div className={s.Slide_Title}>
              <span ref={refText_1}>Analitycs</span>
            </div>
            <div className={s.Slide_Description}>
              <p>
                We will study your hypothesis and offer a technological solution
                that exactly meets the business goal of the project.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className={`${s.Slide} ${s.Slide__2}`}>
            <div className={`${s.Background} ${s.Background__Default}`}></div>
            <div
              className={`${s.Background} ${s.Background__Gradient}`}
              ref={refCard_2}
            ></div>
            <div className={`${s.Background} ${s.Background__White}`}></div>

            <svg
              viewBox="0 0 22 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${s.Arrow} ${s.Arrow__Default}`}
            >
              <g clipPath="url(#clip0_1946_9676)">
                <path
                  d="M-1 0.645163L20.6617 24.9997L-1 49.3542L-1 0.645163Z"
                  fill="white"
                  stroke="#D9D9F2"
                  strokeWidth="2"
                />
              </g>
              <defs>
                <clipPath id="clip0_1946_9676">
                  <rect width="22" height="50" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <svg
              viewBox="0 0 22 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${s.Arrow} ${s.Arrow__Gradient}`}
              ref={refTriangle_2}
            >
              <g clipPath="url(#clip0_1946_9675)">
                <path
                  d="M-1 0.645163L20.6617 24.9997L-1 49.3542L-1 0.645163Z"
                  fill="white"
                  stroke="url(#paint0_linear_1946_9675)"
                  strokeWidth="2"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_1946_9675"
                  x1="-1.86445"
                  y1="51.5422"
                  x2="24.2366"
                  y2="30.5652"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C97E94" />
                  <stop offset="1" stopColor="#D9828A" />
                </linearGradient>
                <clipPath id="clip0_1946_9675">
                  <rect width="22" height="50" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <div className={s.Slide_Number}>
              <span>2</span>
            </div>
            <div className={s.Slide_Title}>
              <span ref={refText_2}>Design</span>
            </div>
            <div className={s.Slide_Description}>
              <p>
                After we will offer a visual concept of the product for
                successful user interaction.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className={`${s.Slide} ${s.Slide__3}`}>
            <div className={`${s.Background} ${s.Background__Default}`}></div>
            <div
              className={`${s.Background} ${s.Background__Gradient}`}
              ref={refCard_3}
            ></div>
            <div className={`${s.Background} ${s.Background__White}`}></div>

            <div className={s.Slide_Number}>
              <span>3</span>
            </div>
            <div className={s.Slide_Title}>
              <span ref={refText_3}>Development</span>
            </div>
            <div className={s.Slide_Description}>
              <p>
                Then we implement reliable projects thanks to extensive
                experience in management and selection of team competencies.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>

        <Image
          src="/pictures/images/main/how-we-work.png"
          width={720}
          height={532}
          alt="HowWeWork"
          className={s.HowWeWork_Image}
        />
      </BaseContainer>
    </section>
  );
};

export default HowWeWork;
