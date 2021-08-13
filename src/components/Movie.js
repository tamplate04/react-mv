import React from 'react';
import { useParams } from 'react-router';
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
// Components
import BreadCrumb from './BreadCrumb';
import Grid from './Grid';
import Spinner from './Spinner';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Actor from "./Actor";
import SimpleSlider from './SimpleSlider';
import SimpleLight from './SimpleLight';
import VideoFull from './VideoFull';
import Thumb from './Thumb';
import MovieImage from './MovieImage';
import SimpleTabs from './SimpleTabs';
// Hook
import { useMovieFetch } from '../hooks/useMovieFetch'
// Image
import NoImage from '../images/no_image.jpg'



export function MovieFull({ movie }) {
   debugger
   return (
      <>
         {
            // ete video chka veradardzni <></>
            movie.videoFull.data.length !== 0 ? <VideoFull iframeSrc={movie.videoFull.data[0].iframe_src} /> : <></>

         }
      </>
   )
}

export default function Movie() {
   const { movieId } = useParams();
   const { state: movie, loading, error } = useMovieFetch(movieId)
   console.log(movieId);
   console.log(movie, "Movie.js");
   if (loading) return <Spinner />
   if (error) return <div>Something went wrong...</div>
   console.log(movie, "movie-Movie.js");
   console.log(movie.actors.length );
   return (
     <>
       <BreadCrumb movieTitle={movie.original_title} />
       <MovieInfo movie={movie} />
       <MovieInfoBar
         time={movie.runtime}
         budget={movie.budget}
         revenue={movie.revenue}
       />
       <SimpleTabs movie={movie} />
       {/* {
              // ete 4 hoquch avel en beri slider-ov hakaraka depqum beri grid-ov
              movie.actors.length > 4
              ? <SimpleSlider header='Actors'>
              {movie.actors.map((actor) => (
                 <Actor
                 key={actor.credit_id}
                 name={actor.name}
                 character={actor.character}
                 imageUrl= { actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`: NoImage }
                 />
                 ))}
                 </SimpleSlider>
                 : <Grid header='Actors'>
                 {movie.actors.map((actor) => (
                    <Actor
                    key={actor.credit_id}
                    name={actor.name}
                    character={actor.character}
                           imageUrl= {
                              actor.profile_path
                              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                              : NoImage
                           }
                           />
                           ))}
                           </Grid>
                        }
      
                     <MovieFull movie={movie}/> */}
       {/* {
            // ete video chka veradardzni <></>
            movie.videoFull.data.length !== 0 ? <VideoFull iframeSrc={movie.videoFull.data[0].iframe_src} /> : <></>
            
         } */}
       {/* <SimpleSlider header='Similar Movies' >
            {movie.similarMovies.results.map(movie => (
               <Thumb 
                  key={movie.id}
                  clickable
                  image={
                     movie.poster_path
                     ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                     : NoImage
                  }
                  movieId={movie.id}
                  
                  
               />
               ))}
            </SimpleSlider> */}

       {/* <SimpleSlider header='Top Rated' >
            {movie.topRated.results.map(movie => (
               <Thumb 
               key={movie.id}
               clickable
               image={
                  movie.poster_path
                  ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                        : NoImage
                     }
                     movieId={movie.id}
                     />
                     ))}
                  </SimpleSlider> */}

      {
         // ete video chka veradardzni <></>
         movie.videoFull.data.length !== 0 ? <VideoFull iframeSrc={movie.videoFull.data[0].iframe_src} /> : <></>
      }
         
       <SimpleSlider header="Recommends">
         {movie.recommendations.results.map((movie) => (
           <Thumb
             key={movie.id}
             clickable
             image={
               movie.poster_path
                 ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                 : NoImage
             }
             movieId={movie.id}
           />
         ))}
       </SimpleSlider>
       <SimpleTabs movie={movie} />

         {/* Image */}
       {/* <SimpleLight>
         <Grid header="backdrops">
           {movie.image.backdrops.slice(0, 20).map((backdrops, index) => (
             <MovieImage
               key={index}
               imageUrl={
                 backdrops.file_path
                   ? `${IMAGE_BASE_URL}${POSTER_SIZE}${backdrops.file_path}`
                   : NoImage
               }
               imageAlt={movie.title}
             />
           ))}
         </Grid>
       </SimpleLight> */}
     </>
   );
}
