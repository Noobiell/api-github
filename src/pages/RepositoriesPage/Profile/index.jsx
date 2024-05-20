import React from 'react';
import PropTypes from 'prop-types';

import { BsPeopleFill, BsGeoAltFill, BsSuitcaseLgFill, BsLink45Deg } from "react-icons/bs";
import { Container, Header, Avatar, Login, Name, Inner, Data } from './style'

function Profile({user}) {

  return (

    <Container>

      <Header>

        <Avatar src={user.avatar_url} />

        <Login>{user.login}</Login>
        <Name>{user.name}</Name>

      </Header>

      <Inner>

        <Data>
          <BsPeopleFill size={15} />
          {user.following}&nbsp;<i>seguidores</i>&nbsp; &middot; &nbsp;{user.followers} &nbsp;<i> seguindo</i>
        </Data>

        {user.company && (

          <Data>
            <BsSuitcaseLgFill size={15} />
            {user.company}
          </Data>

        )}

        {
          user.location &&(

            <Data>
              <BsGeoAltFill size={15} />
              {user.location}
            </Data>

          )
        }

        {user.blog && (

          <Data>
            <BsLink45Deg size={15}/>
            <a href={`\\${user.blog}`}>{user.blog}</a>
          </Data>

        )}

      </Inner>

    </Container>

  )

}

Profile.propTypes = {

  user: PropTypes.shape({

    name: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    company: PropTypes.string,
    blog: PropTypes.string,
    location: PropTypes.string,

  }).isRequired,

}

export default Profile
