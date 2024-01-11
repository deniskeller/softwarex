import React, { useState } from 'react';
import s from './SignUp.module.scss';
import { useRouter } from 'next/router';
import { BaseButton, BaseInput } from '@base/index';
import Link from 'next/link';
import { ToMainPage, Toast } from '@content/landing/index';
import Image from 'next/image';
import toast from 'react-hot-toast';
import BaseInputPhone from '@base/BaseInputPhone/BaseInputPhone';

interface IFormData {
  name: string;
  surname: string;
  email: string;
  phone: string;
  password: string;
}

const SignUp: React.FC = () => {
  const router = useRouter();
  //ФОРМА
  const [value, setValue] = React.useState<IFormData>({
    name: '',
    surname: '',
    email: '',
    phone: '',
    password: '',
  });

  const setNewValue = (value: string, prop: keyof IFormData) => {
    setValue((prev) => ({ ...prev, [prop]: value }));
  };

  //проверка строки на цифры
  const checkForNumberValuePassword = (str: string) => {
    return /\d/.test(str);
  };
  //проверка строки на буквы
  const checkForStringValuePassword = (str: string) => {
    return /[a-zа-яё]/i.test(str);
  };

  const [error, setError] = useState('');

  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (value.name != '') {
      router.push('/');
      toast.custom(<Toast />, {
        duration: 3000,
      });
    } else {
      setError('Поле не должно быть пустым!');
    }
  };

  return (
    <div className={s.SignUp}>
      <div className={s.Background}></div>

      <form
        action=""
        onSubmit={submitHandler}
        className={s.Form}
        autoComplete="off"
      >
        <div className={s.Form_Background}></div>
        <div className={s.Form_Title}>
          <h2>Sign Up</h2>
        </div>

        <div className={s.Form_Subtitle}>
          <p>
            Please register using your email address and fill out all the
            information given.
          </p>
        </div>

        <div className={s.Form_Fields}>
          <BaseInput
            name="name"
            placeholder="Name"
            label="Name"
            value={value.name}
            onChange={(val: string) => setNewValue(val, 'name')}
            error={error}
          />

          <BaseInput
            name="surname"
            placeholder="Surname"
            label="Surname"
            value={value.surname}
            onChange={(val: string) => setNewValue(val, 'surname')}
            error={error}
          />

          <BaseInput
            name="email"
            placeholder="Email"
            label="Email"
            value={value.email}
            onChange={(val: string) => setNewValue(val, 'email')}
            error={error}
          />

          <BaseInputPhone
            name="phone"
            placeholder="Phone"
            label="Phone"
            value={value.phone}
            onChange={(val: string) => setNewValue(val, 'phone')}
          />
        </div>

        <div className={s.Form_Password}>
          <BaseInput
            type="password"
            name="password"
            placeholder="Password"
            label="Password"
            value={value.password}
            onChange={(val: string) => setNewValue(val, 'password')}
            withIcon
            error={error}
            className={s.Password}
          />

          <ul className={s.PasswordCheck}>
            <li
              className={`${s.PasswordCheck_Item} ${
                value.password.length >= 8 ? s.PasswordCheck_Item__Valid : ''
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 17 16"
                fill="none"
                className={s.Icon}
              >
                <g opacity="0.5">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.8641 4.23431C14.1765 4.54673 14.1765 5.05327 13.8641 5.36569L7.46412 11.7657C7.1517 12.0781 6.64517 12.0781 6.33275 11.7657L3.13275 8.56569C2.82033 8.25327 2.82033 7.74673 3.13275 7.43431C3.44517 7.1219 3.9517 7.1219 4.26412 7.43431L6.89844 10.0686L12.7328 4.23431C13.0452 3.9219 13.5517 3.9219 13.8641 4.23431Z"
                    fill="#1F1E58"
                  />
                </g>
              </svg>
              <p className={s.Label}>8+ symbols</p>
            </li>

            <li
              className={`${s.PasswordCheck_Item} ${
                checkForStringValuePassword(value.password)
                  ? s.PasswordCheck_Item__Valid
                  : ''
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 17 16"
                fill="none"
                className={s.Icon}
              >
                <g opacity="0.5">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.8641 4.23431C14.1765 4.54673 14.1765 5.05327 13.8641 5.36569L7.46412 11.7657C7.1517 12.0781 6.64517 12.0781 6.33275 11.7657L3.13275 8.56569C2.82033 8.25327 2.82033 7.74673 3.13275 7.43431C3.44517 7.1219 3.9517 7.1219 4.26412 7.43431L6.89844 10.0686L12.7328 4.23431C13.0452 3.9219 13.5517 3.9219 13.8641 4.23431Z"
                    fill="#1F1E58"
                  />
                </g>
              </svg>
              <p className={s.Label}>Letters</p>
            </li>

            <li
              className={`${s.PasswordCheck_Item} ${
                checkForNumberValuePassword(value.password)
                  ? s.PasswordCheck_Item__Valid
                  : ''
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 17 16"
                fill="none"
                className={s.Icon}
              >
                <g opacity="0.5">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.8641 4.23431C14.1765 4.54673 14.1765 5.05327 13.8641 5.36569L7.46412 11.7657C7.1517 12.0781 6.64517 12.0781 6.33275 11.7657L3.13275 8.56569C2.82033 8.25327 2.82033 7.74673 3.13275 7.43431C3.44517 7.1219 3.9517 7.1219 4.26412 7.43431L6.89844 10.0686L12.7328 4.23431C13.0452 3.9219 13.5517 3.9219 13.8641 4.23431Z"
                    fill="#1F1E58"
                  />
                </g>
              </svg>
              <p className={s.Label}>Nubmers</p>
            </li>
          </ul>
        </div>

        <BaseButton type="submit" design="gradient" className={s.Form_Button}>
          Get a quote
        </BaseButton>

        <ToMainPage className={s.Form_ToMainPage} />

        <Image
          src="/pictures/images/forms/form-laptop.png"
          width={482}
          height={473}
          alt="Laptop"
          priority
          className={s.Form_Laptop}
        />

        <Image
          src="/pictures/images/forms/form-flower-orange.png"
          width={257}
          height={313}
          alt="Orange flower"
          priority
          className={s.Form_OrangeFlower}
        />

        <Image
          src="/pictures/images/forms/form-flower-violet.png"
          width={374}
          height={505}
          alt="Violet flower"
          priority
          className={s.Form_VioletFlower}
        />
      </form>

      <Image
        src="/pictures/images/forms/form-flower-yellow-768.png"
        width={286}
        height={404}
        alt="Violet flower"
        priority
        className={s.YellowFlower_768}
      />

      <Image
        src="/pictures/images/forms/form-flower-yellow-360.png"
        width={269}
        height={327}
        alt="Violet flower"
        priority
        className={s.YellowFlower_360}
      />

      <Image
        src="/pictures/images/forms/form-flower-orange.png"
        width={206}
        height={250}
        alt="Orange flower"
        priority
        className={s.OrangeFlower}
      />

      <Image
        src="/pictures/images/forms/form-flower-violet.png"
        width={374}
        height={505}
        alt="Violet flower"
        priority
        className={s.VioletFlower}
      />
    </div>
  );
};

export default SignUp;
