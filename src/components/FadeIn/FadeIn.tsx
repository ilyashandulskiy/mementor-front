import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const FadeIn = ({ children }: Props) => {
  return (
    <motion.div
      transition={{ ease: 'easeOut', duration: 0.3 }}
      initial={{ translateX: -40, opacity: 0 }}
      animate={{ translateX: 0, opacity: 1 }}
      exit={{ translateX: 40, opacity: 0 }}
      style={{ width: '100%', height: '100%', display: 'flex' }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
