import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {URL_BASE} from '../../constants/URL_BASE'
import {Container,RestaurantsList,Header} from './styles';
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from '../../assets/search.svg'
import Footer from "../../components/Footer";
import useRequestDataWithHeaders from "../../hooks/useRequestDataWithHeaders";
import CardRestaurant from "../../components/CardRestaurant";
import { goToRestaurantDetails } from "../../routes/Coordinator";



const Feed = () => {
const navigate = useNavigate()
const url = `${URL_BASE}/restaurants`;
const token = localStorage.getItem('token')
const headers = {
  headers:{
    auth: token
  }
}
const [inputValue,setInputValue] = useState("")
const [data,isLoading,error] = useRequestDataWithHeaders(url,headers)
useEffect(()=>getCategoryList(),[data]) 
const categories = []

const chooseRestaurant = (id) =>{
  goToRestaurantDetails(navigate,id)
}

const handleInput = (e)=>{
  setInputValue(e.target.value)
  getCategoryList()
}

const getCategoryList = ()=>{data?.restaurants.map((restaurant)=>{
  const checkCategory = categories.find((produto)=> produto === restaurant.category)
  if(!checkCategory){
    categories.push(restaurant.category)}
})}

const renderRestaurantsCards = data?.restaurants
.filter((restaurant)=>restaurant.name.toUpperCase().includes(inputValue.toUpperCase()))
.map((restaurant)=>{
  return <CardRestaurant
  key={restaurant.id} 
  photo={restaurant.logoUrl}
  name={restaurant.name}
  deliveryTime={restaurant.deliveryTime}
  shipping={restaurant.shipping}
  onClickCard={()=>chooseRestaurant(restaurant.id)}
  />
})

  return (
   <Container>
    <Header/>
        <TextField
          placeholder="Restaurante"
          color="common"
          value={inputValue}
          onChange={(e)=>handleInput(e)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={SearchIcon} alt="search icon"/>
              </InputAdornment>
            ),
          }}
    
        />
      <RestaurantsList>
        {renderRestaurantsCards}
      </RestaurantsList>
      <Footer />
   </Container>
  );
}

export default Feed;