import axios from 'axios'
import { ProductsGrid } from './ProductsGrid';
import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import './HomePage.css';

export function HomePage({ cart, loadCart }){
    // Runs this code everytime a component is create or updated && Saving the product data inside useState
    const [products, setProducts] = useState([]);
    const currentYear = new Date().getFullYear();
    useEffect(() => {
        const getHomeData = async () => {
            const response = await axios.get('/api/products');
                setProducts(response.data) 
            };
            
            getHomeData()
        }, []);
    
    return (
        <>
            <title>Ecommerce Project</title>
                <Header cart = {cart}/>
                <div className="home-page">
                    <ProductsGrid products={products} loadCart={loadCart}/>
                </div>
                <div>
                <footer className="bg-blue-600 text-white text-center p-4 ">
                © {currentYear} All rights reserved.
                </footer>
                </div>

        </>
        );
    }