import { motion } from "framer-motion";
import { styled } from "styled-components";

export type ShowBoxState = "empty" | "cue" | "full";
export type ShowBoxProps = {
  state: ShowBoxState;
};

export const ShowBox = ({ state }: ShowBoxProps) => {
  return (
    <ShowBoxContainer>
      {state === "cue" && <ShowBoxCue>x</ShowBoxCue>}
      {state === "full" && <ShowBoxHit>x</ShowBoxHit>}
    </ShowBoxContainer>
  );
};

const ShowBoxCue = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  height: 100px;
  width: 100px;
  border-radius: 55px;
  border: solid 5px ${(props) => props.theme.colors.cueBorder};
  background-color: ${(props) => props.theme.colors.cueBackground};
`;

const ShowBoxHit = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100px;
  font-size: 50px;
  border-radius: 55px;
  border: solid 5px ${(props) => props.theme.colors.hitBorder};
  background-color: ${(props) => props.theme.colors.hitBackground};
`;

const ShowBoxContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 120px;
  border-radius: 10px;
  border: solid 2px ${(props) => props.theme.colors.primary};
`;
