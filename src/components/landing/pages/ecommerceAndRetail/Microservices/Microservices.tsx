import React from 'react';
import s from './Microservices.module.scss';
import { BaseContainer, BaseText } from '@base/index';

const Microservices: React.FC = () => {
  return (
    <section className={s.Microservices}>
      <BaseContainer>
        <BaseText as="h2" className={s.Microservices_Title}>
          What microservices can be highlighted in an online store?
        </BaseText>

        <div className={s.Microservices_Text}>
          <div className={s.Column}>
            <BaseText className={s.Paragraph} as="p">
              Typically this is a list of products, filtering and searching, a
              shopping cart, order history, and a product card. We recommend
              starting the implementation of microservice architecture with the
              most speed-critical areas - the list of products: its filtering
              and sorting, as well as site search.
            </BaseText>
            <BaseText
              className={`${s.Paragraph} ${s.Paragraph__Strong}`}
              as="p"
            >
              Lorem ipsum dolor sit amet consectetur.
            </BaseText>
          </div>
          <div className={s.Column}>
            <BaseText className={s.Paragraph} as="p">
              For highload projects we offer a microservice architecture. With
              this approach, the project consists of many independent services
              that communicate with each other via API. This is somewhat more
              expensive to support than a single “monolithic” web service, but
              for large projects it provides a number of bonuses:
            </BaseText>
          </div>
        </div>
      </BaseContainer>
    </section>
  );
};

export default Microservices;
