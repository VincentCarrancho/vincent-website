import { motion } from "framer-motion";

import React from "react";

function MotionDiv({
  children,
  scale,
}: Readonly<{
  children: React.ReactNode;
  scale?: number;
}>) {
  if (scale === undefined) {
    scale = 1.05;
  }

  return (
    <motion.div whileHover={{ scale: scale }} whileTap={{ scale: 0.975 }}>
      {children}
    </motion.div>
  );
}

export default MotionDiv;
