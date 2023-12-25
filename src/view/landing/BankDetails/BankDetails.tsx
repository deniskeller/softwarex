import React, { useEffect } from 'react';
import s from './BankDetails.module.scss';
import { useRouter } from 'next/router';
import { BaseButton } from '@base/index';
import { ToMainPage } from '@content/landing/index';
import Image from 'next/image';

const bankDetails = [
  { label: 'BENEFICIARY', value: 'West Midland Consulting' },
  { label: 'BENEFICIARY ACCOUNT', value: 'LT373190020101000160' },
  {
    label: 'BENEFICIARY ADDRESS',
    value:
      '130 Old Street London EC1V 9BD England, London, United Kingdom, EC1V 9BD',
  },
  { label: 'BENEFICIARY BANK', value: 'UAB TeslaPay' },
  { label: 'BENEFICIARY BANK SWIFT', value: 'TEUALT22XXX' },
  {
    label: 'BENEFICIARY BANK ADDRESS',
    value: 'J. Jasinskio g. 16, Vilnius, Lithuania, 03163',
  },
];

const BankDetails: React.FC = () => {
  const router = useRouter();

  useEffect(() => {}, []);

  return (
    <div className={s.BankDetails}>
      <div className={s.Background}></div>

      <div className={s.Form}>
        <div className={s.Form_Background}></div>

        <div className={s.Form_Title}>
          <h2>Bank details page</h2>
        </div>

        <div className={s.Form_Amount}>
          <div className={s.Value}>Amount:&nbsp;234&nbsp;EUR</div>
        </div>

        <ul className={s.Form_Details}>
          {bankDetails?.map((item, index) => {
            return (
              <li className={s.DetailsItem} key={index}>
                <div className={s.DetailsItem_Info}>
                  <span className={s.Label}>{item.label}</span>
                  <p className={s.Value}>{item.value}</p>
                </div>

                <div className={s.DetailsItem_Copy}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={s.Icon}
                  >
                    <path
                      d="M8 7V15C8 16.1046 8.89543 17 10 17H16M8 7V5C8 3.89543 8.89543 3 10 3H14.5858C14.851 3 15.1054 3.10536 15.2929 3.29289L19.7071 7.70711C19.8946 7.89464 20 8.149 20 8.41421V15C20 16.1046 19.1046 17 18 17H16M8 7H6C4.89543 7 4 7.89543 4 9V19C4 20.1046 4.89543 21 6 21H14C15.1046 21 16 20.1046 16 19V17"
                      stroke="#1F1E58"
                      strokeOpacity="0.5"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className={s.Tooltip}>
                    <span>Copied</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <BaseButton design="gradient" className={s.Form_Button}>
          Copy all
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
      </div>

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

export default BankDetails;
