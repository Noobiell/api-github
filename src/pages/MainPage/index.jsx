import React, {useState} from "react";
import { BsSearch } from "react-icons/bs";

import { Container, Logo, Title, Form, Input, Button } from "./styles";
import githubLogo from '../../assets/images/github-logo.svg';


function MainPage() {

  const [login, setLogin] = useState('');


  return (
    <Container>

      <Logo src={githubLogo} alt="Logo Github" />
      <Title>API Github</Title>

      <Form>

        <Input placeholder="Usuário" value={login} onChange={(event)=> setLogin(event.target.value)} />

        <Button to={`/${login}/repositories`}>

          <BsSearch size={25} />

        </Button>

      </Form>

    </Container>
  );
}


export default MainPage
