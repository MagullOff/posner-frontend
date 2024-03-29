import { motion } from "framer-motion";
import { styled } from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type ButtonProps = {
  text: string;
  onClick: () => void;
};
export const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <Container
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
    >
      <TextContainer>{text}</TextContainer>
      <Arrow />
    </Container>
  );
};

const Container = styled(motion.div)`
  height: 7vh;
  font-size: 4vh;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  flex: 1;
  text-align: center;
  vertical-align: middle;
  color: ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  &:hover {
    .arrow-container {
      opacity: 1;
    }
  }
`;

const TextContainer = styled(motion.div)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-left: 40px;
`;

const Arrow = () => {
  return (
    <ArrowContainer className="arrow-container">
      <ArrowForwardIosIcon fontSize="inherit" />
    </ArrowContainer>
  );
};

const ArrowContainer = styled.div`
  width: 40px;
  display: flex;
  font-size: 4vh;
  flex-direction: row;
  align-items: center;
  opacity: 0;
  transition: 0.5s all;
`;
