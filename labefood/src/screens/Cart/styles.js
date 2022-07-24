import styled from 'styled-components';

export const Container = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
`;

export const ContainerTitle = styled.div`
    width: 100vw;
    margin-top: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Title = styled.h3`
  width: 91px;
  height: 19px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: black;
`

export const ContainerAdress = styled.div`
    width: 360px;
    height: 76px;
    margin: 1px 0 8px;
    padding: 16px;
    background-color: #eee;
    margin-top: 15px;
`
export const DeliveryAddress = styled.h3`
    display: flex;
    flex-direction: column;
    width: 328px;
    height: 18px;
    margin: 0 0 8px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;
`
export const Address = styled.h3`
    width: 328px;
    height: 18px;
    margin: 8px 0 0;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: black;
`

export const ContainerFoter = styled.div`
    width: 100vw;
    bottom: 0;
    position: fixed;
`