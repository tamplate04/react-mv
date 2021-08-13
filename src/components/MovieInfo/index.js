import React from "react";
import PropTypes from 'prop-types';
// Components
import Thumb from '../Thumb'
// import VideoModal from "../VideoModal";
import VideoSection from "../VideoSection"

import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config'
// Image
import NoImage from '../../images/no_image.jpg';
// Styles
import { Wrapper, Content, Text} from "./MovieInfo.styles";



function MovieInfo({ movie }) {

   const dateYear = new Date(movie.release_date);
   
   return(
      <Wrapper backdrop={movie.backdrop_path}>
         <Content>
            <Thumb
               image={
                  movie.poster_path
                     ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                     : NoImage
               }
               clickable={false}
               alt='movie-thumb'
            />
            <Text>
               <h1>{movie.title}</h1>
               <h3>Overview</h3>
               <p>{movie.overview}</p>

               <div className="movie-info">
                  <div className="movie-info-item">
                     <h3>RATING</h3>
                     <div className="score">{movie.vote_average}</div>
                  </div>
                  <div className="movie-info-item director">
                     <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
                     {movie.directors.map(director => (
                        <p key={director.credit_id}>{director.name}</p>
                     ))}
                  </div>
                  <div className="movie-info-item countries">
                     <h3>COUNTRIE{movie.production_countries.length > 1 ? 'S' : ''}</h3>
                     {movie.production_countries.map((countries, index) => (
                        <p key={index}>{countries.name}</p>
                     ))}
                  </div>
                  <div className="movie-info-item release-date">
                     <h3>RELEASE DATE</h3>
                     <p>{dateYear.getFullYear()}</p>
                  </div>
               </div>
               <div className="genres" >
                  <h3>Genre{movie.directors.length > 1 ? 'S' : ''}</h3>
                  <div className="genres-block" >
                     {movie.genres.map(genres => (
                        <p key={genres.id}>{genres.name}</p>
                     ))}
                  </div>
               </div>
               <VideoSection movie={movie}/>
            </Text>
            
         </Content>
      </Wrapper>
   )
}

MovieInfo.propTypes = {
   movie: PropTypes.object
}
export default MovieInfo
