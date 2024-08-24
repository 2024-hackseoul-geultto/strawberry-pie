import { clsx } from 'clsx';
import styles from './style.module.scss';

interface TextAreaProps {
  label?: string;
  value: string;
  onChange?: (value: string) => void;
  className?: string;
  readOnly?: boolean;
}

const TextArea = (props: TextAreaProps) => {
  const { label = '', className, value, onChange, readOnly } = props;
  return (
    <div className={className}>
      {label && <label className={clsx(styles.label)}>{label}</label>}
      <textarea className={clsx(styles.textarea)} value={value} onChange={(e) => onChange?.(e.target.value)} readOnly={readOnly} />
    </div>
  );
};

export { TextArea };
