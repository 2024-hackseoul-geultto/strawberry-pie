import { clsx } from 'clsx';
import styles from './style.module.scss';

interface ProgressProps {
  step?: number;
  maxStep?: number;
}

export const ProgressBar = (props: ProgressProps) => {
  const { step = 1, maxStep = 2 } = props;
  const progress = (step / maxStep) * 100;
  return (
    <div className={clsx(styles.progressBarContainer)}>
      <div className={clsx(styles.progressBar)} role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} style={{ width: `${progress}%` }}></div>
    </div>
  );
};
