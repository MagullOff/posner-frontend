import { motion } from "framer-motion";
import { styled } from "styled-components";

export type ShowBoxState = "empty" | "cue" | "full";
export type ShowBoxProps = {
  state: ShowBoxState;
};

export const ShowBox = ({ state }: ShowBoxProps) => {
  return (
    <ShowBoxContainer iscued={state === "cue" ? true : undefined}>
      {state === "full" && <ShowBoxHit>x</ShowBoxHit>}
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
  border: solid 5px ${(props) => props.theme.colors.hitBorder};
  background-color: ${(props) => props.theme.colors.hitBackground};
`;

const ShowBoxContainer = styled(motion.div) <{ iscued?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 120px;
  ${(props) =>
    props.iscued
      ? `background-color: ${props.theme.colors.cueBackground};`
      : ""}
  border-radius: 10px;
  border: solid 2px ${(props) => props.theme.colors.primary};
`;
