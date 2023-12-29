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
