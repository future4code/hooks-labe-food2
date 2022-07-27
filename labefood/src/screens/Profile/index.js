import React, { useEffect, useState } from "react";
import { Container } from './styles'
import axios from "axios";
import { URL_BASE } from "../../constants/URL_BASE";
import Footer from "../../components/Footer/index"



const Profile = () => { 
  const [detailsprofile , setDetailsProfile ] = useState([])
  const [history , setHistory] = useState([])

  const getProfile = () => {
    const headers = {
      headers: {
        auth: localStorage.getItem("token")
      }
    }
    axios
    .get(`${URL_BASE}/profile` , headers)
    .then((resp)=>{setDetailsProfile(resp.data.user)})
    .catch((error)=>console.log(error))
  }

  const getHistory = () => {
    const headers = {
      headers: {
        auth: localStorage.getItem("token")
      }
    }
    axios
    .get(`${URL_BASE}/orders/history` , headers)
    .then((resp)=>{setHistory(resp.data.orders)})
    .catch((error)=>console.log(error))
  }



  useEffect(() => {
    getProfile()
  }, [])

  useEffect(() => {
    getHistory()
  }, [])


  const historyList = history && history.map((list) => {
    return (
      <div key={list.createdAt}>
        <p>{list.restaurantName}</p>
        <p>{list.totalPrice}</p>
      </div>
    )
  })

console.log(historyList)
  return (
    <div>
    <Container>
      <p>{detailsprofile.name}</p>
      <p>{detailsprofile.email}</p>
      <p>{detailsprofile.cpf}</p>
      <p>{detailsprofile.address}</p>
      {historyList.length === 0 ? <p>sem pedidos</p> : historyList}
    </Container>
    <Footer />
    </div>
  );
}

export default Profile;