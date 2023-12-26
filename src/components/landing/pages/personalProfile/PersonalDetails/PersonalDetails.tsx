import React from 'react';
import s from './PersonalDetails.module.scss';
import { BaseContainer, BaseInput, BaseText } from '@base/index';
import Image from 'next/image';

interface IFormData {
  name: string;
  surname: string;
  email: string;
  phone: string;
}

const PersonalDetails: React.FC = () => {
  //ФОРМА
  const [value, setValue] = React.useState<IFormData>({
    name: 'Alexander',
    surname: 'Williamson',
    email: 'alexanderwilliamson@gmail.com',
    phone: '+ 79 990 000 00 00',
  });

  const setNewValue = (value: string, prop: keyof IFormData) => {
    setValue((prev) => ({ ...prev, [prop]: value }));
  };

  return (
    <section className={s.PersonalDetails}>
      <BaseContainer className={s.PersonalDetails_Container}>
        <Image
          src="/pictures/images/personal-profile/personal-profile-form.png"
          width={721}
          height={617}
          alt=""
          quality={100}
          className={s.PersonalDetails_Image}
        />

        <form className={s.Form}>
          <BaseText className={s.Form_Title} as="h2">
            Personal details
          </BaseText>

          <BaseText className={s.Form_Subtitle} as="p">
            View and edit some of your data.
          </BaseText>

          <div className={s.Form_Fields}>
            <BaseInput
              name="name"
              placeholder="Name"
              label="Name"
              value={value.name}
              onChange={(val: string) => setNewValue(val, 'name')}
            />

            <BaseInput
              name="surname"
              placeholder="Surname"
              label="Surname"
              value={value.surname}
              onChange={(val: string) => setNewValue(val, 'surname')}
            />

            <BaseInput
              name="email"
              placeholder="Email"
              label="Email"
              value={value.email}
              onChange={(val: string) => setNewValue(val, 'email')}
            />

            <BaseInput
              name="phone"
              placeholder="Phone"
              label="Phone"
              value={value.phone}
              onChange={(val: string) => setNewValue(val, 'phone')}
            />
          </div>
        </form>
      </BaseContainer>
    </section>
  );
};

export default PersonalDetails;
