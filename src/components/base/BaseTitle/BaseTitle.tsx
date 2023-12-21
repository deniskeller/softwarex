import React, { ComponentProps, ElementType, ReactNode } from 'react';
import s from './BaseTitle.module.scss';

type OwnProps<E extends ElementType = ElementType> = {
  children?: ReactNode | ReactNode[];
  type?: string;
  className?: string;
  as?: E;
};

type Props<E extends ElementType> = OwnProps<E> &
  Omit<ComponentProps<E>, keyof OwnProps>;

const defaultElement = 'h1';

export default function BaseTitle<
  E extends ElementType = typeof defaultElement
>({ children, type = 'h1', className = '', ref, as, ...otherProps }: Props<E>) {
  const TagName = as || defaultElement;

  return (
    <div className={`${className}`} {...otherProps}>
      <TagName className={`${s.Title} ${s['Title_' + type]}`}>
        {children}
      </TagName>
    </div>
  );
}
