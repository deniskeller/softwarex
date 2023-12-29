import React from 'react';
import s from './WhatIsHighload.module.scss';
import { BaseContainer, BaseText } from '@base/index';

const WhatIsHighload: React.FC = () => {
  return (
    <section className={s.WhatIsHighload}>
      <BaseContainer>
        <BaseText as="h2" className={s.WhatIsHighload_Title}>
          What is highload?
        </BaseText>

        <BaseText className={s.WhatIsHighload_Subtitle} as="p">
          Highload refers to the resistance of an Internet project to high
          loads. This is not some universal piece of code that you just need to
          add to the site for it to start “flying”. This is setting up the site
          architecture: working with databases, servers, using modern
          technologies and programming languages.
        </BaseText>
      </BaseContainer>
    </section>
  );
};

export default WhatIsHighload;
