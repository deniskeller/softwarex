import React from 'react';
import s from './Solutions.module.scss';
import { BaseContainer, BaseText } from '@base/index';
import Marquee from 'react-fast-marquee';

const Solutions: React.FC = () => {
  return (
    <section className={s.Solutions}>
      <BaseContainer className={s.Solutions_Container}>
        <BaseText className={s.Solutions_Title} as="h2">
          Industry-specific solutions
        </BaseText>

        <BaseText className={s.Solutions_Text} as="p">
          To give a sense of our scale, here is a partial list of industries we
          cover.
        </BaseText>
      </BaseContainer>
      <Marquee className={s.Solutions_Marquee} speed={0} gradient={false}>
        <div className={`${s.Ticker} ${s.Ticker__1}`}>
          <span>E-Commerce & Retail</span>
        </div>
        <div className={`${s.Ticker} ${s.Ticker__2}`}>
          <span>Finance & Banking</span>
        </div>
        <div className={`${s.Ticker} ${s.Ticker__3}`}>
          <span>E-learning & Education</span>
        </div>
        <div className={`${s.Ticker} ${s.Ticker__4}`}>
          <span>Hospitality & Travel</span>
        </div>
        <div className={`${s.Ticker} ${s.Ticker__5}`}>
          <span>Legislation & Law</span>
        </div>
        <div className={`${s.Ticker} ${s.Ticker__6}`}>
          <span>Healthcare</span>
        </div>
        <div className={`${s.Ticker} ${s.Ticker__7}`}>
          <span>Real Estate</span>
        </div>
        <div className={`${s.Ticker} ${s.Ticker__8}`}>
          <span>Insurance</span>
        </div>
        <div className={`${s.Ticker} ${s.Ticker__9}`}>
          <span>Sport</span>
        </div>
        <div className={`${s.Ticker} ${s.Ticker__1}`}>
          <span>E-Commerce & Retail</span>
        </div>
        <div className={`${s.Ticker} ${s.Ticker__2}`}>
          <span>Finance & Banking</span>
        </div>
        <div className={`${s.Ticker} ${s.Ticker__3}`}>
          <span>E-learning & Education</span>
        </div>
        <div className={`${s.Ticker} ${s.Ticker__4}`}>
          <span>Hospitality & Travel</span>
        </div>
        <div className={`${s.Ticker} ${s.Ticker__5}`}>
          <span>Legislation & Law</span>
        </div>
        <div className={`${s.Ticker} ${s.Ticker__6}`}>
          <span>Healthcare</span>
        </div>
        <div className={`${s.Ticker} ${s.Ticker__7}`}>
          <span>Real Estate</span>
        </div>
        <div className={`${s.Ticker} ${s.Ticker__8}`}>
          <span>Insurance</span>
        </div>
        <div className={`${s.Ticker} ${s.Ticker__9}`}>
          <span>Sport</span>
        </div>
        <div className={`${s.Ticker} ${s.Ticker__1}`}>
          <span>E-Commerce & Retail</span>
        </div>
        <div className={`${s.Ticker} ${s.Ticker__2}`}>
          <span>Finance & Banking</span>
        </div>
        <div className={`${s.Ticker} ${s.Ticker__3}`}>
          <span>E-learning & Education</span>
        </div>
        <div className={`${s.Ticker} ${s.Ticker__4}`}>
          <span>Hospitality & Travel</span>
        </div>
        <div className={`${s.Ticker} ${s.Ticker__5}`}>
          <span>Legislation & Law</span>
        </div>
        <div className={`${s.Ticker} ${s.Ticker__6}`}>
          <span>Healthcare</span>
        </div>
        <div className={`${s.Ticker} ${s.Ticker__7}`}>
          <span>Real Estate</span>
        </div>
        <div className={`${s.Ticker} ${s.Ticker__8}`}>
          <span>Insurance</span>
        </div>
        <div className={`${s.Ticker} ${s.Ticker__9}`}>
          <span>Sport</span>
        </div>
      </Marquee>
    </section>
  );
};

export default Solutions;
