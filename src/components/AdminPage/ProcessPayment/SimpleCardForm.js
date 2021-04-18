import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import React, { useContext } from 'react';
import { UserContext } from '../../../App';

const SimpleCardForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [userInfo, setUserInfo] = useContext(UserContext)

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      setUserInfo(paymentMethod.id);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" className="btn btn-primary mt-3" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};
export default SimpleCardForm;