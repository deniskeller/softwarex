import React, { useEffect, useState } from 'react';
import s from './PayInvoice.module.scss';
import { useRouter } from 'next/router';
import {
  BaseButton,
  BaseCheckbox,
  BaseInput,
  BaseRadioButton,
  BaseTextarea,
} from '@base/index';
import Link from 'next/link';
import { AmountSelect, ToMainPage, Toast } from '@content/landing/index';
import Image from 'next/image';
import toast from 'react-hot-toast';

interface SelectItem {
  label: string;
  value: string;
}

interface IFormData {
  email: string;
  paymentsNotes: string;
  couponNumber: string;
  amount: SelectItem[];
}

const PayInvoice: React.FC = () => {
  const router = useRouter();

  //временная валидация
  const [error, setError] = useState('');

  //ФОРМА
  const [value, setValue] = React.useState<IFormData>({
    email: '',
    paymentsNotes: '',
    couponNumber: '',
    amount: [{ value: 'EUR', label: 'EUR' }],
  });

  const setNewValue = (
    value: string | SelectItem | SelectItem[],
    prop: keyof IFormData
  ) => {
    setValue((prev) => ({ ...prev, [prop]: value }));
  };

  //radio button
  const paymentMethods = [
    { id: '1', value: 'bankTransfer' },
    { id: '2', value: 'cardPayment' },
  ];

  const [paymentMethod, setPaymentMethod] = React.useState<string>(
    paymentMethods[1].id
  );

  //checkbox
  const [checked, setChecked] = React.useState<any>({
    isChecked1: false,
    isChecked2: false,
  });

  //ПОФИКСИТЬ тайприпт
  const setNewValue2 = (key: string) => {
    setChecked((prevState: { [x: string]: any }) => {
      const newState = { ...prevState };
      newState[key] = !prevState[key];
      return newState;
    });
  };

  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (value.email != '' && paymentMethod === paymentMethods[0].id) {
      router.push('/bank-details');
      // toast.custom(<Toast />, {
      //   duration: 3000,
      // });
    } else {
      setError('Поле не должно быть пустым!');
    }
  };

  useEffect(() => {
    console.log('value: ', value);
  }, [value]);

  return (
    <div className={s.PayInvoice}>
      <div className={s.Background}></div>

      <form
        action=""
        onSubmit={submitHandler}
        className={s.Form}
        autoComplete="off"
      >
        <div className={s.Form_Background}></div>
        <div className={s.Form_Title}>
          <h2>Payment page</h2>
        </div>

        <div className={s.Form_Subtitle}>
          <p>Please, fill in the billed amount</p>
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

          <AmountSelect
            name="amount"
            value={value.amount}
            placeholder="Amount"
            options={[
              { value: 'EUR', label: 'EUR' },
              { value: 'USD', label: 'USD' },
              { value: 'GBP', label: 'GBP' },
            ]}
            onChange={(val: SelectItem[] | SelectItem) =>
              setNewValue(val, 'amount')
            }
            onClear={() => {}}
            onBlur={() => {}}
            withLabel
          />
        </div>

        <div className={s.Form_PaymentsNotes}>
          <BaseTextarea
            maxLength={500}
            name="paymentsNotes"
            placeholder="Payments notes (optional)"
            label="Payments notes (optional)"
            value={value.paymentsNotes}
            onChange={(val: string) => setNewValue(val, 'paymentsNotes')}
            error={error}
          />
          <p className={s.Note}>
            Note: field can't contain more than 500 characters
          </p>
        </div>

        <div className={s.Form_BankTransfer}>
          <BaseRadioButton
            name="bankTransfer"
            id={paymentMethods[0].id}
            isActive={paymentMethod === paymentMethods[0].id}
            onClick={() => setPaymentMethod(paymentMethods[0].id)}
            className={s.RadionButton}
          >
            Bank transfer
          </BaseRadioButton>

          <p className={s.Description}>
            Transfer details will be provided after choosing this payment
            method.
          </p>
        </div>

        <div className={s.Form_CardPayment}>
          <BaseRadioButton
            name="cardPayment"
            id={paymentMethods[1].id}
            isActive={paymentMethod === paymentMethods[1].id}
            onClick={() => setPaymentMethod(paymentMethods[1].id)}
            className={s.RadionButton}
          >
            Card payment
          </BaseRadioButton>

          <p className={s.Description}>
            By choosing this option, you confirm to have accepted our Terms and
            Conditions.
          </p>
        </div>

        <BaseCheckbox
          checked={checked.isChecked1}
          onChange={() => setNewValue2('isChecked1')}
        >
          I have coupon
        </BaseCheckbox>

        {checked.isChecked1 ? (
          <BaseInput
            name="couponNumber"
            placeholder="Coupon number"
            label="Coupon number"
            value={value.couponNumber}
            onChange={(val: string) => setNewValue(val, 'couponNumber')}
            className={s.Form_Coupon}
          />
        ) : null}

        <BaseCheckbox
          checked={checked.isChecked2}
          onChange={() => setNewValue2('isChecked2')}
          className={s.Form_Rules}
        >
          I have read and agree with the&nbsp;
          <Link href={'/terms-of-service'}>Terms of service</Link>
          &nbsp;and&nbsp;
          <Link href={'/refund-policy'}>Refund Policy</Link>
        </BaseCheckbox>

        <BaseButton type="submit" design="gradient" className={s.Form_Button}>
          Pay
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

export default PayInvoice;
