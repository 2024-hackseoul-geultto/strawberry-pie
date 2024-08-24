import { clsx } from 'clsx';
import styles from './style.module.scss';

interface SelectButtonProps {
  label: string;
  checked: boolean;
  className?: string;
  onChange: () => void;
  style?: React.CSSProperties;
}


interface SelectProps {
  label?: string;
  options: { label: string; value: string }[];
  value: string;
  className?: string;
  onChange: (value: string) => void;
  optionStyle?: React.CSSProperties;
}

const Select = (props: SelectProps) => {
  const { options, value, onChange, className, label, optionStyle = {} } = props;
  return (
    <>
      {label && <label className={clsx(styles.titleLabel)}>{label}</label>}
  <div className={className}>
    {options.map((option) => (
      <div key={option.value}>{option.value}</div>
))}
  </div>
  </>
);
};

  export { Select };
