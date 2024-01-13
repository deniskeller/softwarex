import { ALL_ICONS } from '@constants/icons';
import useOnClickOutside from '@hooks/useOnClickOutside';
import React, {
  MutableRefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import s from './AmountSelect.module.scss';

interface Props {
  placeholder?: string;
  withLabel?: boolean;
  type?: string;
  className?: string;
  error?: string | boolean;
  disabled?: boolean;
  options: ISelectItem[];
  value: ISelectItem[];
  onChange: (value: ISelectItem | ISelectItem[]) => void;
  onClear?: (e: { stopPropagation: () => void }) => void;
  onBlur: () => void;
  name?: string;
  ref?: MutableRefObject<null>;
  multiple?: boolean;
  withCounter?: boolean;
}

export interface ISelectItem {
  value: string;
  label: string;
}

const AmountSelect: React.FC<Props> = ({
  placeholder,
  withLabel = false,
  className = '',
  type = 'default',
  options,
  error = '',
  disabled = false,
  onChange,
  onClear,
  onBlur,
  value,
  multiple,
  withCounter,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = value;
  const listRef = useRef<HTMLUListElement>(null);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      onBlur();
      setFocus(false);
    }
  }, [isOpen, onBlur]);

  const selectContainerRef = React.useRef(null);

  const clickOutsideHandler = () => {
    setIsOpen(false);
    onBlur();
  };
  useOnClickOutside(selectContainerRef, clickOutsideHandler);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (option: ISelectItem) => () => {
    if (multiple) {
      const isSelected = selectedOption.find((el) => el.value === option.value);
      if (isSelected) {
        const newSelected = selectedOption.filter(
          (el) => el.value !== option.value
        );
        onChange(newSelected);
      } else {
        onChange([...selectedOption, option]);
      }
    } else {
      onChange([option]);
    }
    multiple ? setIsOpen(true) : setIsOpen(false);
  };

  // useEffect(() => {
  // 	console.log('value: ', value);
  // }, [value]);

  return (
    <div
      className={`${s.AmountSelect} ${isOpen ? s.AmountSelect__Focus : ''} ${
        focus ? s.AmountSelect__FocusInput : ''
      } ${error ? s.AmountSelect__Error : ''}  ${
        disabled ? s.AmountSelect__Disabled : ''
      }  ${
        selectedOption?.length && selectedOption[0].label !== placeholder
          ? s.AmountSelect__NotEmpty
          : ''
      } ${className}`}
      ref={selectContainerRef}
    >
      <label
        className={s.Label}
        style={{
          display: withLabel && selectedOption?.length ? 'block' : 'none',
        }}
      >
        <span>{placeholder}</span>
      </label>

      <div className={s.AmountSelect_Wrapper}>
        <div className={s.Select} onClick={toggling}>
          <span
            className={`${s.SelectedOption} ${
              selectedOption?.length ? s.SelectedOption__NotEmpty : ''
            }`}
          >
            {!multiple ? selectedOption[0]?.label : placeholder}
          </span>

          {multiple && withCounter && selectedOption.length > 0 && (
            <span className={s.SelectedCounter}>
              &nbsp;({selectedOption.length})
            </span>
          )}

          {withCounter && value.length >= 1 ? (
            <div onClick={onClear} className={s.ClearValue}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M3.66797 10.3327L10.3346 3.66602M3.66797 3.66602L10.3346 10.3327"
                  stroke="#6E7079"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          ) : null}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            className={s.Select_Chevron}
          >
            <path
              d="M19 9L12 16L5 9"
              stroke="#1F1E58"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeOpacity=".6"
            />
          </svg>
        </div>

        <input
          // value={value}
          type="tel"
          className={s.Input}
          // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          //   onChange(e.target.value)
          // }
          // onKeyDown={onKeyDown}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          autoComplete="new-password"
        />
      </div>

      {error ? (
        <div className={s.AmountSelect_ErrorText}>
          <p>{error}</p>
        </div>
      ) : null}

      <ul
        className={s.Dropdown}
        ref={listRef}
        style={{
          visibility: isOpen ? 'visible' : 'hidden',
        }}
      >
        {options.map((option: ISelectItem) => {
          const selected =
            selectedOption &&
            selectedOption.find((el) => el.value === option.value);
          return (
            <li
              className={`${s.DropdownItem} ${
                selected ? s.DropdownItem__Active : ''
              }`}
              onClick={onOptionClicked(option)}
              key={option.value}
            >
              <span className={s.DropdownItem_Label}>{option.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AmountSelect;
