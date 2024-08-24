import { clsx } from 'clsx';
import styles from './style.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  width?: string | number;
  icon?: React.ReactNode;
}

export const IconButton = (props: ButtonProps) => {
  const { className, icon, ...rest } = props;
  const { width } = props;

  return (
    <button className={clsx(styles.button, className)} style={{ width }} {...rest}>
      {icon}
    </button>
  );
};
