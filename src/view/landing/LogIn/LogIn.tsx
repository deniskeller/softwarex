import React from 'react';
import s from './LogIn.module.scss';
import { useRouter } from 'next/router';

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

  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (value.name != '' && value.password != '') {
      sessionStorage.setItem('auth', 'true');
      router.push('/');
    }
  };

  return (
    <div className={s.LogIn}>
      <form action="" onSubmit={submitHandler}>
        <input
          type="text"
          value={value.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewValue(e.target.value, 'name')
          }
        />
        <input
          type="text"
          value={value.password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewValue(e.target.value, 'password')
          }
        />

        <p>{value.name}</p>
        <p>{value.password}</p>
        <button type="submit">log in</button>
      </form>
    </div>
  );
};

export default LogIn;
