import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;

`;

export const RestaurantsList = styled.div`
   width:100%;
   height:463px;

   overflow-y:scroll;
   overflow-x:hidden;
     scrollbar-width: none;
     -ms-overflow-style: none; 
     &::-webkit-scrollbar{
          width:0;
          height:0;
     }
`;

export const Header = styled.div`
    width:100%;
    height:64px;
`;