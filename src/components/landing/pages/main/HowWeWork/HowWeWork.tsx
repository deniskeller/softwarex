import React, { useEffect, useRef, useState } from 'react';
import s from './HowWeWork.module.scss';
import { BaseContainer, BaseIcon, BaseText } from '@base/index';
import Image from 'next/image';
import { ALL_ICONS } from '@constants/icons';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import { gsap } from 'gsap';

const HowWeWork: React.FC = () => {
  useEffect(() => {
    window.addEventListener('resize orientationchange', () => {});
  }, []);

  const refCard_1 = useRef(null);
  const refCard_2 = useRef(null);
  const refCard_3 = useRef(null);

  // useEffect(() => {
  //   gsap.timeline().fromTo(refCard_1.current, { y: '100%' }, { y: '0%' });
  // }, []);

  // var animateOne = gsap.timeline({ delay: 1 });
  // animateOne
  //   .to(refCard_1.current, { opacity: 1, duration: 1 })
  //   .to(refCard_2.current, { x: 100, opacity: 0, duration: 1 }, '+=1');

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
            <div className={`${s.Background} ${s.Background__Gradient}`}></div>
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
              <span>Analitycs</span>
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
            <div className={`${s.Background} ${s.Background__Gradient}`}></div>
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
              <span>Design</span>
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
            <div className={`${s.Background} ${s.Background__Gradient}`}></div>
            <div className={`${s.Background} ${s.Background__White}`}></div>

            <div className={s.Slide_Number}>
              <span>3</span>
            </div>
            <div className={s.Slide_Title}>
              <span>Development</span>
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
