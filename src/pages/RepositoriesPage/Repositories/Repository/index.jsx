import React from 'react';

import { Container, Name, Description, Footer, Lang, Link } from './style';

function Repository() {
  return (
    <Container color='#f37272'>

      <Name>Repository Name</Name>
      <Description>Repository Description</Description>
      <Footer color='#f37272'>

        <Lang>Ropository Lang</Lang>
        <Link href='https?//noobieldev.com.br' target='_blank'>VER</Link>

      </Footer>

    </Container>
  )
}

export default Repository
