import { clsx } from 'clsx';
import styles from './style.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  width?: string | number;
  height?: string | number;
  icon?: React.ReactNode;
}

export const IconButton = (props: ButtonProps) => {
  const { width, height, className, icon, ...rest } = props;

  return (
    <button className={clsx(styles.button, className)} style={{ width, height }} {...rest}>
      {icon}
    </button>
  );
};
