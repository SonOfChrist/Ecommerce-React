import axios from 'axios';
import { OrderSummary } from './OrderSummary';
import { useState, useEffect } from 'react';
import './checkout-header.css';
import './CheckoutPage.css';
import { PaymentSummary } from './PaymentSummary';
import { CheckoutHeader } from './CheckoutHeader';


export function CheckoutPage({ cart, loadCart }){
    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setPaymentSummary] = useState(null);

    useEffect(() => {
        const fetchCheckoutData = async () => {
           let response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
           setDeliveryOptions(response.data);

            response = await axios.get('/api/payment-summary')
            setPaymentSummary(response.data);
        };

        fetchCheckoutData()
    }, [cart]);

    return (
        <>
        <title>Checkout</title>
            <CheckoutHeader />
            <div className="checkout-page">
            <div className="page-title">Review your order </div>

            <div className="checkout-grid">
                <OrderSummary cart={cart} deliveryOptions={deliveryOptions} loadCart={loadCart}/>
                <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
            </div>
            </div>
        </>
    );
}