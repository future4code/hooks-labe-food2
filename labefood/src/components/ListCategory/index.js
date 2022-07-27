import React,{useState,useEffect} from "react";
import {Container} from './styles';
import { URL_BASE } from "../../constants/URL_BASE";
import axios from 'axios';

const ListCategory=()=>{
    const url = `${URL_BASE}/restaurants`;
    const headers = {
        headers:{
            auth:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlM1dXFVSGN3ZjJ6d3NhNUFubVJjIiwibmFtZSI6ImdhYnJpZWwiLCJlbWFpbCI6ImdhYnJpZWxAbGFiZW51LmNvbS5iciIsImNwZiI6IjAzMy4zMzkuNjgwLTQ1IiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEVkdSBDaGF2ZXMsIDE3OSwgMTc5IC0gSW50ZXJzdWwiLCJpYXQiOjE2NTg2Nzg4MTV9.-Kr6uJLmLp_PpRW0VPan4nIuxeI93HvPu3qHdqw3zkI"
        }
    }
    useEffect(()=>{getCategories()},[])
        const [data,setData] = useState(undefined);
        const [isLoading,setIsLoading] = useState(false);

    const getCategories = async()=>{
        setIsLoading(true)
        try{
            const res = await axios.get(url, headers)
            setIsLoading(false)
            setData(res.data.restaurants)
        }catch(err){
            setIsLoading(false)
            console.log(err)
        }
    }
   
    const listCategories =  data?.map((restaurant)=>{
        return <h1>{restaurant.category}</h1>
    })
   
  return (
   <Container>
    {listCategories}
   </Container>
  );
}

export default ListCategory;