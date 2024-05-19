import styled from "styled-components";

export const Container = styled.div`

  display: grid;
  grid-template-columns: auto auto auto;
  gap: 2rem;
  margin-top: 2rem;

  @media screen and (max-width: ${(props) => props.theme.breakPoints.sm}){

    grid-template-columns: auto;

  }

`;
