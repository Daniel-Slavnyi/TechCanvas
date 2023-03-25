import React from 'react';
import { TabProps } from './Tab.props';
import cn from 'classnames';
import style from './Tab.module.css';

export function Tab({
  size = 'smt',
  color = 'ghost',
  href,
  children,
  className,
  target,
  ...props
}: TabProps): JSX.Element {
  return (
    <div
      className={cn(style.tab, className, {
        [style.smt]: size === 'smt',
        [style.mdt]: size === 'mdt',
        [style.grey]: color === 'grey',
        [style.green]: color === 'green',
        [style.red]: color === 'red',
        [style.ghost]: color === 'ghost',
        [style.primary]: color === 'primary',
      })}
      {...props}
    >
      {href ? (
        <a href={href} target={target}>
          {children}
        </a>
      ) : (
        <>{children}</>
      )}
    </div>
  );
}
