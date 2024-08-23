import "./Home.css";
import moment from "moment";
import "moment/dist/locale/pt-br";
import { PrimaryButton, SndButton } from "../../Components/Buttons/Buttons";
import {
  Container,
  ModalContainer,
  TasksContainer,
} from "../../Components/Containers/Container";
import { IconTextInput, TextInput } from "../../Components/Inputs/Inputs";
import { MainTite } from "../../Components/Titles/Titles";
import "../../Components/Table/Table.css";
import { Task } from "../../Components/Tasks/Task";
import { useEffect, useState } from "react";
import { capitalize } from "@mui/material";

export const Home = () => {
  // Modal
  const [openModal, setOpenModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(true);

  const [tasks, setTasks] = useState([
    {
      id: generateUniqueId(),
      isDone: false,
      title: "Banana",
      description: "Comprar um cacho de banana prata.",
    },
    {
      id: generateUniqueId(),
      isDone: true,
      title: "Banana",
      description: "Enviar e-mail de feedback para a equipe.",
    },
    {
      id: generateUniqueId(),
      isDone: false,
      title: "Banana",
      description: "Agendar reunião com o cliente para quinta-feira",
    },
    {
      id: generateUniqueId(),
      isDone: false,
      title: "Banana",
      description: "Ler capítulo 5 do livro de Machine Learning.",
    },
    {
      id: generateUniqueId(),
      isDone: false,
      title: "Banana",
      description: "Vender arroz para Neusa",
    },
  ]);
  const [filteredTasks, setFilteredTasks] = useState(null);

  const [newTask, setNewTask] = useState({
    id: 0,
    isDone: false,
    title: "Titulo",
    description: null,
  });

  const [searchingText, setSearchingText] = useState("");

  // Gera um Id único utilizando a data atual
  function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString();
  }

  // Manipuladores do Array
  function createTask(taskList, newTask) {
    taskList.push(newTask);
    onModalClose();
  }
  function updateTask(taskList, newTask) {
    const index = taskList.findIndex((task) => task.id == newTask.id);
    taskList[index] = { ...taskList[index], description: newTask.description };

    // Muda o modal para
    setModalEdit(false);
    onModalClose();
  }

  // Eventos
  function onRemoveClick(index) {
    if (index >= 0) setTasks(tasks.filter((task, i) => i !== index));
  }
  function onEditClick(index) {
    const taskToEdit = tasks[index];
    setNewTask(taskToEdit);
    setModalEdit(true);
    onModalOpen(true);
  }

  // Modal Functions
  function onModalClose(isModalEdit) {
    setOpenModal(false);
    setModalEdit(isModalEdit);

    // Zera a task criada / editada
    setNewTask({});
  }
  function onModalOpen(isModalEdit) {
    setOpenModal(true);
    // newTask.clear();
    setModalEdit(isModalEdit);
  }
  function onSearchInputChange(text) {
    // Guarda o texto na variável
    setSearchingText(text);

    // Filtra as tarefas pela busca
    const result = tasks.filter((task) =>
      task.description.toLowerCase().startsWith(searchingText.toLowerCase())
    );

    result.length === 0 ? setFilteredTasks(null) : setFilteredTasks(result);
  }

  useEffect(() => {
    moment.localeData("pt-br");
  }, []);

  return (
    <div className="page-container">
      <Container>
        <MainTite fontSize={"24px"}>
          {capitalize(moment().format("dddd"))},{" "}
          <span className="purple-color">{moment().format("D")}</span> de{" "}
          {capitalize(moment().format("MMMM"))}
        </MainTite>

        <IconTextInput
          searchingText={searchingText}
          onChange={(text) => onSearchInputChange(text.target.value)}
        />

        <TasksContainer>
          {searchingText.length > 0 ? (
            filteredTasks == null ? (
              <p>Nenhuma tarefa encontrada!</p>
            ) : (
              filteredTasks.map((task) => (
                <Task
                  key={task.id}
                  task={task}
                  tasks={tasks}
                  setTasks={setTasks}
                  onRemoveClick={onRemoveClick}
                  onEditClick={onEditClick}
                />
              ))
            )
          ) : (
            tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                tasks={tasks}
                setTasks={setTasks}
                onRemoveClick={onRemoveClick}
                onEditClick={onEditClick}
              />
            ))
          )}
        </TasksContainer>
      </Container>

      <PrimaryButton onClick={() => onModalOpen(false)}>
        Nova tarefa
      </PrimaryButton>

      <ModalContainer
        open={openModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <>
          <Container className="container-pos-ref">
            <SndButton
              className="align-self-left"
              onClick={() => onModalClose()}
            >
              sair
            </SndButton>
            <MainTite fontSize={"32px"}>Descreva sua tarefa</MainTite>

            <TextInput
              width={"63.1%"}
              height={"177px"}
              newTask={newTask}
              setNewTask={setNewTask}
              value={newTask.description}
            />

            <PrimaryButton
              onClick={() =>
                newTask.description
                  ? modalEdit
                    ? updateTask(tasks, newTask)
                    : createTask(tasks, newTask)
                  : null
              }
            >
              Confirmar tarefa
            </PrimaryButton>
          </Container>
        </>
      </ModalContainer>
    </div>
  );
};
