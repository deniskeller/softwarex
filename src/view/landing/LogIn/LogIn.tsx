import React, { useState } from 'react';
import s from './LogIn.module.scss';
import { useRouter } from 'next/router';
import { BaseButton, BaseContainer, BaseInput } from '@base/index';
import Link from 'next/link';
import { ToMainPage, Toast } from '@content/landing/index';
import Image from 'next/image';
import toast from 'react-hot-toast';

interface IFormData {
  name: string;
  password: string;
}

const LogIn: React.FC = () => {
  const router = useRouter();
  //ФОРМА
  const [value, setValue] = React.useState<IFormData>({
    name: '',
    password: '',
  });

  const setNewValue = (value: string, prop: keyof IFormData) => {
    setValue((prev) => ({ ...prev, [prop]: value }));
  };

  const [error, setError] = useState('');

  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (value.name != '' && value.password != '') {
      sessionStorage.setItem('auth', 'true');
      router.push('/');
      toast.custom(<Toast />, {
        duration: 3000,
      });
    } else {
      setError('Поле не должно быть пустым!');
    }
  };

  return (
    <div className={s.Login}>
      <div className={s.Background}></div>

      <form action="" onSubmit={submitHandler} className={s.Form}>
        <div className={s.Form_Background}></div>
        <div className={s.Form_Title}>
          <h2>Log in</h2>
        </div>

        <div className={s.Form_Subtitle}>
          <p>
            Please login to your account using the email you signed up with and
            the password which was sent to your email.
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
            name="password"
            placeholder="Password"
            label="Password"
            value={value.password}
            onChange={(val: string) => setNewValue(val, 'password')}
            error={error}
          />
        </div>

        <Link href={'/forgot-password'} className={s.Form_ForgotPassword}>
          Forgot password?
        </Link>

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

export default LogIn;
