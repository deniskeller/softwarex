import React from 'react';
import s from './OrderStatistics.module.scss';
import { BaseContainer, BaseText } from '@base/index';
import Image from 'next/image';

const OrderStatistics: React.FC = () => {
  return (
    <section className={s.OrderStatistics}>
      <BaseContainer>
        <BaseText className={s.OrderStatistics_Title} as="h2">
          Order statistics
        </BaseText>

        <BaseText className={s.OrderStatistics_Subtitle} as="p">
          Data on placed orders for all time.
        </BaseText>

        <div className={s.OrderStatistics_Info}>
          <div className={s.InfoItem}>
            <div className={s.InfoItem_Value}>
              <span>236</span>
            </div>
            <div className={s.InfoItem_Border}></div>
            <div className={s.InfoItem_Label}>Orders</div>
          </div>

          <div className={s.InfoItem}>
            <div className={s.InfoItem_Value}>
              <span>£16,000.55</span>
            </div>
            <div className={s.InfoItem_Border}></div>
            <div className={s.InfoItem_Label}>Amount GBP</div>
          </div>

          <div className={s.InfoItem}>
            <div className={s.InfoItem_Value}>
              <span>$18,500.00</span>
            </div>
            <div className={s.InfoItem_Border}></div>
            <div className={s.InfoItem_Label}>Amount USD</div>
          </div>

          <div className={s.InfoItem}>
            <div className={s.InfoItem_Value}>
              <span>€14,000.44</span>
            </div>
            <div className={s.InfoItem_Border}></div>
            <div className={s.InfoItem_Label}>Amount EUR</div>
          </div>
        </div>
      </BaseContainer>
    </section>
  );
};

export default OrderStatistics;
