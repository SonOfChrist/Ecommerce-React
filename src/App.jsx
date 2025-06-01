import { Routes, Route } from 'react-router';
import { HomePage } from '../Pages/HomePage';
import { CheckoutPage } from '../Pages/CheckoutPage';
import './App.css'
import { OrdersPage } from '../Pages/OrdersPage';

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='checkout' element={<CheckoutPage/>} />
      <Route path='orders' element={<OrdersPage/>} />
    </Routes>
    
  )
}

export default App
