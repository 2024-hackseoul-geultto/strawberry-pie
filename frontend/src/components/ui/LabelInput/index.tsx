import { clsx } from 'clsx';
import styles from './style.module.scss';

interface LabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const LabelInput = (props: LabelInputProps) => {
  const { label, type = 'text', value, onChange, className } = props;
  return (
    <div className={clsx(styles.container, className)}>
      <label className={clsx(styles.label)}>{label}</label>
      <input className={clsx(styles.input)} type={type} value={value} onChange={onChange} />
    </div>
  );
};
