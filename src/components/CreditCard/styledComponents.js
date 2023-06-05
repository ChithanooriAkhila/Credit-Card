import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  min-height: 100vh;
`
export const LeftContainer = styled.div`
  width: 50%;
  background-color: #3b4b69;
  color: white;
  padding: 20px;
`

export const LeftContainerHeading = styled.h1`
  text-decoration: 2px solid #ffd773 underline;
  text-align: center;
`

export const CardContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  border-radius: 20px;
  padding: 20px;
  margin-top: 30vh;
`

export const CardNumberHeading = styled.p`
  margin-top: 70px;
  font-size: 40px;
  font-weight: bold;
`

export const Paragraph = styled.p`
  color: #d3d9e0;
  margin-top: 50px;
`

export const CardHolderParagraph = styled.p``

export const RightContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PaymentContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: white;
  box-shadow: 1px 1px 1px 1px #d3d9e0;
  border-radius: 10px;
`

export const PaymentHeading = styled.h1``

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
`
