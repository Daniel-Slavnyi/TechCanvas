import React, { FunctionComponent } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { LayoutProps } from './Layout.props';
import SideBar from './SideBar/SideBar';
import style from './Layout.module.css';

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className={style.wrapper}>
      <Header className={style.header} />

      <SideBar className={style.sidebar} />
      <div className={style.body}>{children}</div>

      <Footer className={style.footer} />
    </div>
  );
}

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
