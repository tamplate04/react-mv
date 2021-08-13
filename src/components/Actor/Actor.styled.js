import styled from "styled-components";
// Componets



export const Wrapper = styled.div`
   color: var(--white);
   background: var(--darkGrey);
   text-align: center;
   max-width: 300px;
   min-height: 370px;
   border-radius: 0px 0px 6px 6px;
   margin: 10px;

   h3 {
      margin: 25px 0 0 0;
   }
   p {
      margin: 5px 0;
      padding: 6px;
   }
   @media screen and (max-width: 480px) {
      margin: 0 auto;
   }
`;

export const Image = styled.div`
   
   img {
      display: block;
      width: 100%;
      height: 270px;
      transition: all 0.3s;
      object-fit: cover;
      border-radius: 6px 6px 0px 0px;
      animation: animateOpacityImage 1s;
   }
    
`;