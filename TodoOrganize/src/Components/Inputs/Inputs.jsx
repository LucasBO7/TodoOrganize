/* eslint-disable react/prop-types */
import { InputContainer, Input, SearchButton, BorderedInput } from "./Style";
import { IoIosSearch } from "react-icons/io";

export const IconTextInput = ({ onChange, searchingText }) => {
  return (
    <InputContainer>
      <SearchButton>
        <IoIosSearch width={"100%"} height={"100%"} color="white" />
      </SearchButton>
      <Input
        onChange={onChange}
        value={searchingText}
        placeholder="Procurar tarefa..."
      />
    </InputContainer>
  );
};

export const TextInput = ({ width, height, value, setNewTask, newTask }) => {
  return (
    <BorderedInput
      width={width}
      height={height}
      value={value}
      placeholder="Insira a descrição da tarefa..."
      onChange={(text) =>
        setNewTask({ ...newTask, description: text.target.value })
      }
    />
  );
};
