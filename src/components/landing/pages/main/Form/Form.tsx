import React from 'react';
import s from './Form.module.scss';
import { BaseButton, BaseContainer, BaseInput, BaseText } from '@base/index';
import toast from 'react-hot-toast';
import { Toast } from '@content/landing/index';
import BaseInputPhone from '@base/BaseInputPhone/BaseInputPhone';
import Image from 'next/image';

interface IFormData {
  nameSurname: string;
  phone: string;
}

const Form: React.FC = () => {
  const initialState = {
    nameSurname: '',
    phone: '',
  };

  const [value, setValue] = React.useState<IFormData>(initialState);
  const setNewValue = (value: string, prop: keyof IFormData) => {
    setValue((prev) => ({ ...prev, [prop]: value }));
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // toast.success('Thank you! We will reach you in 24 hours.', {
    //   duration: 3000,
    // });

    toast.custom(<Toast />, {
      duration: 3000,
    });
  };

  return (
    <section className={s.Form}>
      <BaseContainer className={s.Form_Container}>
        <form action="" onSubmit={submitHandler} autoComplete="off">
          <Image
            src="/pictures/images/main/main-form-1920.png"
            width={1099}
            height={855}
            alt=""
            quality={100}
            className={`${s.Form_Image} ${s.Form_Image__Desktop}`}
          />

          <Image
            src="/pictures/images/main/main-form-1024.png"
            width={653}
            height={581}
            alt=""
            quality={100}
            className={`${s.Form_Image} ${s.Form_Image__Laptop}`}
          />

          <Image
            src="/pictures/images/main/main-form-768.png"
            width={486}
            height={531}
            alt=""
            quality={100}
            className={`${s.Form_Image} ${s.Form_Image__Tablet}`}
          />

          <Image
            src="/pictures/images/main/main-form-360.png"
            width={556}
            height={433}
            alt=""
            quality={100}
            className={`${s.Form_Image} ${s.Form_Image__Mobile}`}
          />

          <BaseText className={s.Form_Title} as="h2">
            Say Hello
          </BaseText>

          <div className={s.Form_Description}>
            <p>
              We are more than happy to help you with anything you need, so feel
              free to contact us right now!
            </p>
          </div>

          <div className={s.Form_Fields}>
            <BaseInput
              theme="light"
              name="nameSurname"
              placeholder="Name, Surname"
              label="Name, Surname"
              value={value.nameSurname}
              onChange={(val: string) => setNewValue(val, 'nameSurname')}
            />

            <BaseInputPhone
              name="phone"
              placeholder="Phone"
              label="Phone"
              value={value.phone}
              onChange={(val: string) => setNewValue(val, 'phone')}
              theme="light"
            />
          </div>

          <BaseButton type="submit" className={s.Form_Button}>
            Submit
          </BaseButton>
        </form>
      </BaseContainer>
    </section>
  );
};

export default Form;
