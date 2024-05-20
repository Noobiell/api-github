import React, { useState } from 'react';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import { Container, Sidebar, Main } from './styles';
import { getLangsFrom } from '../../services/api';

function RepositoriesPage() {

  const [currentLanguage, setCurrentLanguage] = useState();

  const user = {
    name: "Gabriel Oliveira",
    login: "Noobiell",
    avatar_url: "https://avatars.githubusercontent.com/u/75146115?v=4",
    followers: 4,
    following: 9,
    company: null,
    blog: "https://noobieldev.com.br/",
    location: "São Paulo",
  };

  const repositories = [

    {id: '1', name: 'Repo 1', description: 'Descrição 1', html_url: 'https://noobieldev.com.br/', language: 'Javascript'},
    {id: '2', name: 'Repo 2', description: 'Descrição 2', html_url: 'https://noobieldev.com.br/', language: 'PHP'},
    {id: '3', name: 'Repo 3', description: 'Descrição 3', html_url: 'https://noobieldev.com.br/', language: 'Javascript'},
    {id: '4', name: 'Repo 4', description: 'Descrição 4', html_url: 'https://noobieldev.com.br/', language: 'Ruby'},
    {id: '5', name: 'Repo 5', description: 'Descrição 5', html_url: 'https://noobieldev.com.br/', language: 'Ruby'},
    {id: '6', name: 'Repo 6', description: 'Descrição 6', html_url: 'https://noobieldev.com.br/', language: 'Python'}

  ];

  const languages = getLangsFrom(repositories);

  const onFilterClick = (language) =>{

    setCurrentLanguage(language);

  }

  return (

    <Container>

      <Sidebar>
        <Profile user={user} />
        <Filter
        languages={languages}
        currentLanguage={currentLanguage}
        onClickFunc={onFilterClick} />
      </Sidebar>

      <Main>
        <Repositories
        repositories={repositories}
        currentLanguage={currentLanguage}
        />
      </Main>

    </Container>


  )

}

export default RepositoriesPage
