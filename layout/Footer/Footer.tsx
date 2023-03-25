import React from 'react';
import cn from 'classnames';
import { format } from 'date-fns';
import { FooterProps } from './Footer.props';
import { Ptag, Tab } from '@/components';

import style from './Footer.module.css';

export default function Footer({
  className,
  ...props
}: FooterProps): JSX.Element {
  return (
    <footer className={cn(className, style.wrapper)} {...props}>
      <Ptag size="mdp">
        DanyloSlavnyi © {format(new Date(), 'yyyy')} Все права защищены
      </Ptag>
      <Tab href="https://github.com/Daniel-Slavnyi" target="_blank">
        GitHub
      </Tab>
      <Tab href="https://www.linkedin.com/in/danylo-slavnyi/" target="_blank">
        LinkedIn
      </Tab>
    </footer>
  );
}
