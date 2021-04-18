import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51IhXSVJwuM3eD5klatM8pNpYh6Q7iUeMxHy2MMxzzr9XT9f0oTFTi3sgKjhhDtnWfS4pWiRNezXfIPEh7RPo9cpa008MP2rEv1');


const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;