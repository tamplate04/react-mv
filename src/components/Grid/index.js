import React from 'react';
import PropTypes from 'prop-types';
// Styles
import { Wrapper, Content } from './Grid.style';


function Grid({ header, children }) {
   return (
      <Wrapper>
         <h1>{header}</h1>
         <Content className="zzzzzzzz">{children}</Content>
      </Wrapper>
   )
}

Grid.propTypes = {
   header: PropTypes.string,
}

export default Grid;