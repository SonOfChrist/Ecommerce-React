import axios from 'axios'
import { ProductsGrid } from './ProductsGrid';
import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import './HomePage.css';

export function HomePage({ cart }){
    // Runs this code everytime a component is create or updated && Saving the product data inside useState
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/api/products')
            .then((response) => {
                setProducts(response.data)
            });
            
        }, []);
    
    return (
        <>
            <title>Ecommerce Project</title>
                <Header cart = {cart}/>
                <div className="home-page">
                    <ProductsGrid products={products}/>
                </div>
        </>
        );
    }