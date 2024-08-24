import { clsx } from 'clsx';
import styles from './style.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  icon?: React.ReactNode;
  width?: string;
}

export const IconButton = (props: ButtonProps) => {
  const { className, icon, onClick } = props;
  const { width } = props;

  return (
    <button className={clsx(styles.button, className)} style={{ width }} onClick={onClick}>
      {icon}
    </button>
  );
};
