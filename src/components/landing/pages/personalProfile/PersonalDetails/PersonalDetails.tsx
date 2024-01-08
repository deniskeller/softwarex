import React, { useState } from 'react';
import s from './PersonalDetails.module.scss';
import { BaseContainer, BaseIcon, BaseInput, BaseText } from '@base/index';
import Image from 'next/image';
import BaseInputPhone from '@base/BaseInputPhone/BaseInputPhone';
import { ALL_ICONS } from '@constants/icons';

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
    phone: '',
  });

  const setNewValue = (value: string, prop: keyof IFormData) => {
    setValue((prev) => ({ ...prev, [prop]: value }));
  };

  const [nameDisabled, setNameDisabled] = useState(true);
  const [surnameDisabled, setSurnameDisabled] = useState(true);

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

          <ul className={s.Form_Fields}>
            <li>
              <BaseInput
                name="name"
                placeholder="Name"
                label="Name"
                value={value.name}
                onChange={(val: string) => setNewValue(val, 'name')}
                disabled={nameDisabled}
              />
              {nameDisabled ? (
                <BaseIcon
                  viewBox="0 0 19 19"
                  icon={ALL_ICONS.PENCIL}
                  className={s.Icon}
                  onClick={() => setNameDisabled(false)}
                />
              ) : (
                <BaseIcon
                  viewBox="0 0 19 19"
                  icon={ALL_ICONS.DISKETTE}
                  className={s.Icon}
                  onClick={() => setNameDisabled(true)}
                />
              )}
            </li>
            <li>
              <BaseInput
                name="surname"
                placeholder="Surname"
                label="Surname"
                value={value.surname}
                onChange={(val: string) => setNewValue(val, 'surname')}
                disabled={surnameDisabled}
              />

              {surnameDisabled ? (
                <BaseIcon
                  viewBox="0 0 19 19"
                  icon={ALL_ICONS.PENCIL}
                  className={s.Icon}
                  onClick={() => setSurnameDisabled(false)}
                />
              ) : (
                <BaseIcon
                  viewBox="0 0 19 19"
                  icon={ALL_ICONS.DISKETTE}
                  className={s.Icon}
                  onClick={() => setSurnameDisabled(true)}
                />
              )}
            </li>
            <li>
              <BaseInput
                name="email"
                placeholder="Email"
                label="Email"
                value={value.email}
                onChange={(val: string) => setNewValue(val, 'email')}
              />
            </li>
            <li>
              <BaseInputPhone
                type="phone"
                name="phone"
                placeholder="Phone"
                label="Phone"
                value={value.phone}
                onChange={(val: string) => setNewValue(val, 'phone')}
              />
            </li>
          </ul>
        </form>
      </BaseContainer>
    </section>
  );
};

export default PersonalDetails;
