import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { ViewContainer } from "../components/view";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const TopLeftButton = styled(motion.div)`
  position: absolute;
  font-size: 60px;
  cursor: pointer;
`;

const OutsideContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: min(90vw, 1000px);
`;

type SideViewProps = {
  children: ReactNode | ReactNode[];
};

export const SideView = ({ children }: SideViewProps) => {
  const navigate = useNavigate();
  return (
    <ViewContainer>
      <TopLeftButton
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate("/..")}
      >
        <ArrowBackIosIcon fontSize="inherit" />
      </TopLeftButton>
      <OutsideContainer>
        <Container>{children}</Container>
      </OutsideContainer>
    </ViewContainer>
  );
};
