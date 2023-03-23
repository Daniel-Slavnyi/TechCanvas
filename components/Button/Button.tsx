import React from 'react';
import { ButtonProps } from './Button.props';
import cn from 'classnames';
import style from './Button.module.css';
import ArrowIcon from './arrow.svg';

export function Button({
  appearance,
  children,
  className,
  arrow = 'none',
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      className={cn(style.button, className, {
        [style.primary]: appearance === 'primary',
        [style.ghost]: appearance === 'ghost',
      })}
      {...props}
    >
      {children}
      {arrow !== 'none' && (
        <ArrowIcon
          className={cn(style.arrow, {
            [style.dawn]: arrow === 'dawn',
          })}
        />
      )}
    </button>
  );
}
