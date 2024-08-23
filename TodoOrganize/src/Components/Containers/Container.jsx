import styled from "styled-components";
import { Modal } from "@mui/material";

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 26px;

  max-width: 745px;
  max-height: 500px;
  width: 80vw;
  height: 80vh;
  padding: 50px 0 20px 0;

  border-radius: 8px;
  background-color: #1e123b;
`;

export const ActionsContainer = styled.div`
  width: 76px;
`;

export const TasksContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;

  overflow-y: scroll;
`;

export const ModalContainer = styled(Modal)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #1e123b64;
  backdrop-filter: blur(5px);
`;