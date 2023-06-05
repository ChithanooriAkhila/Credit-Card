import {useState} from 'react'

import {
  MainContainer,
  LeftContainer,
  LeftContainerHeading,
  CardContainer,
  PaymentHeading,
  CardNumberHeading,
  Paragraph,
  CardHolderParagraph,
  RightContainer,
  PaymentContainer,
  InputField,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolderName, setCardHolderName] = useState('')

  const changeCardNumber = e => {
    setCardNumber(e.target.value)
  }

  const changeCardHolderName = e => {
    setCardHolderName(e.target.value)
  }

  return (
    <MainContainer>
      <LeftContainer>
        <LeftContainerHeading>Credit Card</LeftContainerHeading>
        <CardContainer data-testid="creditCard">
          <CardNumberHeading>{cardNumber}</CardNumberHeading>
          <Paragraph>CARDHOLDER NAME</Paragraph>
          <CardHolderParagraph>
            {cardHolderName.toUpperCase()}
          </CardHolderParagraph>
        </CardContainer>
      </LeftContainer>
      <RightContainer>
        <PaymentContainer>
          <PaymentHeading>Payment Method</PaymentHeading>
          <InputField
            placeholder="Card Number"
            value={cardNumber}
            onChange={changeCardNumber}
          />
          <InputField
            placeholder="Cardholder Name"
            value={cardHolderName}
            onChange={changeCardHolderName}
          />
        </PaymentContainer>
      </RightContainer>
    </MainContainer>
  )
}

export default CreditCard
