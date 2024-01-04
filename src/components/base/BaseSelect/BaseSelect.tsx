import { ALL_ICONS } from '@constants/icons';
import useOnClickOutside from '@hooks/useOnClickOutside';
import React, {
  MutableRefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { BaseIcon } from '..';
import s from './BaseSelect.module.scss';

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

const BaseSelect: React.FC<Props> = ({
  placeholder,
  withLabel = false,
  className,
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

  useEffect(() => {
    if (!isOpen) {
      onBlur();
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
      className={`${s.BaseSelect} ${isOpen ? s.BaseSelect__Focus : ''} ${
        error ? s.BaseSelect__Error : ''
      }  ${disabled ? s.BaseSelect__Disabled : ''}  ${
        selectedOption?.length && selectedOption[0].label !== placeholder
          ? s.BaseSelect__NotEmpty
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

      <div className={s.BaseSelect_Wrapper} onClick={toggling}>
        <div className={s.Select}>
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
      </div>

      {error ? (
        <div className={s.BaseSelect_ErrorText}>
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

              {/* {selected && (
                <BaseIcon
                  icon={ALL_ICONS.SELECT_CHECK}
                  viewBox="0 0 26 19"
                  className={s.DropdownItem_Check}
                />
              )} */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BaseSelect;
