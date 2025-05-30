"use client";

import { useEffect, useState, ReactNode } from "react";
import { motion, MotionProps } from "framer-motion";

type Props = {
  children: ReactNode;
} & MotionProps & React.HTMLAttributes<HTMLDivElement>;

export default function SafeMotionDiv({ children, ...rest }: Props) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(true); // Only true in browser
  }, []);

  if (!enabled) {
    return <div {...rest}>{children}</div>; // fallback div during static export
  }

  return <motion.div {...rest}>{children}</motion.div>;
}
