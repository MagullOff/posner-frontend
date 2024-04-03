import { motion } from "framer-motion";
import { ReactNode } from "react";

type ViewContainerProps = {
  children: ReactNode | ReactNode[];
  isHomeView?: boolean;
};
export const ViewContainer = ({
  children,
  isHomeView = false,
}: ViewContainerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isHomeView ? "-100vw" : "100vh" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: isHomeView ? "-100vw" : "100vh" }}
      transition={{ type: "spring", duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
