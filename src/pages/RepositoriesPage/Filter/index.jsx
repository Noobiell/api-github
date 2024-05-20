import React from 'react';

import PropTypes from 'prop-types';

import { Container, Selector, Cleaner } from './style';

function Filter({languages, currentLanguage, onClickFunc}) {

  const selectors = languages.map(({name, count, color})=> (

    <Selector
    key={name.toLowerCase()}
    color={color}
    className={currentLanguage === name ? 'selected' : ''}
    onClick={()=> onClickFunc && onClickFunc(name)}
    >

      <span>{name}</span>
      <span>{count}</span>

    </Selector>


  ));

  return (

    <Container>

      {selectors}

      <Cleaner onClick={()=> onClickFunc && onClickFunc(undefined)}>Limpar</Cleaner>

    </Container>

  )
}

Filter.defaultProps = {

  currentLanguage: null,
  onClickFunc: null

}

Filter.propTypes = {

  languages: PropTypes.arrayOf(

    PropTypes.shape({

      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      color: PropTypes.string,

    }).isRequired

  ).isRequired,
  currentLanguage: PropTypes.string,
  onClickFunc: PropTypes.func

}

export default Filter
