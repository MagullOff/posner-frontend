import { motion } from "framer-motion";
import { styled } from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

export type ShowBoxState = "empty" | "cue" | "full";
export type ShowBoxProps = {
  state: ShowBoxState;
};

export const ShowBox = ({ state }: ShowBoxProps) => {
  return (
    <ShowBoxContainer iscued={state === "cue" ? true : undefined}>
      {state === "full" && (
        <ShowBoxHit>
          <CloseIcon fontSize="inherit" />
        </ShowBoxHit>
      )}
      {state === "cue" && (
        <ShowBoxCue>
          <CloseIcon fontSize="inherit" />
        </ShowBoxCue>
      )}
    </ShowBoxContainer>
  );
};

const ShowBoxHit = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100px;
  font-size: 50px;
  border-radius: 55px;
  border: solid 5px ${(props) => props.theme.colors.cueBorder};
  background-color: ${(props) => props.theme.colors.cueBackground};
`;

const ShowBoxCue = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
  color: ${(props) => props.theme.colors.cueBorder};
`;

const ShowBoxContainer = styled(motion.div) <{ iscued?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 120px;
  border-radius: 10px;
  border: solid 2px ${(props) => props.theme.colors.primary};
`;
