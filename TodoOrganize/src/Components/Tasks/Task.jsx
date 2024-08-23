/* eslint-disable react/prop-types */
import { Check } from "../Buttons/Animated/CheckBtn/Check";
import { ContainerTask, TaskDescription } from "./Style";
import { ActionsContainer } from "../Containers/Container";
import { EditBtn } from "../Buttons/Animated/EditBtn/EditBtn";
import { RemoveBtn } from "../Buttons/Animated/RemoveBtn/RemoveBtn";

export const Task = ({ task, tasks, setTasks, onRemoveClick, onEditClick }) => {
  const { isDone } = task;
  const index = tasks.findIndex(
    (e) => JSON.stringify(e) === JSON.stringify(task)
  );

  return (
    <ContainerTask isChecked={task.isDone}>
      <Check
        checked={task.isDone}
        onClick={() => {
          if (index >= 0) {
            const newTasks = [...tasks];
            newTasks[index] = { ...task, isDone: isDone ? false : true };
            setTasks(newTasks);
          }
        }}
      />

      <TaskDescription isChecked={task.isDone}>{task.description}</TaskDescription>

      <ActionsContainer>
        <EditBtn onClick={() => onEditClick(index)} />
        <RemoveBtn onClick={() => onRemoveClick(index)} />
      </ActionsContainer>
    </ContainerTask>
  );
};
