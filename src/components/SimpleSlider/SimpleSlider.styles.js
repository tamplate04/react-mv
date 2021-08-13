import styled from "styled-components";

export const Container = styled.div `
   max-width: 1280px;
   margin: 0 auto;
   padding: 100px 0;
   color: var(--white);

   .slickk-arrow {
      color: black;
   }
   .slick-prev {
      z-index: 100;
      left: 20px !important;
   }
   .slick-next {
      z-index: 100;
      right: 20px !important;
   }
   .slick-slide .film-content {
      margin: 10px;
   }
   /* .slick-list {
      margin: 0 -10px;
   } */
`;