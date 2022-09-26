import styled from "styled-components";

export const ContainerHeaderLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
  column-gap: 20px;
  user-select: none;
  img {
    width: 40px;
    height: 60px;
    margin-bottom: 20px;
  }
`;
export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.5px solid #ffffff;
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.03), 0px 12px 23px rgba(0, 0, 0, 0.05);
  width: 450px;
  padding: 18px 35px;
`;
export const Logins = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
