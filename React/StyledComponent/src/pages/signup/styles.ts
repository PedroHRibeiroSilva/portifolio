import styled from "styled-components";

export const ContainerHeaderSignu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 50px;
  font-family: "Crafty Girls";
  column-gap: 20px;
  user-select: none;
  margin-top: 20px;
  img {
    width: 40px;
    height: 60px;
    margin-bottom: 20px;
  }
`;
export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  background-color: #fafafa;
  h1 {
    display: block;
    font-size: 50px;
    color: #fde047;
    font-family: "Arial";
    font-style: normal;
  }
`;

export const ContainerSignup = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 0.5px solid #ffffff;
  border-radius: 5px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.03), 0px 12px 23px rgba(0, 0, 0, 0.05);
  width: 400px;
  padding: 18px 35px;
  h2 {
    margin: 0px;
    font-size: 21px;
    color: #fde047;
    font-family: "Open Sans";
  }
  p {
    margin: 0px;
    margin-bottom: 17px;
    font-family: "Open Sans";
    font-style: normal;
    font-size: 14px;
    color: #4b4b4b;
  }
`;
export const SignUp = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  p {
    padding: 15px;
  }
  div {
    display: flex;
    width: 100%;
    margin-bottom: 15px;
  }
  #button {
    background-color: white;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #fde047;
    cursor: pointer;
    margin: 5px;
    padding: 15px;
    color: #fde047;
    font-size: 20px;
  }
`;
