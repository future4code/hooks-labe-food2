import React from "react";
import {Container} from './styles';
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from '../../assets/search.svg'


const Feed=()=>{
  return (
   <Container>
       <TextField
        placeholder="Restaurante"
        color="common"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img src={SearchIcon} alt="search icon"/>
            </InputAdornment>
          ),
        }}
  
      />
   </Container>
  );
}

export default Feed;