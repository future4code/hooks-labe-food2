import React from "react"
import * as S from './styles'

const CardRetaurantDetails=(props) =>{

    const {name, category,deliveryTime,address,shipping, logoUrl} = props

return (

    <>
    <div>
        
       
        {/* <img src= {logoUrl} />  */}
        
        <p>{name}</p>
        <p>{category}</p>
        <p>{deliveryTime}</p>
        <p>{address}</p>
        <p>{shipping}</p>
    </div>
    </>
   
)

}

export default CardRetaurantDetails;