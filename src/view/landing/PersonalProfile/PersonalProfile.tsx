import React from 'react';
import s from './PersonalProfile.module.scss';
import {
  Header,
  OrderStatistics,
  OrdersHistory,
  PersonalDetails,
} from 'components/landing/pages/personalProfile';

const PersonalProfile: React.FC = () => {
  return (
    <div className={s.PersonalProfile}>
      <Header />
      <OrderStatistics />
      <PersonalDetails />
      <OrdersHistory />
    </div>
  );
};

export default PersonalProfile;
