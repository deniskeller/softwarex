import React, { useEffect, useRef, useState } from 'react';
import s from './BaseInputPhone.module.scss';
import useOnClickOutside from '@hooks/useOnClickOutside';

interface Props {
  type?: string;
  name: string;
  label?: string;
  theme?: string;
  min?: number;
  max?: number;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  autocomplete?: string;
  error?: string | boolean;
  value: string | number;
  onChange(value: string | number): void;
  onKeyDown?: React.KeyboardEventHandler;
}

export interface ISelectItem {
  countryCode: string;
  countryName: string;
}

const countries = [
  {
    countryCode: '1',
    countryName: 'USA',
  },
  {
    countryCode: '7',
    countryName: 'Russia',
  },
  {
    countryCode: '43',
    countryName: 'Austria',
  },
  {
    countryCode: '82',
    countryName: 'South Korea',
  },
  {
    countryCode: '11',
    countryName: 'USA',
  },
  {
    countryCode: '77',
    countryName: 'Russia',
  },
  {
    countryCode: '4343',
    countryName: 'Austria',
  },
  {
    countryCode: '8282',
    countryName: 'South Korea',
  },
];

const BaseInputPhone: React.FC<Props> = ({
  value,
  label,
  type = 'text',
  theme = 'dark',
  error,
  name,
  min,
  max,
  required = false,
  disabled = false,
  placeholder,
  className = '',
  autocomplete = 'off',
  onChange,
  onKeyDown,
}) => {
  const [focus, setFocus] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  const InputPhoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      setFocus(false);
    }
  }, [isOpen]);

  const clickOutsideHandler = () => {
    setIsOpen(false);
  };
  useOnClickOutside(InputPhoneRef, clickOutsideHandler);

  const toggling = () => setIsOpen(!isOpen);

  return (
    <div
      className={`${s.InputPhone} ${
        focus || isOpen ? s.InputPhone__Focus : ''
      } ${theme == 'light' ? s.InputPhone__LightTheme : ''} ${
        error ? s.InputPhone__Error : ''
      } ${disabled ? s.InputPhone__Disabled : ''} ${className}`}
      ref={InputPhoneRef}
    >
      {label ? (
        <label
          className={`${s.InputPhone_Label} ${
            value ? s.InputPhone_Label__NoEmpty : ''
          }`}
        >
          <span>{label}</span>
        </label>
      ) : null}

      <div className={s.InputPhone_Wrapper}>
        <div className={s.Flag} onClick={toggling}>
          <div className={s.Flag_Icon}>
            <svg
              viewBox="0 0 21 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1773_9033)">
                <mask
                  id="mask0_1773_9033"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="21"
                  height="15"
                >
                  <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_1773_9033)">
                  <path
                    d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                    fill="#0034A9"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 10H21V15H0V10Z"
                    fill="#D7280F"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 0H21V5H0V0Z"
                    fill="white"
                  />
                  <path
                    d="M19 0.5H2C1.17157 0.5 0.5 1.17157 0.5 2V13C0.5 13.8284 1.17157 14.5 2 14.5H19C19.8284 14.5 20.5 13.8284 20.5 13V2C20.5 1.17157 19.8284 0.5 19 0.5Z"
                    stroke="black"
                    strokeOpacity="0.1"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1773_9033">
                  <rect width="21" height="15" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className={s.Flag_CountryCode}>
            <span>+7</span>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 25"
            fill="none"
            className={s.Flag_Chevron}
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
          >
            <path
              d="M19 9.5L12 16.5L5 9.5"
              stroke="#1F1E58"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <input
          value={value}
          type="tel"
          className={`${s.Input} ${
            type == 'password' ? s.Input__Password : ''
          }`}
          name={name}
          min={min}
          max={max}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
          }
          onKeyDown={onKeyDown}
          autoComplete="new-password"
        />

        <div
          className={s.Dropdown}
          style={{
            visibility: isOpen ? 'visible' : 'hidden',
          }}
        >
          <div className={s.Dropdown_Search}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 22 22"
              fill="none"
              className={s.IconSearch}
            >
              <path
                d="M19.25 19.25L13.75 13.75M15.5833 9.16667C15.5833 12.7105 12.7105 15.5833 9.16667 15.5833C5.62284 15.5833 2.75 12.7105 2.75 9.16667C2.75 5.62284 5.62284 2.75 9.16667 2.75C12.7105 2.75 15.5833 5.62284 15.5833 9.16667Z"
                stroke="#1F1E58"
                strokeOpacity="0.8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className={s.InputSearch}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {search == '' ? (
            <ul className={s.Dropdown_List}>
              {countries.map((option: ISelectItem) => {
                return (
                  <li
                    // className={`${s.DropdownItem} ${
                    //   option.countryCode == selectedCountry
                    //     ? s.DropdownItem__Active
                    //     : ''
                    // }`}
                    // onClick={() => setSelectedCountry(option.countryCode)}
                    className={`${s.DropdownItem}`}
                    key={option.countryCode}
                  >
                    <div className={s.DropdownItem_Flag}>
                      <svg
                        viewBox="0 0 21 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1773_9033)">
                          <mask
                            id="mask0_1773_9033"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="21"
                            height="15"
                          >
                            <path
                              d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                              fill="white"
                            />
                          </mask>
                          <g mask="url(#mask0_1773_9033)">
                            <path
                              d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z"
                              fill="#0034A9"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0 10H21V15H0V10Z"
                              fill="#D7280F"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0 0H21V5H0V0Z"
                              fill="white"
                            />
                            <path
                              d="M19 0.5H2C1.17157 0.5 0.5 1.17157 0.5 2V13C0.5 13.8284 1.17157 14.5 2 14.5H19C19.8284 14.5 20.5 13.8284 20.5 13V2C20.5 1.17157 19.8284 0.5 19 0.5Z"
                              stroke="black"
                              strokeOpacity="0.1"
                            />
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_1773_9033">
                            <rect width="21" height="15" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>

                    <div className={s.DropdownItem_CountryCode}>
                      <span>+{option.countryCode}</span>
                    </div>
                    <span className={s.DropdownItem_Label}>
                      {option.countryName}
                    </span>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className={s.Dropdown_Empty}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 49 17"
                fill="none"
                className={`${s.Icon} ${s.Icon__Top}`}
              >
                <path
                  d="M1.5 16C3.32284 11.3333 10.5713 2 24.9825 2C39.3937 2 45.9988 11.3333 47.5 16"
                  stroke="#1F1E58"
                  strokeOpacity="0.06"
                  strokeWidth="3"
                />
              </svg>
              <p>Nothing found</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 49 17"
                fill="none"
                className={`${s.Icon} ${s.Icon__Bottom}`}
              >
                <path
                  d="M1.5 1C3.32284 5.66667 10.5713 15 24.9825 15C39.3937 15 45.9988 5.66667 47.5 1"
                  stroke="#1F1E58"
                  strokeOpacity="0.06"
                  strokeWidth="3"
                />
              </svg>
            </div>
          )}
        </div>
      </div>

      {error ? (
        <div className={s.InputPhone_ErrorText}>
          <p>{error}</p>
        </div>
      ) : null}
    </div>
  );
};
export default BaseInputPhone;
