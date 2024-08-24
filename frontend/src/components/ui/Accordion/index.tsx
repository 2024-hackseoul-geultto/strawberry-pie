import { useState, useRef } from 'react';
import { clsx } from 'clsx';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import styles from './style.module.scss';

interface AccordionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  disabled?: boolean;
  buttonIcon?: React.ReactNode;
}

const Accordion = (props: AccordionProps) => {
  const { title, children, description, disabled = false, buttonIcon = null } = props;
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    if (disabled) return;

    setIsOpen(!isOpen);
  };

  return (
    <div className={clsx(styles.accordion, isOpen && styles.open)}>
      <div onClick={toggleAccordion} className={styles['accordion-header']}>
        {title}
        {description && <span className={styles['accordion-description']}>{description}</span>}

        {buttonIcon || <span className={styles['accordion-icon']}>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>}
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
