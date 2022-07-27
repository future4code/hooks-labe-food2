import React from "react"

const CardRetaurantDetails=(props) =>{

    const {name, category,deliveryTime,address,shipping} = props


return (

    <>
    <p>{name}</p>
    <p>{category}</p>
    <p>{deliveryTime}</p>
    <p>{address}</p>
    <p>{shipping}</p>    
    </>
   
)

}

export default CardRetaurantDetails;