import React from "react";
import {Container,Infos, Delivery,InsideCard} from './styles';
import img from './image.png'

const CardRestaurant=()=>{
  return (
   <Container>
        <InsideCard>
            <img src={img} alt="Restaurant profile"/>
            <Infos>
                <h2>Vinil Butantã</h2>
                <Delivery>
                    <span>50 - 60 min</span>
                    <span>Frete R$6,00</span>
                </Delivery>
            </Infos>
        </InsideCard>
   </Container>
  );
}

export default CardRestaurant;