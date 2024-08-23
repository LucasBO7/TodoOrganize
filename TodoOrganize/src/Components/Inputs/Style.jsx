import styled from "styled-components";
import '../../assets/fonts/fonts-import.css'

export const SearchButton = styled.button`
  background-color: transparent;
  padding: 5px;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 5px;
  max-width: 310px;
  width: 80%;

  background-color: #1E123B;
  border-radius: 8px;
  border: 2px solid white;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  padding: 10px;

  color: white;
  background-color: transparent;

  font-family: 'Roboto';

  font-size: 15.5px;
  text-decoration: none;
  border: 0 none;
  outline: 0;
`;


export const BorderedInput = styled.textarea`
  width: ${props => props.width};
  height: ${props => props.height};
  padding: 10px;
  resize: none;

  color: white;
  background-color: #1E123B;
  border-radius: 8px;
  border: 2px solid white;

  text-align: start;

  font-family: 'Roboto';

`;