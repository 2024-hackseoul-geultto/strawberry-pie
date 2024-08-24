import { clsx } from 'clsx';
import { ImageBox } from '../ImageBox';
import type { ImageBoxProps } from '../ImageBox';

import { FaCamera } from 'react-icons/fa6';
import styles from './style.module.scss';

interface ImageInputProps extends ImageBoxProps {
  className?: string;
  onLoad?: (src: string) => void;
  readonly?: boolean;
}

export const ImageInput = (props: ImageInputProps) => {
  const { className, onLoad, readonly, ...rest } = props;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      if (readonly) return;

      const result = e.target?.result;
      if (typeof result !== 'string') return;
      onLoad?.(result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <label htmlFor="profileImg" className={clsx(styles.container, className)}>
        <ImageBox className={styles.imageInput} {...rest}></ImageBox>
        {!readonly && (
          <div className={styles.logo}>
            <FaCamera size={32} />
          </div>
        )}
      </label>
      <input type="file" accept="image/*" id="profileImg" style={{ display: 'none' }} onChange={handleFileChange} />
    </>
  );
};
