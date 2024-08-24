import { clsx } from 'clsx';
import styles from './style.module.scss';

interface ItemProps {
  image?: string;
  title: string;
  description: string;
  rightChildren?: React.ReactNode;
  className?: string;
}

const Item = (props: ItemProps) => {
  const { image, title, description, rightChildren, className } = props;

  return (
    <div className={clsx(styles.container, className)}>
      <img src={image} alt="item" className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      {rightChildren}
    </div>
  );
};

export { Item };
