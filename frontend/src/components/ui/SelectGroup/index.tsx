import { clsx } from 'clsx';
import styles from './style.module.scss';

interface SelectButtonProps {
  label: string;
  checked: boolean;
  className?: string;
  onChange: () => void;
  style?: React.CSSProperties;
}

const SelectButton = (props: SelectButtonProps) => {
  const { label, checked = false, style = {} } = props;

  return (
    <div className={clsx(styles.radioContainer, props.className)}>
      <input type="radio" className={clsx(styles.HiddenRadioButton)} defaultChecked={checked} />
      <div
        className={clsx(styles.customRadioButton, {
          [styles.checked]: checked,
        })}
        style={style}
        onClick={props.onChange}
      >
        <div className={clsx(styles.icon)} />
        <span className={clsx(styles.label)}>{label}</span>
      </div>
    </div>
  );
};

interface SelectGroupProps {
  label?: string;
  options: { label: string; value: string }[];
  value: string;
  className?: string;
  onChange: (value: string) => void;
  optionStyle?: React.CSSProperties;
}

const SelectGroup = (props: SelectGroupProps) => {
  const { options, value, onChange, className, label, optionStyle = {} } = props;
  return (
    <>
      {label && <label className={clsx(styles.titleLabel)}>{label}</label>}
      <div className={className}>
        {options.map((option) => (
          <SelectButton key={option.value} label={option.label} checked={value === option.value} onChange={() => onChange(option.value)} style={optionStyle} />
        ))}
      </div>
    </>
  );
};

export { SelectGroup };
