import React from "react";
import { ContentImg } from "./MovieImage.styles";
import LazyImage from "../LazyImage";

function MovieImage({ imageUrl, imageAlt }) {
   debugger
   return (
      <ContentImg>
         <LazyImage src={imageUrl} alt={imageAlt}>
            {/* <a href={imageUrl}>{ }</a> */}
            {/* <img src={imageUrl} alt='actor-thumb' loading="lazy" /> */}
         </LazyImage>
         
      </ContentImg>
   )
};

export default MovieImage