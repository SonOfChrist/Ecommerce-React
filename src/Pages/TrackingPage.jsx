import { Header } from '../components/Header';
import { Link } from 'react-router';
import './tracking.css';
import { Footer } from '../components/footer';

export function TrackingPage({ cart }) {
    return (
        <>
        <title>Tracking</title>
            <Header cart={cart}/>

            <div className="tracking-page">
            <div className="order-tracking">
                <Link to="/orders" className="back-to-orders-link link-primary">
                View all orders
                </Link>

                <div className="delivery-date">
                Arriving on Monday, June 13
                </div>

                <div className="product-info">
                Black and Gray Athletic Cotton Socks - 6 Pairs
                </div>

                <div className="product-info">
                Quantity: 1
                </div>

                <img className="product-image" src="images/products/athletic-cotton-socks-6-pairs.jpg" />

                <div className="progress-labels-container">
                <div className="progress-label">
                    Preparing
                </div>
                <div className="progress-label current-status">
                    Shipped
                </div>
                <div className="progress-label">
                    Delivered
                </div>
                </div>

                <div className="progress-bar-container">
                <div className="progress-bar"></div>
                </div>
            </div>
            </div>
            <Footer />
        </>
    );
}