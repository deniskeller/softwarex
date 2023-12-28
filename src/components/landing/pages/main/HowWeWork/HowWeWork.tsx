import React, { useEffect, useRef, useState } from 'react';
import s from './HowWeWork.module.scss';
import { BaseContainer, BaseIcon, BaseText } from '@base/index';
import Image from 'next/image';
import { ALL_ICONS } from '@constants/icons';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const HowWeWork: React.FC = () => {
  useEffect(() => {
    window.addEventListener('resize orientationchange', () => {});
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
          className={s.HowWeWork_Slider}
          wrapperClass="HowWeWork_Slider"
          modules={[Pagination]}
          breakpoints={{
            320: {
              slidesPerView: 1.1,
              spaceBetween: 18,
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
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 337 394"
              fill="none"
              preserveAspectRatio="none"
              className={s.Slide_Background}
            >
              <g filter="url(#filter0_d_126_226)">
                <mask id="path-1-inside-1_126_226" fill="white">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M41 8C23.8792 8 10 21.8792 10 39V347C10 364.121 23.8792 378 41 378H270C287.121 378 301 364.121 301 347V109.576L323 84.8415L301 60.1066V39C301 21.8792 287.121 8 270 8H41Z"
                  />
                </mask>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M41 8C23.8792 8 10 21.8792 10 39V347C10 364.121 23.8792 378 41 378H270C287.121 378 301 364.121 301 347V109.576L323 84.8415L301 60.1066V39C301 21.8792 287.121 8 270 8H41Z"
                  fill="white"
                />
                <path
                  d="M301 109.576L299.506 108.247L299 108.816V109.576H301ZM323 84.8415L324.494 86.1707L325.677 84.8415L324.494 83.5123L323 84.8415ZM301 60.1066H299V60.8673L299.506 61.4358L301 60.1066ZM12 39C12 22.9837 24.9837 10 41 10V6C22.7746 6 8 20.7746 8 39H12ZM12 347V39H8V347H12ZM41 376C24.9838 376 12 363.016 12 347H8C8 365.225 22.7746 380 41 380V376ZM270 376H41V380H270V376ZM299 347C299 363.016 286.016 376 270 376V380C288.225 380 303 365.225 303 347H299ZM299 109.576V347H303V109.576H299ZM321.506 83.5123L299.506 108.247L302.494 110.906L324.494 86.1707L321.506 83.5123ZM299.506 61.4358L321.506 86.1707L324.494 83.5123L302.494 58.7774L299.506 61.4358ZM299 39V60.1066H303V39H299ZM270 10C286.016 10 299 22.9837 299 39H303C303 20.7746 288.225 6 270 6V10ZM41 10H270V6H41V10Z"
                  fill="#6D6BCE"
                  fillOpacity="0.26"
                  mask="url(#path-1-inside-1_126_226)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_126_226"
                  x="0"
                  y="0"
                  width="337"
                  height="394"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="2" dy="4" />
                  <feGaussianBlur stdDeviation="6" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.121569 0 0 0 0 0.117647 0 0 0 0 0.345098 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_126_226"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_126_226"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="url(#filter0_d_126_226)"
                  x1="334.832"
                  y1="387.358"
                  x2="227.809"
                  y2="-30.6881"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6E6CCF" />
                  <stop offset="1" stopColor="#FB8873" />
                </linearGradient>
              </defs>
            </svg> */}
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
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 337 394"
              fill="none"
              preserveAspectRatio="none"
              className={s.Slide_Background}
            >
              <g filter="url(#filter0_d_126_227)">
                <mask id="path-1-inside-1_126_227" fill="white">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M41 8C23.8792 8 10 21.8792 10 39V347C10 364.121 23.8792 378 41 378H270C287.121 378 301 364.121 301 347V109.576L323 84.8415L301 60.1066V39C301 21.8792 287.121 8 270 8H41Z"
                  />
                </mask>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M41 8C23.8792 8 10 21.8792 10 39V347C10 364.121 23.8792 378 41 378H270C287.121 378 301 364.121 301 347V109.576L323 84.8415L301 60.1066V39C301 21.8792 287.121 8 270 8H41Z"
                  fill="white"
                />
                <path
                  d="M301 109.576L299.506 108.247L299 108.816V109.576H301ZM323 84.8415L324.494 86.1707L325.677 84.8415L324.494 83.5123L323 84.8415ZM301 60.1066H299V60.8673L299.506 61.4358L301 60.1066ZM12 39C12 22.9837 24.9837 10 41 10V6C22.7746 6 8 20.7746 8 39H12ZM12 347V39H8V347H12ZM41 376C24.9838 376 12 363.016 12 347H8C8 365.225 22.7746 380 41 380V376ZM270 376H41V380H270V376ZM299 347C299 363.016 286.016 376 270 376V380C288.225 380 303 365.225 303 347H299ZM299 109.576V347H303V109.576H299ZM321.506 83.5123L299.506 108.247L302.494 110.906L324.494 86.1707L321.506 83.5123ZM299.506 61.4358L321.506 86.1707L324.494 83.5123L302.494 58.7774L299.506 61.4358ZM299 39V60.1066H303V39H299ZM270 10C286.016 10 299 22.9837 299 39H303C303 20.7746 288.225 6 270 6V10ZM41 10H270V6H41V10Z"
                  fill="url(#paint0_linear_126_227)"
                  mask="url(#path-1-inside-1_126_227)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_126_227"
                  x="0"
                  y="0"
                  width="337"
                  height="394"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="2" dy="4" />
                  <feGaussianBlur stdDeviation="6" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.121569 0 0 0 0 0.117647 0 0 0 0 0.345098 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_126_227"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_126_227"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_126_227"
                  x1="334.832"
                  y1="387.358"
                  x2="227.809"
                  y2="-30.6881"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6E6CCF" />
                  <stop offset="1" stopColor="#FB8873" />
                </linearGradient>
              </defs>
            </svg> */}
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
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 315 394"
              fill="none"
              preserveAspectRatio="none"
              className={s.Slide_Background}
            >
              <g filter="url(#filter0_d_126_228)">
                <mask id="path-1-inside-1_126_228" fill="white">
                  <path d="M10 39C10 21.8792 23.8792 8 41 8H270C287.121 8 301 21.8792 301 39V347C301 364.121 287.121 378 270 378H41C23.8792 378 10 364.121 10 347V39Z" />
                </mask>
                <path
                  d="M10 39C10 21.8792 23.8792 8 41 8H270C287.121 8 301 21.8792 301 39V347C301 364.121 287.121 378 270 378H41C23.8792 378 10 364.121 10 347V39Z"
                  fill="white"
                />
                <path
                  d="M12 39C12 22.9837 24.9837 10 41 10V6C22.7746 6 8 20.7746 8 39H12ZM41 10H270V6H41V10ZM270 10C286.016 10 299 22.9837 299 39H303C303 20.7746 288.225 6 270 6V10ZM299 39V347H303V39H299ZM299 347C299 363.016 286.016 376 270 376V380C288.225 380 303 365.225 303 347H299ZM270 376H41V380H270V376ZM41 376C24.9838 376 12 363.016 12 347H8C8 365.225 22.7746 380 41 380V376ZM12 347V39H8V347H12Z"
                  fill="#6D6BCE"
                  fillOpacity="0.26"
                  mask="url(#path-1-inside-1_126_228)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_126_228"
                  x="0"
                  y="0"
                  width="315"
                  height="394"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="2" dy="4" />
                  <feGaussianBlur stdDeviation="6" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.121569 0 0 0 0 0.117647 0 0 0 0 0.345098 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_126_228"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_126_228"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg> */}
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

        {/* <div
          className={s.HowWeWork_Slider}
          ref={refSlider}
          data-modile={dataMobile}
        >
          <div className={s.HowWeWork_Slider_Wrapper}>
            <div className={`${s.Slide} ${s.Slide__1}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 337 394"
                fill="none"
                preserveAspectRatio="none"
                className={s.Slide_Background}
              >
                <g filter="url(#filter0_d_126_226)">
                  <mask id="path-1-inside-1_126_226" fill="white">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M41 8C23.8792 8 10 21.8792 10 39V347C10 364.121 23.8792 378 41 378H270C287.121 378 301 364.121 301 347V109.576L323 84.8415L301 60.1066V39C301 21.8792 287.121 8 270 8H41Z"
                    />
                  </mask>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M41 8C23.8792 8 10 21.8792 10 39V347C10 364.121 23.8792 378 41 378H270C287.121 378 301 364.121 301 347V109.576L323 84.8415L301 60.1066V39C301 21.8792 287.121 8 270 8H41Z"
                    fill="white"
                  />
                  <path
                    d="M301 109.576L299.506 108.247L299 108.816V109.576H301ZM323 84.8415L324.494 86.1707L325.677 84.8415L324.494 83.5123L323 84.8415ZM301 60.1066H299V60.8673L299.506 61.4358L301 60.1066ZM12 39C12 22.9837 24.9837 10 41 10V6C22.7746 6 8 20.7746 8 39H12ZM12 347V39H8V347H12ZM41 376C24.9838 376 12 363.016 12 347H8C8 365.225 22.7746 380 41 380V376ZM270 376H41V380H270V376ZM299 347C299 363.016 286.016 376 270 376V380C288.225 380 303 365.225 303 347H299ZM299 109.576V347H303V109.576H299ZM321.506 83.5123L299.506 108.247L302.494 110.906L324.494 86.1707L321.506 83.5123ZM299.506 61.4358L321.506 86.1707L324.494 83.5123L302.494 58.7774L299.506 61.4358ZM299 39V60.1066H303V39H299ZM270 10C286.016 10 299 22.9837 299 39H303C303 20.7746 288.225 6 270 6V10ZM41 10H270V6H41V10Z"
                    fill="#6D6BCE"
                    fillOpacity="0.26"
                    mask="url(#path-1-inside-1_126_226)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_126_226"
                    x="0"
                    y="0"
                    width="337"
                    height="394"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="2" dy="4" />
                    <feGaussianBlur stdDeviation="6" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.121569 0 0 0 0 0.117647 0 0 0 0 0.345098 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_126_226"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_126_226"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="url(#filter0_d_126_226)"
                    x1="334.832"
                    y1="387.358"
                    x2="227.809"
                    y2="-30.6881"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#6E6CCF" />
                    <stop offset="1" stopColor="#FB8873" />
                  </linearGradient>
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
                  We will study your hypothesis and offer a technological
                  solution that exactly meets the business goal of the project.
                </p>
              </div>
            </div>

            <div className={`${s.Slide} ${s.Slide__2}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 337 394"
                fill="none"
                preserveAspectRatio="none"
                className={s.Slide_Background}
              >
                <g filter="url(#filter0_d_126_227)">
                  <mask id="path-1-inside-1_126_227" fill="white">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M41 8C23.8792 8 10 21.8792 10 39V347C10 364.121 23.8792 378 41 378H270C287.121 378 301 364.121 301 347V109.576L323 84.8415L301 60.1066V39C301 21.8792 287.121 8 270 8H41Z"
                    />
                  </mask>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M41 8C23.8792 8 10 21.8792 10 39V347C10 364.121 23.8792 378 41 378H270C287.121 378 301 364.121 301 347V109.576L323 84.8415L301 60.1066V39C301 21.8792 287.121 8 270 8H41Z"
                    fill="white"
                  />
                  <path
                    d="M301 109.576L299.506 108.247L299 108.816V109.576H301ZM323 84.8415L324.494 86.1707L325.677 84.8415L324.494 83.5123L323 84.8415ZM301 60.1066H299V60.8673L299.506 61.4358L301 60.1066ZM12 39C12 22.9837 24.9837 10 41 10V6C22.7746 6 8 20.7746 8 39H12ZM12 347V39H8V347H12ZM41 376C24.9838 376 12 363.016 12 347H8C8 365.225 22.7746 380 41 380V376ZM270 376H41V380H270V376ZM299 347C299 363.016 286.016 376 270 376V380C288.225 380 303 365.225 303 347H299ZM299 109.576V347H303V109.576H299ZM321.506 83.5123L299.506 108.247L302.494 110.906L324.494 86.1707L321.506 83.5123ZM299.506 61.4358L321.506 86.1707L324.494 83.5123L302.494 58.7774L299.506 61.4358ZM299 39V60.1066H303V39H299ZM270 10C286.016 10 299 22.9837 299 39H303C303 20.7746 288.225 6 270 6V10ZM41 10H270V6H41V10Z"
                    fill="url(#paint0_linear_126_227)"
                    mask="url(#path-1-inside-1_126_227)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_126_227"
                    x="0"
                    y="0"
                    width="337"
                    height="394"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="2" dy="4" />
                    <feGaussianBlur stdDeviation="6" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.121569 0 0 0 0 0.117647 0 0 0 0 0.345098 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_126_227"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_126_227"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_126_227"
                    x1="334.832"
                    y1="387.358"
                    x2="227.809"
                    y2="-30.6881"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#6E6CCF" />
                    <stop offset="1" stopColor="#FB8873" />
                  </linearGradient>
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
            </div>

            <div className={`${s.Slide} ${s.Slide__3}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 315 394"
                fill="none"
                preserveAspectRatio="none"
                className={s.Slide_Background}
              >
                <g filter="url(#filter0_d_126_228)">
                  <mask id="path-1-inside-1_126_228" fill="white">
                    <path d="M10 39C10 21.8792 23.8792 8 41 8H270C287.121 8 301 21.8792 301 39V347C301 364.121 287.121 378 270 378H41C23.8792 378 10 364.121 10 347V39Z" />
                  </mask>
                  <path
                    d="M10 39C10 21.8792 23.8792 8 41 8H270C287.121 8 301 21.8792 301 39V347C301 364.121 287.121 378 270 378H41C23.8792 378 10 364.121 10 347V39Z"
                    fill="white"
                  />
                  <path
                    d="M12 39C12 22.9837 24.9837 10 41 10V6C22.7746 6 8 20.7746 8 39H12ZM41 10H270V6H41V10ZM270 10C286.016 10 299 22.9837 299 39H303C303 20.7746 288.225 6 270 6V10ZM299 39V347H303V39H299ZM299 347C299 363.016 286.016 376 270 376V380C288.225 380 303 365.225 303 347H299ZM270 376H41V380H270V376ZM41 376C24.9838 376 12 363.016 12 347H8C8 365.225 22.7746 380 41 380V376ZM12 347V39H8V347H12Z"
                    fill="#6D6BCE"
                    fillOpacity="0.26"
                    mask="url(#path-1-inside-1_126_228)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_126_228"
                    x="0"
                    y="0"
                    width="315"
                    height="394"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="2" dy="4" />
                    <feGaussianBlur stdDeviation="6" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.121569 0 0 0 0 0.117647 0 0 0 0 0.345098 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_126_228"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_126_228"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
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
            </div>
          </div>
        </div> */}

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
