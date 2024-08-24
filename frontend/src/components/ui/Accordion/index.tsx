import { useState, useRef } from 'react';
import { clsx } from 'clsx';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { ImageBox } from '../ImageBox';

import styles from './style.module.scss';

interface AccordionProps {
  title: string;
  image?: string;
  description?: string;
  children: React.ReactNode;
  disabled?: boolean;
  buttonIcon?: React.ReactNode;
}

const Accordion = (props: AccordionProps) => {
  const { image, title, children, description, disabled = false, buttonIcon = null } = props;
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    if (disabled) return;

    setIsOpen(!isOpen);
  };

  return (
    <div className={clsx(styles.accordion, isOpen && styles.open)}>
      <div onClick={toggleAccordion} className={styles['accordion-header']}>
        <ImageBox src={image} width={40} height={40} className={styles['accordion-image']} />
        <div className={styles['accordion-title']}>
          {title}
          {description && <span className={styles['accordion-description']}>{description}</span>}

          {buttonIcon || <span className={styles['accordion-icon']}>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>}
        </div>
      </div>
      <div
        ref={contentRef}
        className={styles['accordion-content']}
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px',
        }}
      >
        <div className={styles['accordion-content-inner']}>{children}</div>
      </div>
    </div>
  );
};

export { Accordion };
