import axios from 'axios';
import { ProductsGrid } from './ProductsGrid';
import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import './HomePage.css';
import { Footer } from '../components/footer';

export function HomePage({ cart, loadCart }){
    // Runs this code everytime a component is create or updated && Saving the product data inside useState
    const [products, setProducts] = useState([]);
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
                <div className="home-page"> <ProductsGrid products={products} loadCart={loadCart}/> </div>
                <div>
                <Footer />
                </div>
        </>
        );
    }