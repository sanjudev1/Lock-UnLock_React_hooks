// Style your elements here

import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: 'Roboto';
  background-image: linear-gradient(to bottom, #161617, #0b0c1e, #3c2940);
`
export const Image = styled.div`
  height: 40%;
  align-self: center;
`
export const Button = styled.button`
  width: 98px;
  height: 45px;
  border-radius: 10px;
  background-color: #06b6d4;
  color: white;
  cursor: pointer;
`
export const Paragraph = styled.p`
  font-family: 'Roboto';
`
