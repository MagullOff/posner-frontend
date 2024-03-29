import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { ViewContainer } from "../components/view";

const TopLeftButton = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
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
  max-width: min(90vw, 1000px);
`;

type SideViewProps = {
  children: ReactNode | ReactNode[];
};

export const SideView = ({ children }: SideViewProps) => {
  const navigate = useNavigate();
  return (
    <ViewContainer>
      <TopLeftButton onClick={() => navigate("/..")}>sadf</TopLeftButton>
      <OutsideContainer>
        <Container>{children}</Container>
      </OutsideContainer>
    </ViewContainer>
  );
};
