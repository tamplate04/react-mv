import React from "react";
import SimpleSlider from "../../SimpleSlider";
import Thumb from "../../Thumb";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../../config";
import NoImage from "../../../images/no_image.jpg"


export default function SimilarMoviesTab({ similarMovies }) {
  return (
    <SimpleSlider header="Similar Movies">
      {similarMovies.results.map((movie) => (
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
  );
}