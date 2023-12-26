import React, { useEffect, useRef, useState } from 'react';
import s from './OrdersHistory.module.scss';
import { BaseContainer, BaseInput, BaseText } from '@base/index';

const orders = [
  {
    orderId: 1111111,
    amount: 100,
    currency: 'USD',
    status: 'Processing',
  },
  {
    orderId: 22222222,
    amount: 100,
    currency: 'USD',
    status: 'Completed',
  },
  {
    orderId: 3333333333,
    amount: 100,
    currency: 'USD',
    status: 'Refund',
  },
  {
    orderId: 9999999999,
    amount: 100,
    currency: 'USD',
    status: 'Processing',
  },
  {
    orderId: 1111111,
    amount: 100,
    currency: 'USD',
    status: 'Processing',
  },
  {
    orderId: 22222222,
    amount: 100,
    currency: 'USD',
    status: 'Processing',
  },
  {
    orderId: 3333333333,
    amount: 100,
    currency: 'USD',
    status: 'Processing',
  },
  {
    orderId: 9999999999,
    amount: 100,
    currency: 'USD',
    status: 'Processing',
  },
  {
    orderId: 1111111,
    amount: 100,
    currency: 'USD',
    status: 'Processing',
  },
  {
    orderId: 22222222,
    amount: 100,
    currency: 'USD',
    status: 'Processing',
  },
  {
    orderId: 3333333333,
    amount: 100,
    currency: 'USD',
    status: 'Processing',
  },
  {
    orderId: 9999999999,
    amount: 100,
    currency: 'USD',
    status: 'Processing',
  },
  {
    orderId: 1111111,
    amount: 100,
    currency: 'USD',
    status: 'Processing',
  },
  {
    orderId: 22222222,
    amount: 100,
    currency: 'USD',
    status: 'Processing',
  },
];

const OrdersHistory: React.FC = () => {
  const scrollWrapper = useRef<HTMLDivElement>(null);
  const [paddingRight, setPaddingRight] = useState(0);

  useEffect(() => {
    if (scrollWrapper.current != null) {
      const scrollWidth =
        scrollWrapper.current.offsetWidth - scrollWrapper.current.clientWidth;
      console.log('scrollWidth: ', scrollWidth);
      setPaddingRight(scrollWidth);
    }
    window.addEventListener('resize', () => {
      if (scrollWrapper.current != null) {
        const scrollWidth =
          scrollWrapper.current.offsetWidth - scrollWrapper.current.clientWidth;
        console.log('scrollWidth: ', scrollWidth);
        setPaddingRight(scrollWidth);
      }
    });
  }, []);

  const computedColorForStatus = (status: string) => {
    if (status == 'Processing') return 'Processing';
    if (status == 'Completed') return 'Completed';
    if (status == 'Refund') return 'Refund';
  };

  return (
    <section className={s.OrdersHistory}>
      <BaseContainer className={s.OrdersHistory_Container}>
        <BaseText className={s.OrdersHistory_Title} as="h2">
          Orders history
        </BaseText>

        <div className={s.OrdersHistory_Table}>
          <div
            className={s.THead}
            style={{ paddingRight: `${paddingRight + 'px'}` }}
          >
            <div className={s.THead_Column}>
              <span>Order ID</span>
            </div>
            <div className={s.THead_Column}>
              <span>Amount</span>
            </div>
            <div className={s.THead_Column}>
              <span>Currency</span>
            </div>
            <div className={s.THead_Column}>
              <span>Status</span>
            </div>
          </div>

          <div className={s.TBody} ref={scrollWrapper}>
            {orders.map((item, index) => {
              return (
                <div className={s.TBody_Row} key={index}>
                  <div className={s.OrderId}>
                    <span>{item.orderId}</span>
                  </div>
                  <div className={s.Amount}>
                    <span>{item.amount}</span>
                  </div>
                  <div className={s.Currency}>
                    <span>{item.currency}</span>
                  </div>
                  <div
                    className={`${s.Status} ${
                      s['Status__' + computedColorForStatus(item.status)]
                    }`}
                  >
                    <span>{item.status}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </BaseContainer>
    </section>
  );
};

export default OrdersHistory;
