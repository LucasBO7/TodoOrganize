import styled from "styled-components";

// Container
export const ContainerTask = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 90%;
  height: 62px;
  padding: 0 5px;

  background-color: ${(props) => (props.isChecked ? "#6C45CE" : "white")};

  border: 1px solid #3c424a;
  border-radius: 8px;
`;

// Title
export const TaskTitle = styled.p`
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 15.5px;
  color: ${(props) => (props.isChecked ? "white" : "#25282c")};
`;
