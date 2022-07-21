import React, {useEffect, useState} from "react";
import axios from "axios"

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
            return <div key = {foods.id}>
                    <img src={foods.photoUrl} alt = "imagem" />
                    <p>Nome: {foods.name} </p>
                    <p>Descrição: {foods.description} </p>
                    <p>Preço: {foods.price.toFixed(2)} </p>
                    <button> Adicionar </button>
            </div>
        }
     })

    
     const renderDrinks = restaurantDetails && restaurantDetails.map ((foods)=> {
        if (foods.category === "Bebida") {
            return <div key = {foods.id}>
                    <img src={foods.photoUrl} alt = "imagem" />
                    <p>Nome: {foods.name} </p>
                    <p>Descrição: {foods.description} </p>
                    <p>Preço: {foods.price.toFixed(2)} </p>
                    <button> Adicionar </button>
            </div>
        }
     })
    
     const renderAcompanhamentos = restaurantDetails && restaurantDetails.map ((foods)=> {
        if (foods.category === "Acompanhamento") {
            return <div key = {foods.id}>
                    <img src={foods.photoUrl} alt = "imagem" />
                    <p>Nome: {foods.name} </p>
                    <p>Descrição: {foods.description} </p>
                    <p>Preço: {foods.price.toFixed(2)} </p>
                    <button> Adicionar </button>
            </div>
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
        <>  <div>
                {/* <h4>{renderInfoRestaurant}</h4> */}
            </div>
            <div>
                <h3>Principais</h3>
                <h4>{renderPrincipais}</h4>
            </div>
            <div>
                <h3>Bebidas</h3>
                <h4>{renderDrinks}</h4>
            </div>
            <div>
                <h3>Acompanhamentos</h3>
                <h4>{renderAcompanhamentos}</h4>
            </div>
        </>
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
