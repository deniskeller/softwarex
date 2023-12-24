import React, { useState } from 'react';
import s from './ResetPassword.module.scss';
import { useRouter } from 'next/router';
import { BaseButton, BaseContainer, BaseInput } from '@base/index';
import Link from 'next/link';
import { ToMainPage, Toast } from '@content/landing/index';
import Image from 'next/image';
import toast from 'react-hot-toast';

interface IFormData {
  email: string;
}

const ResetPassword: React.FC = () => {
  const router = useRouter();
  //ФОРМА
  const [value, setValue] = React.useState<IFormData>({
    email: '',
  });

  const setNewValue = (value: string, prop: keyof IFormData) => {
    setValue((prev) => ({ ...prev, [prop]: value }));
  };

  const [error, setError] = useState('');

  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (value.email != '') {
      router.push('/');
      toast.custom(<Toast />, {
        duration: 3000,
      });
    } else {
      setError('Поле не должно быть пустым!');
    }
  };

  return (
    <div className={s.ResetPassword}>
      <div className={s.Background}></div>

      <form action="" onSubmit={submitHandler} className={s.Form}>
        <div className={s.Form_Background}></div>
        <div className={s.Form_Title}>
          <h2>Password reset</h2>
        </div>

        <div className={s.Form_Subtitle}>
          <p>Enter your email. We will send the code to your email.</p>
        </div>

        <div className={s.Form_Fields}>
          <BaseInput
            name="email"
            placeholder="Email"
            label="Email"
            value={value.email}
            onChange={(val: string) => setNewValue(val, 'email')}
            error={error}
          />
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

export default ResetPassword;
