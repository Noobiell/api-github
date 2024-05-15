import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align:center;
  min-height: 100vh;
  padding: 0 2rem;
`;

export const Logo = styled.img`

  width: 130px;

`;

export const Title = styled.h1`

  font-size: 2.2rem;
  color: ${(props) => props.theme.colors.white};

`;

export const Form = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 583px;
`;

export const Input = styled.input`

  background-color: rgba(0, 0, 0, 0.8);
  outline: none;
  border: none;
  width: 100%;
  height: 64px;
  line-height: 64px;
  font-size: 24px;
  margin-right: 24px;
  padding: 0 24px;
  color: ${(props) => props.theme.colors.white};

  ::placeholder{

    color: ${(props) => props.theme.colors.gray400};

  }
`;

export const Button = styled.button`

  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  width: 80px;
  height: 64px;
  border: 3px solid ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.white};
  transition: background 0.3s;

  &:hover{

  background: ${(props) => props.theme.colors.container};

  }

`;
