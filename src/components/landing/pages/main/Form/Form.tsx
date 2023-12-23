import React from 'react';
import s from './Form.module.scss';
import { BaseButton, BaseContainer, BaseInput, BaseText } from '@base/index';

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

  return (
    <section className={s.Form}>
      <BaseContainer className={s.Form_Container}>
        <form action="">
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
              name="nameSurname"
              placeholder="Name, Surname"
              label="Name, Surname"
              value={value.nameSurname}
              onChange={(val: string) => setNewValue(val, 'nameSurname')}
            />
            <BaseInput
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
