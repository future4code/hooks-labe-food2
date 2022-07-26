import React, {useEffect, useState} from "react";
import axios from "axios"
import * as S from './styles'

const RestaurantDetails = () => {

    const [restaurantDetails,setRestaurantDetails] = useState ()
    const [restaurant,setRestaurant] = useState ([])
    
    useEffect (()=>{
        getDetailsFood();
    },[])

    const getDetailsFood = () => {
        const headers = {
            headers: {auth:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImpzRU9JNTliSk1xbG5qbzZ1RzlzIiwibmFtZSI6IlBlZHJvIiwiZW1haWwiOiJwZWRyb2Nlc2FyNUBnbWFpbC5jb20iLCJjcGYiOiIzODQuNzUyLjQ3NC03NCIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBHdWFqYWphcmFzLCAwMDAsIDAwIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTY1Nzg0MDM4M30.hFK_KPLa5m9RkmoW5rRKOXo3XHBbLQtT-dp3kyqyV04"}
        }

        axios
        .get ("https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants/1 ",headers)
        .then ((res)=> {
        setRestaurantDetails(res.data.restaurant.products)
        setRestaurant (res.data.restaurant)
        // console.log (res.data.restaurant)
    })
        .catch ((err)=>{console.log("Erro da requisição de detalhes")})


    }
 

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

     //VERIFICAR PORQUE O MAP DO RESTAURANTE NÃO ESTA CORRETO

    //  const renderInfoRestaurant = restaurant && restaurant.map ((restaurant)=> {
    //     if(!restaurant) {
    //     return <div key = {restaurant.id}>
    //             {/* <img src={restaurant.logoUrl} alt = "imagem" /> */}
    //             <p>{restaurant.name}</p>
            
    //     </div>
    //     }
    //  })
  
     console.log (restaurant)
        

    return (
    <S.Container>          
      
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







    //REDUCE 

    // const grupCategory = restaurantDetails && restaurantDetails.reduce (function(acumulador,
        //     food) {
        //     if (!acumulador[food.category]){
        //         acumulador[food.category] = [];
        //     }
        //     acumulador [food.category].push (food);
            
        //     return acumulador;
            
        // },{})

