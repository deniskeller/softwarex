import React from 'react';
import s from './Form.module.scss';
import { BaseButton, BaseContainer, BaseInput, BaseText } from '@base/index';
import toast from 'react-hot-toast';
import { Toast } from '@content/landing/index';

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
        <form action="" onSubmit={submitHandler}>
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
            <BaseInput
              // theme="light"
              name="phone"
              placeholder="Phone"
              label="Phone"
              value={value.phone}
              onChange={(val: string) => setNewValue(val, 'phone')}
              // error="Some text error"
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
