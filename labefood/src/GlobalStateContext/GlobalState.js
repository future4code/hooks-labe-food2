import React, { useState } from 'react'
import axios from "axios";
import URL_BASE from '../constants/URL_BASE'


const GlobalState = () => {
  const [hasAdress, setHasAdress] = useState("");
  const [idRestaurant, setIdRestaurant] = useState("")
  const [idProduct, setIdProduct ] = useState("")
  cosnt [restaurantDetails, setRestaurantDetails] = useState()

  
  
 
  return (
    <div>GlobalState</div>
  )
}

export default GlobalState