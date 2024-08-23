import "./Home.css";
import { PrimaryButton } from "../../Components/Buttons/Buttons";
import { Container, ModalContainer, TasksContainer } from "../../Components/Containers/Container";
import { IconTextInput, TextInput } from "../../Components/Inputs/Inputs";
import { MainTite } from "../../Components/Titles/Titles";
import '../../Components/Table/Table.css';
import moment from "moment";
import { Task } from "../../Components/Tasks/Task";
import { useEffect, useState } from "react";

export const Home = () => {
    const [openModal, setOpenModal] = useState(false);
    const [modalEdit, setModalEdit] = useState(true);

    const [tasks, setTasks] = useState(
        [
            { id: generateUniqueId(), isDone: false, title: 'Banana', description: 'Comprar um cacho de banana prata.' },
            { id: generateUniqueId(), isDone: true, title: 'Banana', description: 'Comprar 26 uvas.' },
            { id: generateUniqueId(), isDone: false, title: 'Banana', description: 'Comprar um quilo de picanha.' },
            { id: generateUniqueId(), isDone: false, title: 'Banana', description: 'Comprar um quilo de picanha.' },
            { id: generateUniqueId(), isDone: false, title: 'Banana', description: 'Comprar um quilo de picanha.' }
        ]
    );

    const [newTask, setNewTask] = useState({
        id: 0,
        isDone: false,
        title: 'Titulo',
        description: null
    });

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
        const index = taskList.findIndex(task => task.id == newTask.id);
        taskList[index] = { ...taskList[index], description: newTask.description };

        // Muda o modal para 
        setModalEdit(false);
        onModalClose();

        // Zera a task criada
        setNewTask({});
    }

    // Eventos
    function onRemoveClick(index) {
        if (index >= 0)
            setTasks(tasks.filter((task, i) => i !== index));
    }
    function onEditClick(index) {
        const taskToEdit = tasks[index];
        setNewTask(taskToEdit);
        setModalEdit(true);
        onModalOpen(true);
    }


    // Modais Functions
    function onModalClose(isModalEdit) {
        setOpenModal(false);
        setModalEdit(isModalEdit);
    }
    function onModalOpen(isModalEdit) {
        setOpenModal(true);
        // newTask.clear();
        setModalEdit(isModalEdit);
    }

    // moment.locale('pt');
    return (
        <div className="page-container">

            <Container>
                <MainTite fontSize={"24px"}>{moment().locale('pt').format('dddd')},  <span className="purple-color">{moment().locale('pt').format('Do')}</span> de  {moment().locale('pt').format('MMMM')}</MainTite>

                <IconTextInput />


                <TasksContainer>
                    {
                        tasks.length <= 0
                            ? (
                                <p>Nenhuma tarefa salva!</p>
                            )
                            : (
                                tasks.map((task) =>
                                    <Task
                                        key={task.id}
                                        task={task}
                                        tasks={tasks}
                                        setTasks={setTasks}
                                        onRemoveClick={onRemoveClick}
                                        onEditClick={onEditClick}
                                    />)
                            )
                    }
                </TasksContainer>

            </Container>

            <PrimaryButton onClick={() => onModalOpen(false)}>Nova tarefa</PrimaryButton>

            <ModalContainer
                open={openModal}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Container>
                    <PrimaryButton onClick={() => onModalClose()}>sair</PrimaryButton>

                    <MainTite
                        fontSize={"32px"}
                    >Descreva sua tarefa</MainTite>

                    <TextInput
                        width={'63.1%'}
                        height={'177px'}
                        newTask={newTask}
                        setNewTask={setNewTask}
                        value={newTask.description}
                    />

                    <PrimaryButton onClick={() => modalEdit ? updateTask(tasks, newTask) : createTask(tasks, newTask)}>Confirmar tarefa</PrimaryButton>
                </Container>
            </ModalContainer>

        </div>
    );
}