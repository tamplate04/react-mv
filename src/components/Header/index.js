import React from 'react';
import { Link } from 'react-router-dom';
import RMDBLogo from '../../images/movie-videos.svg';
import TMBLogo from '../../images/tmdb_logo.svg'

import { Wrapper, Content, LogoImg, TMBLogoImg } from './Header.styles';

 
function Header() {
   return (
      <header>
         <Wrapper>
            <Content>
               <Link to='/'>
                  <LogoImg src={RMDBLogo} alt="rmbd-logo" />
               </Link>
               <TMBLogoImg src={TMBLogo} alt="tmdb-logo" />
            </Content>
         </Wrapper>
      </header>
   )
}
export default Header;