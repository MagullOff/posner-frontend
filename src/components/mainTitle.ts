import { motion } from "framer-motion";
import { styled } from "styled-components";

export const Title = styled(motion.h1)`
  font-size: 70px;
  color: ${(props) => props.theme.colors.primary};
`;
