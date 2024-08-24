import { clsx } from 'clsx';
import styles from './style.module.scss';

const sizeMap = {
  sm: 150,
  md: 170,
};

interface ImageBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: keyof typeof sizeMap;
  width?: number;
  height?: number;
  src?: string;
  type?: 'circle' | 'square';
}

export const ImageBox = (props: ImageBoxProps) => {
  const { size = 'md', src = '', type = 'circle', className } = props;

  const style = {
    width: props.width || sizeMap[size],
    height: props.height || sizeMap[size],
    borderRadius: type === 'circle' ? '50%' : '12px',
  };

  return (
    <div className={clsx(styles.imageBox, className)} style={style}>
      <img src={src} alt="Image" />
    </div>
  );
};
