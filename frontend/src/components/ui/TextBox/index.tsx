import { clsx } from 'clsx';
import styles from './style.module.scss';

interface TextBoxProps {
  children: React.ReactNode;
  className?: string;
}

const TextBox = (props: TextBoxProps) => {
  const { children, className } = props;
  return <div className={clsx(styles.textBox, className)}>{children}</div>;
};

export { TextBox };
