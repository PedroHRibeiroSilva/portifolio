import styled from "styled-components";

const ContainerInput = styled.div`
  display: flex;
  white-space: nowrap; //usado so pra testo
  input {
    display: flex;
    border: 1px solid gray;
    border-radius: 5px;
    background-color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    padding: 7px;
    margin-top: 10px;
    margin-bottom: 10px;
    outline: none;
    padding-left: 10px;
  }
`;

export default ContainerInput;
