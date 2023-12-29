import React from 'react';
import s from './Bonuses.module.scss';
import { BaseContainer, BaseText } from '@base/index';

const Bonuses: React.FC = () => {
  return (
    <section className={s.Bonuses}>
      <BaseContainer className={s.Bonuses_Container}>
        <BaseText as="h2" className={s.Bonuses_Title}>
          This gives a number of bonuses
        </BaseText>
      </BaseContainer>
    </section>
  );
};

export default Bonuses;
