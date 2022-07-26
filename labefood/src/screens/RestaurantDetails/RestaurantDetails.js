import React, {useEffect, useState} from "react";
import axios from "axios"
import * as S from './styles'
import CardRestaurantDetails from "../../components/CardRestaurantDetails";

const RestaurantDetails = () => {

    const [restaurantDetails,setRestaurantDetails] = useState ()
    const [restaurant, setRestaurant] = useState ()

   
    
    
    useEffect (()=>{
        getDetailsFood();
    },[])

    const getDetailsFood = () => {
        const headers = {
            headers: {auth:localStorage.getItem("token")}
        }

        axios
        .get ("https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants/1 ",headers)
        .then ((res)=> {
        setRestaurantDetails(res.data.restaurant.products)
        setRestaurant (res.data.restaurant)
        console.log (res.data)
    })
        .catch ((err)=>{console.log("Erro da requisição de detalhes")})

    }
 
    console.log("Detalhes restaurante",restaurantDetails)
    console.log("Restaurante",restaurant)

     const renderPrincipais = restaurantDetails && restaurantDetails.map ((foods)=> {
        if (foods.category !== "Bebida" &&  foods.category !== "Acompanhamento" ) {
            return <S.CardProdutoMap key = {foods.id}>
                    <S.Image src={foods.photoUrl} alt = "imagem" />
                    <S.InfProduto>
                        <S.NameFoods>{foods.name} </S.NameFoods>
                        <S.DescriptionFoods>{foods.description} </S.DescriptionFoods>
                        <S.PriceFoods> R$ {foods.price.toFixed(2)} </S.PriceFoods>
                    </S.InfProduto>
                    <S.ButtonsFood>
                        <p></p>
                        <p></p>
                         <button> Adicionar </button>
                    </S.ButtonsFood>
            </S.CardProdutoMap>
        }
     })

    
     const renderDrinks = restaurantDetails && restaurantDetails.map ((foods)=> {
        if (foods.category === "Bebida") {
            return <S.CardProdutoMap key = {foods.id}>
                    <S.Image src={foods.photoUrl} alt = "imagem" />
                    <S.InfProduto>
                    <S.NameFoods>{foods.name} </S.NameFoods>
                        <S.DescriptionFoods>{foods.description} </S.DescriptionFoods>
                        <S.PriceFoods> R$ {foods.price.toFixed(2)} </S.PriceFoods>
                    </S.InfProduto>
                    <S.ButtonsFood>
                    <p></p>
                    <p></p>
                    <button> Adicionar </button>
                    </S.ButtonsFood>
            </S.CardProdutoMap>
        }
     })
    
     const renderAcompanhamentos = restaurantDetails && restaurantDetails.map ((foods)=> {
        if (foods.category === "Acompanhamento") {
            return <S.CardProdutoMap key = {foods.id}>
                    <S.Image src={foods.photoUrl} alt = "imagem" />
                    <S.InfProduto>
                    <S.NameFoods>{foods.name} </S.NameFoods>
                        <S.DescriptionFoods>{foods.description} </S.DescriptionFoods>
                        <S.PriceFoods> R$ {foods.price.toFixed(2)} </S.PriceFoods>
                    </S.InfProduto>
                    <S.ButtonsFood>
                        <p></p>
                        <p></p>
                         <button> Adicionar </button>
                    </S.ButtonsFood>
            </S.CardProdutoMap>
        }
     })

   const Verificar = () => {
     if (restaurant && restaurant) {
        return <CardRestaurantDetails
        name={restaurant.name} 
        category={restaurant.category}
        deliveryTime={restaurant.deliveryTime}
        address={restaurant.address}
        shipping={restaurant.shipping}
        /> 
     }
   }
  
           

    return (
    <S.Container>      

        {Verificar()}
      
        <S.CardProdutos>
            <h3> Principais</h3>
            <S.Line>
                <h4>{renderPrincipais}</h4>
            </S.Line>

            
            <h3>Bebidas</h3>
            <S.Line>
                <h4>{renderDrinks}</h4>
            </S.Line>
            
           
            <h3>Acompanhamentos</h3>
            <S.Line>
                <h4>{renderAcompanhamentos}</h4>
            </S.Line>
        </S.CardProdutos>

</S.Container>
        
    );
  }


  
  export default RestaurantDetails;


  



 