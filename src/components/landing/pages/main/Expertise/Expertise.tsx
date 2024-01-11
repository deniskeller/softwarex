import React, { useEffect, useRef } from 'react';
import s from './Expertise.module.scss';
import { BaseContainer, BaseIcon, BaseText } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { LogoAnimated } from '@content/landing/index';
import { gsap } from 'gsap';
const { ScrollTrigger } = require('gsap/dist/ScrollTrigger');
gsap.registerPlugin(ScrollTrigger);

const Expertise: React.FC = () => {
  return (
    <section className={s.Expertise}>
      <BaseContainer className={s.Expertise_Container}>
        <BaseIcon
          viewBox="0 0 124 124"
          icon={ALL_ICONS.STAR}
          className={`${s.Expertise_Star} ${s.Expertise_Star__1}`}
        />
        <BaseIcon
          viewBox="0 0 124 124"
          icon={ALL_ICONS.STAR}
          className={`${s.Expertise_Star} ${s.Expertise_Star__2}`}
        />
        <BaseIcon
          viewBox="0 0 124 124"
          icon={ALL_ICONS.STAR}
          className={`${s.Expertise_Star} ${s.Expertise_Star__3}`}
        />
        <BaseIcon
          viewBox="0 0 124 124"
          icon={ALL_ICONS.STAR}
          className={`${s.Expertise_Star} ${s.Expertise_Star__4}`}
        />

        <BaseText className={s.Expertise_Title} as="h2">
          <span>Expertise</span>&nbsp;is our second name!
        </BaseText>

        <BaseText className={s.Expertise_Text} as="p">
          From IT consulting services to the end-to-end development of scalable
          software solutions, we deliver comprehensive results for businesses
          and personal users. Our products can be seamlessly integrated into any
          home or commercial project and meet even the pickiest
          user's preferences.
        </BaseText>

        <LogoAnimated className={s.Expertise_Logo} />
      </BaseContainer>
    </section>
  );
};

export default Expertise;
