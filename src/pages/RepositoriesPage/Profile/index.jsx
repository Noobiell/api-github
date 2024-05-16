import React from 'react'

import { BsPeopleFill, BsGeoAltFill, BsSuitcaseLgFill, BsLink45Deg } from "react-icons/bs";
import { Container, Header, Avatar, Login, Name, Inner, Data } from './style'

function Profile() {

  return (

    <Container>

      <Header>

        <Avatar src='https://avatars.githubusercontent.com/u/75146115?v=4' />

        <Login>Noobiell</Login>
        <Name>Gabriel Oliveira</Name>

      </Header>

      <Inner>

        <Data>
          <BsPeopleFill size={15} />
          30&nbsp;<i>seguidores</i>&nbsp; &middot; &nbsp;10 &nbsp;<i> seguindo</i>
        </Data>

        <Data>
          <BsSuitcaseLgFill size={15} />
          Noobiel Dev
        </Data>https://class.devsamurai.com.br/lectures/820

        <Data>
          <BsGeoAltFill size={15} />
          São Paulo - SP
        </Data>

        <Data>
          <BsLink45Deg size={15}/>
          <a href='https://noobieldev.com.br'>https://noobieldev.com.br</a>
        </Data>

      </Inner>

    </Container>

  )

}

export default Profile
