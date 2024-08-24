import React from 'react';
import { clsx } from 'clsx';
import styles from './style.module.scss';

interface LayoutProps {
  headerContent: React.ReactNode; 
  children: React.ReactNode;
  footerContent: React.ReactNode;
}

function Layout(props: LayoutProps) {
  const { headerContent, children, footerContent } = props;
  return (
    <div className={clsx(styles.layout)}>
      {headerContent && <header className={clsx(styles.header)}>{headerContent}</header>}
      <div className={clsx(styles.content)}>{children}</div>
      {footerContent && <footer className={clsx(styles.footer)}>{footerContent}</footer>}
    </div>
  );
}

export default Layout;
