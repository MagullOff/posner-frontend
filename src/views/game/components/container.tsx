import { motion } from "framer-motion";
import { ReactNode } from "react";
import { styled } from "styled-components";

type ContainerProps = {
  children: ReactNode | ReactNode[];
};

const BaseContainer = styled(motion.div)`
  padding: 3vh;
`;

export const Container = ({ children }: ContainerProps) => {
  return (
    <BaseContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </BaseContainer>
  );
};
