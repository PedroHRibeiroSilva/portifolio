import { StarIcon as SIcon } from "@heroicons/react/24/outline";
import styled from "styled-components";

interface IStarIcon {
  active: boolean;
}

export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 40px;

  border-left: 1px solid #e5e7eb;
  border-top: 1px solid #e5e7eb;
`;

export const Card = styled.div`
  height: 475px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 0.75fr;
  padding: 20px;
  justify-items: center;
  text-align: center;
  border-right: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
`;

export const CardImagem = styled.div`
  display: flex;
  width: 80%;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

export const CardTitle = styled.h3`
  font-weight: 500;
  font-size: 0.875rem; /* 14px */
  line-height: 1.25rem; /* 20px */
  color: #111827;
  margin-top: 40px;
`;

export const CardReview = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;

  p {
    margin: 0;
    margin-top: 4px;
    font-size: 0.875rem; /* 14px */
    line-height: 1.25rem; /* 20px */
    color: #6b7280;
  }
`;

export const ContainerRating = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;

  & svg:hover {
    cursor: pointer;
    stroke: ${({ theme }) => theme.primary.default};
    fill: ${({ theme }) => theme.primary.default};

    & ~ svg {
      stroke: ${({ theme }) => theme.primary.default};
      fill: ${({ theme }) => theme.primary.default};
    }
  }

  div:first-child {
    display: flex;
    justify-content: center;
  }
`;

export const CardPrice = styled.div`
  margin-top: 16px;

  span {
    font-weight: 500;
    color: #111827;
    font-size: 1rem; /* 16px */
    line-height: 1.5rem; /* 24px */
  }
`;

export const StarIcon = styled(SIcon)<IStarIcon>`
  width: 24px;
  height: 24px;
  stroke: ${({ theme, active }) => (active ? theme.secondary.default : "#E5E5E5")};
  fill: ${({ theme, active }) => (active ? theme.secondary.default : "white")};
`;
