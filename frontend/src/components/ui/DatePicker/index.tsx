import React, { useRef } from 'react';
import { clsx } from 'clsx';
import styles from './style.module.scss';

interface DateInputButtonProps {
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface DatePickerProps {
  label: string;
  value: string | [string, string];
  type: 'single' | 'range';
  name: string | [string, string];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onStartDateChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEndDateChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function DateInput(props: DateInputButtonProps) {
  const { value, name, onChange } = props;
  const dateInputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    dateInputRef.current?.click();
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <button className={clsx(styles.input)} onClick={handleClick}>
      <label className={clsx(styles.name)}>{name}</label>
      <div className={clsx(styles.divider)} />
      <input type="datetime-local" ref={dateInputRef} onChange={handleDateChange} value={value} />
    </button>
  );
}

function DatePicker(props: DatePickerProps) {
  const { label, name, value, onChange, type, onStartDateChange, onEndDateChange } = props;

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newStartDate = e.target.value;
    let newEndDate = value?.[1];

    if (newEndDate && newStartDate > newEndDate) {
      [newStartDate, newEndDate] = [newEndDate, newStartDate];
    }

    onStartDateChange?.({ ...e, target: { ...e.target, value: newStartDate } });
    if (newEndDate) {
      onEndDateChange?.({ ...e, target: { ...e.target, value: newEndDate } });
    }
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newEndDate = e.target.value;
    let newStartDate = value?.[0];

    if (newStartDate && newStartDate > newEndDate) {
      [newStartDate, newEndDate] = [newEndDate, newStartDate];
    }

    onEndDateChange?.({ ...e, target: { ...e.target, value: newEndDate } });
    if (newStartDate) {
      onStartDateChange?.({ ...e, target: { ...e.target, value: newStartDate } });
    }
  };

  return (
    <div className={clsx(styles.container)}>
      <label className={clsx(styles.label)}>{label}</label>

      {type === 'single' && <DateInput value={Array.isArray(value) ? value[0] : value} onChange={handleDateChange} name={Array.isArray(name) ? name[0] : name} />}
      {type === 'range' && (
        <div className={clsx(styles.range)}>
          <DateInput value={value?.[0]} onChange={handleStartDateChange} name={name?.[0] || ''} />
          <DateInput value={value?.[1]} onChange={handleEndDateChange} name={name?.[1] || ''} />
        </div>
      )}
    </div>
  );
}

export { DatePicker };
