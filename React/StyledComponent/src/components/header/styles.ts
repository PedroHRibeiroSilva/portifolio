import styled from "styled-components";

const ContainerHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: repeating-linear-gradient(-45deg, #ffffff, #ffffff 3px, #fde047 3px, #fde047 8px);
  height: 180px;
  width: 100%;
  font-size: 50px;
  font-family: "Crafty Girls";
  column-gap: 20px;
  user-select: none;

  img {
    width: 40px;
    height: 60px;
    margin-bottom: 20px;
  }
`;

export default ContainerHeader;
