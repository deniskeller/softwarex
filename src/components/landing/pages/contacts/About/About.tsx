import React from 'react';
import s from './About.module.scss';
import { BaseButton, BaseContainer, BaseInput, BaseText } from '@base/index';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { Toast } from '@content/landing/index';

interface IFormData {
  nameSurname: string;
  companyName: string;
  email: string;
  phone: string;
}

const About: React.FC = () => {
  const initialState = {
    nameSurname: '',
    companyName: '',
    email: '',
    phone: '',
  };

  const [value, setValue] = React.useState<IFormData>(initialState);
  const setNewValue = (value: string, prop: keyof IFormData) => {
    setValue((prev) => ({ ...prev, [prop]: value }));
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast.custom(<Toast />, {
      duration: 3000,
    });
  };

  return (
    <section className={s.About}>
      <div className={s.About_Background}></div>

      <BaseContainer className={s.About_Container}>
        <div className={s.Text}>
          <BaseText className={s.Text_Title}>About & Contacts</BaseText>
          <div className={s.Text_Description}>
            <p>
              Established in 2020, we are operating in the market for more than
              17 years of experience and have excellence.
            </p>
            <p>
              We take a responsible approach to any project, apply design
              thinking techniques, build hypotheses, test, work with the
              audience to create convenient and friendly projects for users.
            </p>
          </div>
        </div>

        <form className={s.Form} onSubmit={submitHandler}>
          <div className={s.Form_Title}>
            <h2>Tell us about your project</h2>
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
              name="companyName"
              placeholder="Company name"
              label="Company name"
              value={value.companyName}
              onChange={(val: string) => setNewValue(val, 'companyName')}
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

          <div className={s.Form_UploadFile}>
            <BaseInput
              name="nameSurname"
              placeholder="Name, Surname"
              label="Drag & Drop your files here"
              value={value.nameSurname}
              onChange={(val: string) => setNewValue(val, 'nameSurname')}
            />
          </div>

          <BaseButton type="submit" design="gradient" className={s.Form_Button}>
            Get a quote
          </BaseButton>
        </form>

        <Image
          src="/pictures/images/about.png"
          width={482}
          height={472}
          alt="About"
          priority
          className={s.About_Image}
        />
      </BaseContainer>
    </section>
  );
};

export default About;
