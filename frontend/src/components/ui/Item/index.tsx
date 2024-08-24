import { clsx } from 'clsx';
import styles from './style.module.scss';

interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  showImage?: boolean;
  image?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Item = (props: ItemProps) => {
  const { showImage = true, image, title, description, children, className, onClick, ...rest } = props;

  return (
    <div className={clsx(styles.container, className)} onClick={onClick} {...rest}>
      {showImage && <img src={image} alt="item" className={styles.image} />}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.rightArea}>{children}</div>
    </div>
  );
};

export { Item };
