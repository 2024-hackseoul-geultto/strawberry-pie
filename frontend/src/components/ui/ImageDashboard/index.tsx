import { clsx } from 'clsx';

import styles from './style.module.scss';

const sizeMap = {
  sm: 150,
  md: 170,
};

export interface ImageDashboardProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: keyof typeof sizeMap;
  width?: number;
  height?: number;
  src?: string;
  type?: 'circle' | 'square' | 'normal';
}

export const ImageDashboard = (props: ImageDashboardProps) => {
  const { size = 'md', src = '', type = '', className } = props;

  const style = {
    width: props.width || 300,
    height: props.height || 750,
    borderRadius: type === 'circle' ? '50%' : '12px',
  };

  return (
    <div className={clsx(styles.imageBox, className)} style={style}>
      {src && <img src={src} alt="Image" className={styles.image} />}
    </div>
  );
};
