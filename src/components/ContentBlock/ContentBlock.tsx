import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import styles from './ContentBlock.module.css';

interface Props {
  children: ReactNode | ReactNode[];
  key: string;
}

const ContentBlock = ({ children, key }: Props) => {
  return (
    <motion.div
      transition={{ ease: 'easeOut', duration: 0.3 }}
      key={key}
      initial={{ translateX: -40, opacity: 0 }}
      animate={{ translateX: 0, opacity: 1 }}
      exit={{ translateX: 40, opacity: 0 }}
    >
      <div className={styles.block}>{children}</div>
    </motion.div>
  );
};

export default ContentBlock;
