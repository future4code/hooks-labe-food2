import React, { useState } from 'react'

const GlobalState = () => {
  const [hasAdress, setHasAdress] = useState("");
  const [idRestaurant, setIdRestaurant] = useState("")
  const [idProduct, setIdProduct ] = useState("")
  const [restaurantDetails, setRestaurantDetails] = useState()

 
  return (
    <div>GlobalState</div>
  )
}

export default GlobalState