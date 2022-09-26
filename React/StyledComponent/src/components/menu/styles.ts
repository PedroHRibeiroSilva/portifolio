import styled from "styled-components";
import { IItemProps } from "./types";

export const Nav = styled.nav`
  position: sticky;
  display: flex;
  top: 0;
  background-color: ${({ theme }) => theme.secondary.default};
  border-top: ${({ theme }) => `2px dashed ${theme.primary.default}`};
  border-bottom: ${({ theme }) => `2px dashed ${theme.primary.default}`};
  height: 60px;
  width: 100%;
  justify-content: center;
  user-select: none;
`;

export const Items = styled.ul`
  list-style: none;
  display: flex;
  column-gap: 20px;
  font-family: Open Sauce Sans Light;
  align-items: center;
`;

export const Item = styled.li<IItemProps>`
  display: flex;

  a {
    text-decoration: none;
    color: black;
    font-weight: 600;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    font-size: 15px;
    border-bottom: ${({ isActive, theme }) =>
      isActive ? `2px solid ${theme.primary.default}` : "2px solid transparent"};
  }
`;
