import React from 'react';
import s from './Bonuses.module.scss';
import { BaseContainer, BaseText } from '@base/index';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Bonuses: React.FC = () => {
  return (
    <section className={s.Bonuses}>
      <BaseContainer className={s.Bonuses_Container}>
        <BaseText as="h2" className={s.Bonuses_Title}>
          This gives a number of bonuses
        </BaseText>

        <Swiper
          className={s.Bonuses_Slider}
          wrapperClass="Bonuses_Slider"
          modules={[Pagination]}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 14,
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
              viewBox="0 0 291 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${s.Number} ${s.Number__Default}`}
            >
              <g clipPath="url(#clip0_1834_9206)">
                <path
                  d="M109.639 132C97.2325 132 86.8721 129.186 78.5581 123.558C70.2442 117.802 64.0407 110 59.9477 100.151C55.9826 90.1744 54 78.7907 54 66C54 53.2093 55.9826 41.8895 59.9477 32.0407C64.0407 22.064 70.2442 14.2616 78.5581 8.63372C86.8721 2.87791 97.2325 0 109.639 0C122.174 0 132.535 2.87791 140.721 8.63372C149.035 14.2616 155.174 22.064 159.139 32.0407C163.232 41.8895 165.279 53.2093 165.279 66C165.279 78.7907 163.232 90.1744 159.139 100.151C155.174 110 149.035 117.802 140.721 123.558C132.535 129.186 122.174 132 109.639 132ZM109.639 105.14C114.372 105.14 118.337 103.797 121.535 101.11C124.733 98.4244 127.227 94.2035 129.017 88.4477C130.936 82.6919 131.895 75.2093 131.895 66C131.895 56.6628 130.936 49.1802 129.017 43.5523C127.227 37.7965 124.733 33.5756 121.535 30.8895C118.337 28.2035 114.372 26.8605 109.639 26.8605C105.035 26.8605 101.006 28.2035 97.5523 30.8895C94.2267 33.5756 91.6686 37.7965 89.8779 43.5523C88.2151 49.1802 87.3837 56.6628 87.3837 66C87.3837 75.2093 88.2151 82.6919 89.8779 88.4477C91.6686 94.2035 94.2267 98.4244 97.5523 101.11C101.006 103.797 105.035 105.14 109.639 105.14Z"
                  fill="white"
                />
                <path
                  d="M207.191 130.081C204.982 130.081 203.191 128.291 203.191 126.081V41.9377C203.191 38.9711 200.075 37.0368 197.416 38.3529L187.507 43.2587C185.485 44.2596 183.036 43.3914 182.096 41.3405L174.869 25.5723C173.971 23.6147 174.785 21.2981 176.709 20.3314L212.512 2.34432C213.069 2.06439 213.684 1.9186 214.308 1.9186H232.191C234.4 1.9186 236.191 3.70946 236.191 5.9186V126.081C236.191 128.291 234.4 130.081 232.191 130.081H207.191Z"
                  fill="white"
                />
                <path
                  d="M79.1187 9.46183L79.1187 9.46188L79.1273 9.45592C87.2394 3.83989 97.3892 1 109.639 1C122.021 1 132.166 3.84128 140.146 9.45175L140.153 9.45686L140.16 9.46183C148.296 14.9693 154.314 22.6061 158.21 32.41L158.213 32.4173L158.216 32.4245C162.249 42.13 164.279 53.3153 164.279 66C164.279 78.6843 162.25 89.9355 158.214 99.7716L158.212 99.7777C154.316 109.454 148.297 117.096 140.153 122.735C132.173 128.221 122.025 131 109.639 131C97.387 131 87.2353 128.223 79.1228 122.733C70.9797 117.094 64.897 109.451 60.8741 99.7746C56.9656 89.9373 55 78.6848 55 66C55 53.313 56.9663 42.1249 60.8741 32.4171C64.8982 22.6099 70.9809 14.9705 79.1187 9.46183ZM96.9384 30.1002L96.9311 30.1058L96.924 30.1116C93.3931 32.9634 90.7494 37.3849 88.923 43.2553L88.9209 43.2621L88.9189 43.269C87.2177 49.0266 86.3837 56.6164 86.3837 66C86.3837 75.2586 87.2183 82.8445 88.9172 88.7252L88.92 88.735L88.923 88.7447C90.7494 94.6151 93.3931 99.0366 96.924 101.888L96.9311 101.894L96.9384 101.9C100.577 104.73 104.825 106.14 109.639 106.14C114.574 106.14 118.776 104.734 122.178 101.876C125.572 99.0254 128.146 94.6114 129.969 88.7545C131.932 82.8596 132.895 75.2621 132.895 66C132.895 56.6151 131.934 49.0144 129.968 43.2424C128.145 37.387 125.571 32.9741 122.178 30.1238C118.776 27.2663 114.574 25.8605 109.639 25.8605C104.825 25.8605 100.577 27.2701 96.9384 30.1002ZM204.191 126.081V41.9377C204.191 38.2295 200.296 35.8115 196.973 37.4567L187.063 42.3625C185.547 43.1132 183.71 42.462 183.005 40.9238L175.778 25.1557C175.105 23.6875 175.715 21.95 177.158 21.225L212.961 3.23789C213.379 3.02794 213.84 2.9186 214.308 2.9186H232.191C233.848 2.9186 235.191 4.26175 235.191 5.9186V126.081C235.191 127.738 233.848 129.081 232.191 129.081H207.191C205.534 129.081 204.191 127.738 204.191 126.081Z"
                  stroke="#6D6BCE"
                  strokeOpacity="0.26"
                  strokeWidth="2"
                />
              </g>
              <defs>
                <clipPath id="clip0_1834_9206">
                  <rect width="291" height="96" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <svg
              viewBox="0 0 291 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${s.Number} ${s.Number__Gradient}`}
            >
              <g clipPath="url(#clip0_1834_9208)">
                <path
                  d="M79.1187 9.46183L79.1187 9.46188L79.1273 9.45592C87.2394 3.83989 97.3892 1 109.639 1C122.021 1 132.166 3.84128 140.146 9.45175L140.153 9.45686L140.16 9.46183C148.296 14.9693 154.314 22.6061 158.21 32.41L158.213 32.4173L158.216 32.4245C162.249 42.13 164.279 53.3153 164.279 66C164.279 78.6843 162.25 89.9355 158.214 99.7716L158.212 99.7777C154.316 109.454 148.297 117.096 140.153 122.735C132.173 128.221 122.025 131 109.639 131C97.387 131 87.2353 128.223 79.1228 122.733C70.9797 117.094 64.897 109.451 60.8741 99.7746C56.9656 89.9373 55 78.6848 55 66C55 53.313 56.9663 42.1249 60.8741 32.4171C64.8982 22.6099 70.9809 14.9705 79.1187 9.46183ZM96.9384 30.1002L96.9311 30.1058L96.924 30.1116C93.3931 32.9634 90.7494 37.3849 88.923 43.2553L88.9209 43.2621L88.9189 43.269C87.2177 49.0266 86.3837 56.6164 86.3837 66C86.3837 75.2586 87.2183 82.8445 88.9172 88.7252L88.92 88.735L88.923 88.7447C90.7494 94.6151 93.3931 99.0366 96.924 101.888L96.9311 101.894L96.9384 101.9C100.577 104.73 104.825 106.14 109.639 106.14C114.574 106.14 118.776 104.734 122.178 101.876C125.572 99.0254 128.146 94.6114 129.969 88.7545C131.932 82.8596 132.895 75.2621 132.895 66C132.895 56.6151 131.934 49.0144 129.968 43.2424C128.145 37.387 125.571 32.9741 122.178 30.1238C118.776 27.2663 114.574 25.8605 109.639 25.8605C104.825 25.8605 100.577 27.2701 96.9384 30.1002ZM204.191 126.081V41.9377C204.191 38.2295 200.296 35.8115 196.973 37.4567L187.063 42.3625C185.547 43.1132 183.71 42.462 183.005 40.9238L175.778 25.1557C175.105 23.6875 175.715 21.95 177.158 21.225L212.961 3.23789C213.379 3.02794 213.84 2.9186 214.308 2.9186H232.191C233.848 2.9186 235.191 4.26175 235.191 5.9186V126.081C235.191 127.738 233.848 129.081 232.191 129.081H207.191C205.534 129.081 204.191 127.738 204.191 126.081Z"
                  fill="white"
                  stroke="url(#paint0_linear_1834_9208)"
                  strokeWidth="2"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_1834_9208"
                  x1="290.256"
                  y1="468.5"
                  x2="344.728"
                  y2="44.2266"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6E6CCF" />
                  <stop offset="1" stopColor="#FB8873" />
                </linearGradient>
                <clipPath id="clip0_1834_9208">
                  <rect width="291" height="96" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <div className={s.Slide_Title}>
              <p>
                The ability to update and replace individual services without
                reworking the rest of the project
              </p>
            </div>

            <div className={s.Slide_ForExample}>
              <p>For example:</p>
            </div>

            <div className={s.Slide_Description}>
              <p>
                Optimize the catalog on the site so that users do not notice it.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className={`${s.Slide} ${s.Slide__2}`}>
            <div className={`${s.Background} ${s.Background__Default}`}></div>
            <div className={`${s.Background} ${s.Background__Gradient}`}></div>
            <div className={`${s.Background} ${s.Background__White}`}></div>

            <svg
              viewBox="0 0 291 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${s.Number} ${s.Number__Default}`}
            >
              <g clipPath="url(#clip0_1834_9210)">
                <path
                  d="M96.6395 132C84.2326 132 73.8721 129.186 65.5581 123.558C57.2442 117.802 51.0407 110 46.9477 100.151C42.9826 90.1744 41 78.7907 41 66C41 53.2093 42.9826 41.8895 46.9477 32.0407C51.0407 22.0639 57.2442 14.2616 65.5581 8.63372C73.8721 2.87791 84.2326 0 96.6395 0C109.174 0 119.535 2.87791 127.721 8.63372C136.035 14.2616 142.174 22.0639 146.14 32.0407C150.233 41.8895 152.279 53.2093 152.279 66C152.279 78.7907 150.233 90.1744 146.14 100.151C142.174 110 136.035 117.802 127.721 123.558C119.535 129.186 109.174 132 96.6395 132ZM96.6395 105.14C101.372 105.14 105.337 103.797 108.535 101.11C111.733 98.4244 114.227 94.2035 116.017 88.4477C117.936 82.6919 118.895 75.2093 118.895 66C118.895 56.6628 117.936 49.1802 116.017 43.5523C114.227 37.7965 111.733 33.5756 108.535 30.8895C105.337 28.2035 101.372 26.8605 96.6395 26.8605C92.0349 26.8605 88.0058 28.2035 84.5523 30.8895C81.2267 33.5756 78.6686 37.7965 76.8779 43.5523C75.2151 49.1802 74.3837 56.6628 74.3837 66C74.3837 75.2093 75.2151 82.6919 76.8779 88.4477C78.6686 94.2035 81.2267 98.4244 84.5523 101.11C88.0058 103.797 92.0349 105.14 96.6395 105.14Z"
                  fill="white"
                />
                <path
                  d="M160.603 130.081C158.394 130.081 156.603 128.291 156.603 126.081V105.005C156.603 103.87 157.086 102.788 157.931 102.029L205.528 59.2849C208.981 55.9593 211.539 52.7616 213.202 49.6919C214.865 46.6221 215.696 43.6802 215.696 40.8663C215.696 37.9244 214.993 35.4302 213.586 33.3837C212.307 31.2093 210.452 29.6105 208.022 28.5872C205.592 27.436 202.714 26.8605 199.388 26.8605C194.528 26.8605 189.667 27.9477 184.807 30.1221C180.861 31.7836 176.198 34.1195 170.819 37.1298C168.748 38.2889 166.116 37.4473 165.142 35.2828L157.925 19.2449C157.153 17.5304 157.676 15.5033 159.216 14.424C165.721 9.86387 172.077 6.39888 178.284 4.02907C185.319 1.34302 192.929 0 201.115 0C210.58 0 218.894 1.59884 226.057 4.79651C233.348 7.99419 238.976 12.6628 242.941 18.8023C247.034 24.814 249.08 32.1686 249.08 40.8663C249.08 47.6453 247.162 54.1046 243.324 60.2442C239.487 66.3837 233.22 73.0988 224.522 80.3895L206.197 96.1917C203.389 98.613 205.101 103.221 208.809 103.221H246.999C249.208 103.221 250.999 105.012 250.999 107.221V126.081C250.999 128.291 249.208 130.081 246.999 130.081H160.603Z"
                  fill="white"
                />
                <path
                  d="M66.1187 9.46183L66.1187 9.46188L66.1273 9.45592C74.2394 3.83989 84.3892 1 96.6395 1C109.021 1 119.166 3.84128 127.146 9.45175L127.153 9.45686L127.16 9.46183C135.296 14.9693 141.314 22.6061 145.21 32.41L145.213 32.4173L145.216 32.4245C149.25 42.13 151.279 53.3153 151.279 66C151.279 78.6843 149.25 89.9355 145.214 99.7716L145.212 99.7777C141.316 109.455 135.297 117.097 127.152 122.736C119.172 128.221 109.024 131 96.6395 131C84.387 131 74.2353 128.223 66.1229 122.733C57.9797 117.094 51.897 109.451 47.8741 99.7746C43.9656 89.9373 42 78.6848 42 66C42 53.313 43.9663 42.1249 47.8741 32.4171C51.8982 22.6099 57.9809 14.9705 66.1187 9.46183ZM83.9384 30.1002L83.9311 30.1058L83.924 30.1116C80.3932 32.9634 77.7494 37.3849 75.923 43.2553L75.9209 43.2621L75.9189 43.269C74.2178 49.0266 73.3837 56.6164 73.3837 66C73.3837 75.2586 74.2183 82.8445 75.9172 88.7252L75.92 88.735L75.923 88.7447C77.7494 94.6151 80.3932 99.0366 83.924 101.888L83.9311 101.894L83.9384 101.9C87.577 104.73 91.825 106.14 96.6395 106.14C101.574 106.14 105.776 104.734 109.178 101.876C112.572 99.0253 115.146 94.6113 116.969 88.7543C118.933 82.8596 119.895 75.2621 119.895 66C119.895 56.6151 118.934 49.0144 116.968 43.2424C115.145 37.387 112.571 32.9741 109.178 30.1238C105.776 27.2663 101.574 25.8605 96.6395 25.8605C91.825 25.8605 87.577 27.2701 83.9384 30.1002ZM206.196 60.0289L206.209 60.0173L206.221 60.0052C209.723 56.6329 212.355 53.355 214.082 50.1681C215.805 46.9868 216.696 43.882 216.696 40.8663C216.696 37.7737 215.958 35.0827 214.43 32.8463C213.041 30.499 211.028 28.7725 208.43 27.6741C205.843 26.4527 202.819 25.8605 199.388 25.8605C194.378 25.8605 189.382 26.9814 184.409 29.2048C180.419 30.8851 175.725 33.2383 170.331 36.2571C168.761 37.1355 166.782 36.4912 166.054 34.8724L158.837 18.8345C158.256 17.5428 158.656 16.0373 159.79 15.2429C166.24 10.7211 172.524 7.29867 178.64 4.96329C185.552 2.32437 193.04 1 201.115 1C210.468 1 218.638 2.57981 225.649 5.70966L225.655 5.7123C232.783 8.83856 238.251 13.3847 242.101 19.3448L242.107 19.3551L242.114 19.3651C246.073 25.1805 248.08 32.3293 248.08 40.8663C248.08 47.4451 246.221 53.7223 242.476 59.7142C238.717 65.7289 232.537 72.3662 223.88 79.6231L223.869 79.6322L205.544 95.4344C202.034 98.461 204.174 104.221 208.809 104.221H246.999C248.656 104.221 249.999 105.564 249.999 107.221V126.081C249.999 127.738 248.656 129.081 246.999 129.081H160.603C158.947 129.081 157.603 127.738 157.603 126.081V105.005C157.603 104.153 157.965 103.342 158.599 102.773L206.196 60.0289Z"
                  stroke="#6D6BCE"
                  strokeOpacity="0.26"
                  strokeWidth="2"
                />
              </g>
              <defs>
                <clipPath id="clip0_1834_9210">
                  <rect width="291" height="96" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <svg
              viewBox="0 0 291 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${s.Number} ${s.Number__Gradient}`}
            >
              <g clipPath="url(#clip0_1834_9212)">
                <path
                  d="M66.1187 9.46183L66.1187 9.46188L66.1273 9.45592C74.2394 3.83989 84.3892 1 96.6395 1C109.021 1 119.166 3.84128 127.146 9.45175L127.153 9.45686L127.16 9.46183C135.296 14.9693 141.314 22.6061 145.21 32.41L145.213 32.4173L145.216 32.4245C149.25 42.13 151.279 53.3153 151.279 66C151.279 78.6843 149.25 89.9355 145.214 99.7716L145.212 99.7777C141.316 109.455 135.297 117.097 127.152 122.736C119.172 128.221 109.024 131 96.6395 131C84.387 131 74.2353 128.223 66.1229 122.733C57.9797 117.094 51.897 109.451 47.8741 99.7746C43.9656 89.9373 42 78.6848 42 66C42 53.313 43.9663 42.1249 47.8741 32.4171C51.8982 22.6099 57.9809 14.9705 66.1187 9.46183ZM83.9384 30.1002L83.9311 30.1058L83.924 30.1116C80.3932 32.9634 77.7494 37.3849 75.923 43.2553L75.9209 43.2621L75.9189 43.269C74.2178 49.0266 73.3837 56.6164 73.3837 66C73.3837 75.2586 74.2183 82.8445 75.9172 88.7252L75.92 88.735L75.923 88.7447C77.7494 94.6151 80.3932 99.0366 83.924 101.888L83.9311 101.894L83.9384 101.9C87.577 104.73 91.825 106.14 96.6395 106.14C101.574 106.14 105.776 104.734 109.178 101.876C112.572 99.0253 115.146 94.6113 116.969 88.7543C118.933 82.8596 119.895 75.2621 119.895 66C119.895 56.6151 118.934 49.0144 116.968 43.2424C115.145 37.387 112.571 32.9741 109.178 30.1238C105.776 27.2663 101.574 25.8605 96.6395 25.8605C91.825 25.8605 87.577 27.2701 83.9384 30.1002ZM206.196 60.0289L206.209 60.0173L206.221 60.0052C209.723 56.6329 212.355 53.355 214.082 50.1681C215.805 46.9868 216.696 43.882 216.696 40.8663C216.696 37.7737 215.958 35.0827 214.43 32.8463C213.041 30.499 211.028 28.7725 208.43 27.6741C205.843 26.4527 202.819 25.8605 199.388 25.8605C194.378 25.8605 189.382 26.9814 184.409 29.2048C180.419 30.8851 175.725 33.2383 170.331 36.2571C168.761 37.1355 166.782 36.4912 166.054 34.8724L158.837 18.8345C158.256 17.5428 158.656 16.0373 159.79 15.2429C166.24 10.7211 172.524 7.29867 178.64 4.96329C185.552 2.32437 193.04 1 201.115 1C210.468 1 218.638 2.57981 225.649 5.70966L225.655 5.7123C232.783 8.83856 238.251 13.3847 242.101 19.3448L242.107 19.3551L242.114 19.3651C246.073 25.1805 248.08 32.3293 248.08 40.8663C248.08 47.4451 246.221 53.7223 242.476 59.7142C238.717 65.7289 232.537 72.3662 223.88 79.6231L223.869 79.6322L205.544 95.4344C202.034 98.461 204.174 104.221 208.809 104.221H246.999C248.656 104.221 249.999 105.564 249.999 107.221V126.081C249.999 127.738 248.656 129.081 246.999 129.081H160.603C158.947 129.081 157.603 127.738 157.603 126.081V105.005C157.603 104.153 157.965 103.342 158.599 102.773L206.196 60.0289Z"
                  fill="white"
                  stroke="url(#paint0_linear_1834_9212)"
                  strokeWidth="2"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_1834_9212"
                  x1="313.316"
                  y1="468.5"
                  x2="360.765"
                  y2="42.5182"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6E6CCF" />
                  <stop offset="1" stopColor="#FB8873" />
                </linearGradient>
                <clipPath id="clip0_1834_9212">
                  <rect width="291" height="96" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <div className={s.Slide_Title}>
              <p>
                Ability to run several identical services simultaneously to cope
                with peak loads
              </p>
            </div>
            <div className={s.Slide_ForExample}>
              <p>For example:</p>
            </div>
            <div className={s.Slide_Description}>
              <p>Add a couple of extra servers on Black Friday.</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className={`${s.Slide} ${s.Slide__3}`}>
            <div className={`${s.Background} ${s.Background__Default}`}></div>
            <div className={`${s.Background} ${s.Background__Gradient}`}></div>
            <div className={`${s.Background} ${s.Background__White}`}></div>

            <svg
              viewBox="0 0 210 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${s.Number} ${s.Number__Default}`}
            >
              <mask id="path-1-inside-1_1834_9215" fill="white">
                <path d="M55.6395 132C43.2326 132 32.8721 129.186 24.5581 123.558C16.2442 117.802 10.0407 110 5.94767 100.151C1.98256 90.1744 0 78.7907 0 66C0 53.2093 1.98256 41.8895 5.94767 32.0407C10.0407 22.0639 16.2442 14.2616 24.5581 8.63372C32.8721 2.87791 43.2326 0 55.6395 0C68.1744 0 78.5349 2.87791 86.7209 8.63372C95.0349 14.2616 101.174 22.0639 105.14 32.0407C109.233 41.8895 111.279 53.2093 111.279 66C111.279 78.7907 109.233 90.1744 105.14 100.151C101.174 110 95.0349 117.802 86.7209 123.558C78.5349 129.186 68.1744 132 55.6395 132ZM55.6395 105.14C60.3721 105.14 64.3372 103.797 67.5349 101.11C70.7326 98.4244 73.2267 94.2035 75.0174 88.4477C76.936 82.6919 77.8953 75.2093 77.8953 66C77.8953 56.6628 76.936 49.1802 75.0174 43.5523C73.2267 37.7965 70.7326 33.5756 67.5349 30.8895C64.3372 28.2035 60.3721 26.8605 55.6395 26.8605C51.0349 26.8605 47.0058 28.2035 43.5523 30.8895C40.2267 33.5756 37.6686 37.7965 35.8779 43.5523C34.2151 49.1802 33.3837 56.6628 33.3837 66C33.3837 75.2093 34.2151 82.6919 35.8779 88.4477C37.6686 94.2035 40.2267 98.4244 43.5523 101.11C47.0058 103.797 51.0349 105.14 55.6395 105.14Z" />
                <path d="M158.871 132C150.301 132 142.051 130.657 134.121 127.971C127.142 125.494 120.46 122.027 114.075 117.57C112.541 116.498 112.027 114.479 112.795 112.772L120 96.7618C120.981 94.5814 123.641 93.7489 125.731 94.9098C131.537 98.1337 136.955 100.584 141.987 102.262C148.255 104.18 153.883 105.14 158.871 105.14C163.987 105.14 168.144 103.924 171.342 101.494C174.667 99.0639 176.33 95.5465 176.33 90.9419C176.33 86.3372 174.667 82.8198 171.342 80.3895C168.144 77.9593 163.987 76.7442 158.871 76.7442H143.685C141.476 76.7442 139.685 74.9533 139.685 72.7442V55.4186C139.685 53.2095 141.476 51.4186 143.685 51.4186H158.871C163.348 51.4186 167.057 50.4593 169.999 48.5407C172.941 46.4942 174.412 43.3605 174.412 39.1395C174.412 34.9186 172.941 31.8488 169.999 29.9302C167.057 27.8837 163.348 26.8605 158.871 26.8605C154.65 26.8605 149.534 27.8837 143.522 29.9302C138.703 31.5016 133.412 33.8881 127.65 37.0897C125.56 38.2509 122.9 37.4186 121.919 35.2382L114.71 19.2199C113.944 17.5168 114.453 15.5021 115.98 14.4263C122.453 9.86502 129.076 6.39928 135.848 4.02907C143.522 1.34302 151.197 0 158.871 0C168.464 0 176.906 1.53488 184.197 4.60465C191.615 7.54651 197.371 11.7674 201.464 17.2674C205.685 22.6395 207.795 29.0988 207.795 36.6454C207.795 43.0407 206.005 48.6047 202.423 53.3372C200.785 55.5214 198.802 57.4753 196.473 59.199C193.541 61.3692 193.562 66.734 196.557 68.8159C199.526 70.8799 201.993 73.2669 203.958 75.9767C207.795 80.9651 209.714 86.7849 209.714 93.4361C209.714 100.983 207.604 107.634 203.383 113.39C199.162 119.145 193.214 123.686 185.54 127.012C177.993 130.337 169.104 132 158.871 132Z" />
              </mask>
              <path
                d="M55.6395 132C43.2326 132 32.8721 129.186 24.5581 123.558C16.2442 117.802 10.0407 110 5.94767 100.151C1.98256 90.1744 0 78.7907 0 66C0 53.2093 1.98256 41.8895 5.94767 32.0407C10.0407 22.0639 16.2442 14.2616 24.5581 8.63372C32.8721 2.87791 43.2326 0 55.6395 0C68.1744 0 78.5349 2.87791 86.7209 8.63372C95.0349 14.2616 101.174 22.0639 105.14 32.0407C109.233 41.8895 111.279 53.2093 111.279 66C111.279 78.7907 109.233 90.1744 105.14 100.151C101.174 110 95.0349 117.802 86.7209 123.558C78.5349 129.186 68.1744 132 55.6395 132ZM55.6395 105.14C60.3721 105.14 64.3372 103.797 67.5349 101.11C70.7326 98.4244 73.2267 94.2035 75.0174 88.4477C76.936 82.6919 77.8953 75.2093 77.8953 66C77.8953 56.6628 76.936 49.1802 75.0174 43.5523C73.2267 37.7965 70.7326 33.5756 67.5349 30.8895C64.3372 28.2035 60.3721 26.8605 55.6395 26.8605C51.0349 26.8605 47.0058 28.2035 43.5523 30.8895C40.2267 33.5756 37.6686 37.7965 35.8779 43.5523C34.2151 49.1802 33.3837 56.6628 33.3837 66C33.3837 75.2093 34.2151 82.6919 35.8779 88.4477C37.6686 94.2035 40.2267 98.4244 43.5523 101.11C47.0058 103.797 51.0349 105.14 55.6395 105.14Z"
                fill="white"
              />
              <path
                d="M158.871 132C150.301 132 142.051 130.657 134.121 127.971C127.142 125.494 120.46 122.027 114.075 117.57C112.541 116.498 112.027 114.479 112.795 112.772L120 96.7618C120.981 94.5814 123.641 93.7489 125.731 94.9098C131.537 98.1337 136.955 100.584 141.987 102.262C148.255 104.18 153.883 105.14 158.871 105.14C163.987 105.14 168.144 103.924 171.342 101.494C174.667 99.0639 176.33 95.5465 176.33 90.9419C176.33 86.3372 174.667 82.8198 171.342 80.3895C168.144 77.9593 163.987 76.7442 158.871 76.7442H143.685C141.476 76.7442 139.685 74.9533 139.685 72.7442V55.4186C139.685 53.2095 141.476 51.4186 143.685 51.4186H158.871C163.348 51.4186 167.057 50.4593 169.999 48.5407C172.941 46.4942 174.412 43.3605 174.412 39.1395C174.412 34.9186 172.941 31.8488 169.999 29.9302C167.057 27.8837 163.348 26.8605 158.871 26.8605C154.65 26.8605 149.534 27.8837 143.522 29.9302C138.703 31.5016 133.412 33.8881 127.65 37.0897C125.56 38.2509 122.9 37.4186 121.919 35.2382L114.71 19.2199C113.944 17.5168 114.453 15.5021 115.98 14.4263C122.453 9.86502 129.076 6.39928 135.848 4.02907C143.522 1.34302 151.197 0 158.871 0C168.464 0 176.906 1.53488 184.197 4.60465C191.615 7.54651 197.371 11.7674 201.464 17.2674C205.685 22.6395 207.795 29.0988 207.795 36.6454C207.795 43.0407 206.005 48.6047 202.423 53.3372C200.785 55.5214 198.802 57.4753 196.473 59.199C193.541 61.3692 193.562 66.734 196.557 68.8159C199.526 70.8799 201.993 73.2669 203.958 75.9767C207.795 80.9651 209.714 86.7849 209.714 93.4361C209.714 100.983 207.604 107.634 203.383 113.39C199.162 119.145 193.214 123.686 185.54 127.012C177.993 130.337 169.104 132 158.871 132Z"
                fill="white"
              />
              <path
                d="M55.6395 132C43.2326 132 32.8721 129.186 24.5581 123.558C16.2442 117.802 10.0407 110 5.94767 100.151C1.98256 90.1744 0 78.7907 0 66C0 53.2093 1.98256 41.8895 5.94767 32.0407C10.0407 22.0639 16.2442 14.2616 24.5581 8.63372C32.8721 2.87791 43.2326 0 55.6395 0C68.1744 0 78.5349 2.87791 86.7209 8.63372C95.0349 14.2616 101.174 22.0639 105.14 32.0407C109.233 41.8895 111.279 53.2093 111.279 66C111.279 78.7907 109.233 90.1744 105.14 100.151C101.174 110 95.0349 117.802 86.7209 123.558C78.5349 129.186 68.1744 132 55.6395 132ZM55.6395 105.14C60.3721 105.14 64.3372 103.797 67.5349 101.11C70.7326 98.4244 73.2267 94.2035 75.0174 88.4477C76.936 82.6919 77.8953 75.2093 77.8953 66C77.8953 56.6628 76.936 49.1802 75.0174 43.5523C73.2267 37.7965 70.7326 33.5756 67.5349 30.8895C64.3372 28.2035 60.3721 26.8605 55.6395 26.8605C51.0349 26.8605 47.0058 28.2035 43.5523 30.8895C40.2267 33.5756 37.6686 37.7965 35.8779 43.5523C34.2151 49.1802 33.3837 56.6628 33.3837 66C33.3837 75.2093 34.2151 82.6919 35.8779 88.4477C37.6686 94.2035 40.2267 98.4244 43.5523 101.11C47.0058 103.797 51.0349 105.14 55.6395 105.14Z"
                stroke="#6D6BCE"
                strokeOpacity="0.26"
                strokeWidth="4"
                mask="url(#path-1-inside-1_1834_9215)"
              />
              <path
                d="M158.871 132C150.301 132 142.051 130.657 134.121 127.971C127.142 125.494 120.46 122.027 114.075 117.57C112.541 116.498 112.027 114.479 112.795 112.772L120 96.7618C120.981 94.5814 123.641 93.7489 125.731 94.9098C131.537 98.1337 136.955 100.584 141.987 102.262C148.255 104.18 153.883 105.14 158.871 105.14C163.987 105.14 168.144 103.924 171.342 101.494C174.667 99.0639 176.33 95.5465 176.33 90.9419C176.33 86.3372 174.667 82.8198 171.342 80.3895C168.144 77.9593 163.987 76.7442 158.871 76.7442H143.685C141.476 76.7442 139.685 74.9533 139.685 72.7442V55.4186C139.685 53.2095 141.476 51.4186 143.685 51.4186H158.871C163.348 51.4186 167.057 50.4593 169.999 48.5407C172.941 46.4942 174.412 43.3605 174.412 39.1395C174.412 34.9186 172.941 31.8488 169.999 29.9302C167.057 27.8837 163.348 26.8605 158.871 26.8605C154.65 26.8605 149.534 27.8837 143.522 29.9302C138.703 31.5016 133.412 33.8881 127.65 37.0897C125.56 38.2509 122.9 37.4186 121.919 35.2382L114.71 19.2199C113.944 17.5168 114.453 15.5021 115.98 14.4263C122.453 9.86502 129.076 6.39928 135.848 4.02907C143.522 1.34302 151.197 0 158.871 0C168.464 0 176.906 1.53488 184.197 4.60465C191.615 7.54651 197.371 11.7674 201.464 17.2674C205.685 22.6395 207.795 29.0988 207.795 36.6454C207.795 43.0407 206.005 48.6047 202.423 53.3372C200.785 55.5214 198.802 57.4753 196.473 59.199C193.541 61.3692 193.562 66.734 196.557 68.8159C199.526 70.8799 201.993 73.2669 203.958 75.9767C207.795 80.9651 209.714 86.7849 209.714 93.4361C209.714 100.983 207.604 107.634 203.383 113.39C199.162 119.145 193.214 123.686 185.54 127.012C177.993 130.337 169.104 132 158.871 132Z"
                stroke="#6D6BCE"
                strokeOpacity="0.26"
                strokeWidth="4"
                mask="url(#path-1-inside-1_1834_9215)"
              />
            </svg>

            <svg
              viewBox="0 0 210 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${s.Number} ${s.Number__Gradient}`}
            >
              <mask id="path-1-inside-1_1834_9217" fill="white">
                <path d="M55.6395 132C43.2326 132 32.8721 129.186 24.5581 123.558C16.2442 117.802 10.0407 110 5.94767 100.151C1.98256 90.1744 0 78.7907 0 66C0 53.2093 1.98256 41.8895 5.94767 32.0407C10.0407 22.0639 16.2442 14.2616 24.5581 8.63372C32.8721 2.87791 43.2326 0 55.6395 0C68.1744 0 78.5349 2.87791 86.7209 8.63372C95.0349 14.2616 101.174 22.0639 105.14 32.0407C109.233 41.8895 111.279 53.2093 111.279 66C111.279 78.7907 109.233 90.1744 105.14 100.151C101.174 110 95.0349 117.802 86.7209 123.558C78.5349 129.186 68.1744 132 55.6395 132ZM55.6395 105.14C60.3721 105.14 64.3372 103.797 67.5349 101.11C70.7326 98.4244 73.2267 94.2035 75.0174 88.4477C76.936 82.6919 77.8953 75.2093 77.8953 66C77.8953 56.6628 76.936 49.1802 75.0174 43.5523C73.2267 37.7965 70.7326 33.5756 67.5349 30.8895C64.3372 28.2035 60.3721 26.8605 55.6395 26.8605C51.0349 26.8605 47.0058 28.2035 43.5523 30.8895C40.2267 33.5756 37.6686 37.7965 35.8779 43.5523C34.2151 49.1802 33.3837 56.6628 33.3837 66C33.3837 75.2093 34.2151 82.6919 35.8779 88.4477C37.6686 94.2035 40.2267 98.4244 43.5523 101.11C47.0058 103.797 51.0349 105.14 55.6395 105.14Z" />
                <path d="M158.871 132C150.301 132 142.051 130.657 134.121 127.971C127.142 125.494 120.46 122.027 114.075 117.57C112.541 116.498 112.027 114.479 112.795 112.772L120 96.7618C120.981 94.5814 123.641 93.7489 125.731 94.9098C131.537 98.1337 136.955 100.584 141.987 102.262C148.255 104.18 153.883 105.14 158.871 105.14C163.987 105.14 168.144 103.924 171.342 101.494C174.667 99.0639 176.33 95.5465 176.33 90.9419C176.33 86.3372 174.667 82.8198 171.342 80.3895C168.144 77.9593 163.987 76.7442 158.871 76.7442H143.685C141.476 76.7442 139.685 74.9533 139.685 72.7442V55.4186C139.685 53.2095 141.476 51.4186 143.685 51.4186H158.871C163.348 51.4186 167.057 50.4593 169.999 48.5407C172.941 46.4942 174.412 43.3605 174.412 39.1395C174.412 34.9186 172.941 31.8488 169.999 29.9302C167.057 27.8837 163.348 26.8605 158.871 26.8605C154.65 26.8605 149.534 27.8837 143.522 29.9302C138.703 31.5016 133.412 33.8881 127.65 37.0897C125.56 38.2509 122.9 37.4186 121.919 35.2382L114.71 19.2199C113.944 17.5168 114.453 15.5021 115.98 14.4263C122.453 9.86502 129.076 6.39928 135.848 4.02907C143.522 1.34302 151.197 0 158.871 0C168.464 0 176.906 1.53488 184.197 4.60465C191.615 7.54651 197.371 11.7674 201.464 17.2674C205.685 22.6395 207.795 29.0988 207.795 36.6454C207.795 43.0407 206.005 48.6047 202.423 53.3372C200.785 55.5214 198.802 57.4753 196.473 59.199C193.541 61.3692 193.562 66.734 196.557 68.8159C199.526 70.8799 201.993 73.2669 203.958 75.9767C207.795 80.9651 209.714 86.7849 209.714 93.4361C209.714 100.983 207.604 107.634 203.383 113.39C199.162 119.145 193.214 123.686 185.54 127.012C177.993 130.337 169.104 132 158.871 132Z" />
              </mask>
              <path
                d="M55.6395 132C43.2326 132 32.8721 129.186 24.5581 123.558C16.2442 117.802 10.0407 110 5.94767 100.151C1.98256 90.1744 0 78.7907 0 66C0 53.2093 1.98256 41.8895 5.94767 32.0407C10.0407 22.0639 16.2442 14.2616 24.5581 8.63372C32.8721 2.87791 43.2326 0 55.6395 0C68.1744 0 78.5349 2.87791 86.7209 8.63372C95.0349 14.2616 101.174 22.0639 105.14 32.0407C109.233 41.8895 111.279 53.2093 111.279 66C111.279 78.7907 109.233 90.1744 105.14 100.151C101.174 110 95.0349 117.802 86.7209 123.558C78.5349 129.186 68.1744 132 55.6395 132ZM55.6395 105.14C60.3721 105.14 64.3372 103.797 67.5349 101.11C70.7326 98.4244 73.2267 94.2035 75.0174 88.4477C76.936 82.6919 77.8953 75.2093 77.8953 66C77.8953 56.6628 76.936 49.1802 75.0174 43.5523C73.2267 37.7965 70.7326 33.5756 67.5349 30.8895C64.3372 28.2035 60.3721 26.8605 55.6395 26.8605C51.0349 26.8605 47.0058 28.2035 43.5523 30.8895C40.2267 33.5756 37.6686 37.7965 35.8779 43.5523C34.2151 49.1802 33.3837 56.6628 33.3837 66C33.3837 75.2093 34.2151 82.6919 35.8779 88.4477C37.6686 94.2035 40.2267 98.4244 43.5523 101.11C47.0058 103.797 51.0349 105.14 55.6395 105.14Z"
                fill="white"
              />
              <path
                d="M158.871 132C150.301 132 142.051 130.657 134.121 127.971C127.142 125.494 120.46 122.027 114.075 117.57C112.541 116.498 112.027 114.479 112.795 112.772L120 96.7618C120.981 94.5814 123.641 93.7489 125.731 94.9098C131.537 98.1337 136.955 100.584 141.987 102.262C148.255 104.18 153.883 105.14 158.871 105.14C163.987 105.14 168.144 103.924 171.342 101.494C174.667 99.0639 176.33 95.5465 176.33 90.9419C176.33 86.3372 174.667 82.8198 171.342 80.3895C168.144 77.9593 163.987 76.7442 158.871 76.7442H143.685C141.476 76.7442 139.685 74.9533 139.685 72.7442V55.4186C139.685 53.2095 141.476 51.4186 143.685 51.4186H158.871C163.348 51.4186 167.057 50.4593 169.999 48.5407C172.941 46.4942 174.412 43.3605 174.412 39.1395C174.412 34.9186 172.941 31.8488 169.999 29.9302C167.057 27.8837 163.348 26.8605 158.871 26.8605C154.65 26.8605 149.534 27.8837 143.522 29.9302C138.703 31.5016 133.412 33.8881 127.65 37.0897C125.56 38.2509 122.9 37.4186 121.919 35.2382L114.71 19.2199C113.944 17.5168 114.453 15.5021 115.98 14.4263C122.453 9.86502 129.076 6.39928 135.848 4.02907C143.522 1.34302 151.197 0 158.871 0C168.464 0 176.906 1.53488 184.197 4.60465C191.615 7.54651 197.371 11.7674 201.464 17.2674C205.685 22.6395 207.795 29.0988 207.795 36.6454C207.795 43.0407 206.005 48.6047 202.423 53.3372C200.785 55.5214 198.802 57.4753 196.473 59.199C193.541 61.3692 193.562 66.734 196.557 68.8159C199.526 70.8799 201.993 73.2669 203.958 75.9767C207.795 80.9651 209.714 86.7849 209.714 93.4361C209.714 100.983 207.604 107.634 203.383 113.39C199.162 119.145 193.214 123.686 185.54 127.012C177.993 130.337 169.104 132 158.871 132Z"
                fill="white"
              />
              <path
                d="M55.6395 132C43.2326 132 32.8721 129.186 24.5581 123.558C16.2442 117.802 10.0407 110 5.94767 100.151C1.98256 90.1744 0 78.7907 0 66C0 53.2093 1.98256 41.8895 5.94767 32.0407C10.0407 22.0639 16.2442 14.2616 24.5581 8.63372C32.8721 2.87791 43.2326 0 55.6395 0C68.1744 0 78.5349 2.87791 86.7209 8.63372C95.0349 14.2616 101.174 22.0639 105.14 32.0407C109.233 41.8895 111.279 53.2093 111.279 66C111.279 78.7907 109.233 90.1744 105.14 100.151C101.174 110 95.0349 117.802 86.7209 123.558C78.5349 129.186 68.1744 132 55.6395 132ZM55.6395 105.14C60.3721 105.14 64.3372 103.797 67.5349 101.11C70.7326 98.4244 73.2267 94.2035 75.0174 88.4477C76.936 82.6919 77.8953 75.2093 77.8953 66C77.8953 56.6628 76.936 49.1802 75.0174 43.5523C73.2267 37.7965 70.7326 33.5756 67.5349 30.8895C64.3372 28.2035 60.3721 26.8605 55.6395 26.8605C51.0349 26.8605 47.0058 28.2035 43.5523 30.8895C40.2267 33.5756 37.6686 37.7965 35.8779 43.5523C34.2151 49.1802 33.3837 56.6628 33.3837 66C33.3837 75.2093 34.2151 82.6919 35.8779 88.4477C37.6686 94.2035 40.2267 98.4244 43.5523 101.11C47.0058 103.797 51.0349 105.14 55.6395 105.14Z"
                stroke="url(#paint0_linear_1834_9217)"
                strokeWidth="4"
                mask="url(#path-1-inside-1_1834_9217)"
              />
              <path
                d="M158.871 132C150.301 132 142.051 130.657 134.121 127.971C127.142 125.494 120.46 122.027 114.075 117.57C112.541 116.498 112.027 114.479 112.795 112.772L120 96.7618C120.981 94.5814 123.641 93.7489 125.731 94.9098C131.537 98.1337 136.955 100.584 141.987 102.262C148.255 104.18 153.883 105.14 158.871 105.14C163.987 105.14 168.144 103.924 171.342 101.494C174.667 99.0639 176.33 95.5465 176.33 90.9419C176.33 86.3372 174.667 82.8198 171.342 80.3895C168.144 77.9593 163.987 76.7442 158.871 76.7442H143.685C141.476 76.7442 139.685 74.9533 139.685 72.7442V55.4186C139.685 53.2095 141.476 51.4186 143.685 51.4186H158.871C163.348 51.4186 167.057 50.4593 169.999 48.5407C172.941 46.4942 174.412 43.3605 174.412 39.1395C174.412 34.9186 172.941 31.8488 169.999 29.9302C167.057 27.8837 163.348 26.8605 158.871 26.8605C154.65 26.8605 149.534 27.8837 143.522 29.9302C138.703 31.5016 133.412 33.8881 127.65 37.0897C125.56 38.2509 122.9 37.4186 121.919 35.2382L114.71 19.2199C113.944 17.5168 114.453 15.5021 115.98 14.4263C122.453 9.86502 129.076 6.39928 135.848 4.02907C143.522 1.34302 151.197 0 158.871 0C168.464 0 176.906 1.53488 184.197 4.60465C191.615 7.54651 197.371 11.7674 201.464 17.2674C205.685 22.6395 207.795 29.0988 207.795 36.6454C207.795 43.0407 206.005 48.6047 202.423 53.3372C200.785 55.5214 198.802 57.4753 196.473 59.199C193.541 61.3692 193.562 66.734 196.557 68.8159C199.526 70.8799 201.993 73.2669 203.958 75.9767C207.795 80.9651 209.714 86.7849 209.714 93.4361C209.714 100.983 207.604 107.634 203.383 113.39C199.162 119.145 193.214 123.686 185.54 127.012C177.993 130.337 169.104 132 158.871 132Z"
                stroke="url(#paint1_linear_1834_9217)"
                strokeWidth="4"
                mask="url(#path-1-inside-1_1834_9217)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1834_9217"
                  x1="271.947"
                  y1="468.5"
                  x2="319.459"
                  y2="42.5324"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6E6CCF" />
                  <stop offset="1" stopColor="#FB8873" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1834_9217"
                  x1="271.947"
                  y1="468.5"
                  x2="319.459"
                  y2="42.5324"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6E6CCF" />
                  <stop offset="1" stopColor="#FB8873" />
                </linearGradient>
              </defs>
            </svg>

            <div className={s.Slide_Title}>
              <p>
                The ability to limit resources for minor microservices so that
                they do not slow down the entire project
              </p>
            </div>
            <div className={s.Slide_ForExample}>
              <p>For example:</p>
            </div>
            <div className={s.Slide_Description}>
              <p>Search re-indexing or full import of goods from 1C.</p>
            </div>
          </SwiperSlide>
        </Swiper>

        <Image
          src="/pictures/images/industries/ecommerce-and-retail-2.png"
          width={783}
          height={768}
          alt=""
          className={s.Bonuses_Image}
        />
      </BaseContainer>
    </section>
  );
};

export default Bonuses;
