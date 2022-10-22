import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import styles from './ContentBlock.module.css';
import useMedia from 'hooks/useMedia';
import cn from 'classnames';

interface Props {
  children: ReactNode | ReactNode[];
  key: string;
}

const ContentBlock = ({ children, key }: Props) => {
  const { isMobile } = useMedia();

  return (
    <motion.div
      transition={{ ease: 'easeOut', duration: 0.3 }}
      key={key}
      initial={{ translateX: -40, opacity: 0 }}
      animate={{ translateX: 0, opacity: 1 }}
      exit={{ translateX: 40, opacity: 0 }}
    >
      <div className={cn([styles.block, { [styles.blockMobile]: isMobile }])}>
        {children}
      </div>
    </motion.div>
  );
};

export default ContentBlock;
