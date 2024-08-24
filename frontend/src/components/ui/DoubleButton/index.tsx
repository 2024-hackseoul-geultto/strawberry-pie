import { clsx } from 'clsx';
import styles from './style.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const DoubleButton = (props: ButtonProps) => {
  const { children, onClick } = props;

  return (
    <button className={clsx(styles.button, props.className)} onClick={onClick}>
      {children}
    </button>
  );
};
