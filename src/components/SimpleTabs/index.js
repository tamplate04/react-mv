import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// Componets
// import { MovieFull } from '../Movie'
// import MovieFullTab from './MovieFullTab';
import ActorTab from "./ActorTab"
import SimilarMoviesTab from './SimilarMoviesTab';
import ImagesTab from './ImagesTab';

// Style
import "./style.css"
import {Wrapper} from "./SimpleTabs.styled"


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={4}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tabb-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  indicator: {
    backgroundColor: "#2aa1c2",

  },
  flexContainer: {
     background: "#020916",
     color: "#fff",
  },
}));

export default function SimpleTabs({movie}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };

  return (
    <div>
      <Wrapper>
        <Tabs
          value={value}
          onChange={handleChange}
          classes={{
            flexContainer: classes.flexContainer,
            indicator: classes.indicator,
          }}
        >
          <Tab
            label="Actors"
            disableRipple
            {...a11yProps(0)}
            onSubmit={(e) => e.preventDefault()}
          />
          <Tab
            label="Similar Movies"
            disableRipple
            {...a11yProps(1)}
            onSubmit={(e) => e.preventDefault()}
          />
          <Tab
            label="Images"
            disableRipple
            {...a11yProps(2)}
            onSubmit={(e) => e.preventDefault()}
          />
        </Tabs>

        <TabPanel value={value} index={0}>
          <ActorTab movie={movie}></ActorTab>
        </TabPanel>
        {/* <TabPanel value={value} index={1}>
          <MovieFullTab videoFull={movie.videoFull} />
        </TabPanel> */}
        <TabPanel value={value} index={1}>
          <SimilarMoviesTab similarMovies={movie.similarMovies} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ImagesTab movie={movie} />
        </TabPanel>
      </Wrapper>
    </div>
  );
}
//  {
//             // ete 4 hoquch avel en beri slider-ov hakaraka depqum beri grid-ov
//             movie.actors.length > 4
//             ? <SimpleSlider header='Actors'>
//                      {movie.actors.map((actor) => (
//                         <Actor
//                            key={actor.credit_id}
//                            name={actor.name}
//                            character={actor.character}
//                            imageUrl= { actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`: NoImage }
//                         />
//                      ))}
//                </SimpleSlider>
//             : <Grid header='Actors'>
//                      {movie.actors.map((actor) => (
//                         <Actor
//                            key={actor.credit_id}
//                            name={actor.name}
//                            character={actor.character}
//                            imageUrl= {
//                               actor.profile_path
//                                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
//                                  : NoImage
//                               }
//                         />
//                      ))}
//                </Grid>
//          }
      
//          <MovieFull movie={movie}/>
//          {/* {
//             // ete video chka veradardzni <></>
//             movie.videoFull.data.length !== 0 ? <VideoFull iframeSrc={movie.videoFull.data[0].iframe_src} /> : <></>

//          } */}
//          <SimpleSlider header='Similar Movies' >
//             {movie.similarMovies.results.map(movie => (
//                <Thumb 
//                   key={movie.id}
//                   clickable
//                   image={
//                      movie.poster_path
//                         ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
//                         : NoImage
//                   }
//                   movieId={movie.id}
   
                  
//                />
//             ))}
//          </SimpleSlider>
//          <SimpleSlider header='Top Rated' >
//             {movie.topRated.results.map(movie => (
//                   <Thumb 
//                   key={movie.id}
//                   clickable
//                   image={
//                      movie.poster_path
//                         ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
//                         : NoImage
//                   }
//                   movieId={movie.id}
//                />
//             ))}
//          </SimpleSlider>
//          <SimpleSlider header='Recommends' >
//             {movie.recommendations.results.map(movie => (
//                   <Thumb 
//                      key={movie.id}
//                      clickable
//                      image={
//                         movie.poster_path
//                            ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
//                            : NoImage
//                      }
//                      movieId={movie.id}
      
                     
//                   />
//             ))}
//          </SimpleSlider>

//          {/* Image */}
//          <SimpleLight>
//             <Grid header='backdrops'>
//                {
//                   movie.image.backdrops.slice(0, 20).map((backdrops, index) => (
//                      <MovieImage
//                         key={index}
//                         imageUrl={
//                            backdrops.file_path
//                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${backdrops.file_path}`
//                            : NoImage
//                         }
//                         imageAlt={
//                            "mmm"
//                         }
//                      />
//                   ))
//                }
//                </Grid>
//          </SimpleLight>