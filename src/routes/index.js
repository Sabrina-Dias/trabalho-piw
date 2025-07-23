import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';

import { useCart } from '../context/CartContext';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Menu from '../pages/Menu/Menu';
import Cart from '../pages/CartPage/Cart';
import Footer from '../components/Footer/Footer';
import Checkout from '../pages/Checkout/Checkout';
import Comments from '../pages/Comments/Comments';

const AppHeader = styled.header`
    padding: 1rem 4rem;
    background-color: #1E2A47;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1.5rem;
    position: sticky;
    top: 0;
    z-index: 1000;

    a {
        color: white;
        text-decoration: none;
        font-weight: bold;
    }
`;

const CartLink = styled(Link)`
  position: relative;

  .item-count {
    position: absolute;
    top: -8px;
    right: -12px;
    background: red;
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    font-size: 0.8rem;
    display: grid;
    place-items: center;
  }
`;

const AppLayout = ({ children }) => {
    const { itemCount } = useCart();

    return (
        <div>
            <AppHeader>
                <Link to="/cardapio">Cardápio</Link>
                <CartLink to="/carrinho">
                    <FaShoppingCart size={24} />
                    {itemCount > 0 && <span className="item-count">{itemCount}</span>}
                </CartLink>
                <Link to="/login">Sair</Link>
            </AppHeader>
            <main>{children}</main>
            <Footer />
        </div>
    );
};


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/cardapio" element={<AppLayout><Menu /></AppLayout>} />
                <Route path="/carrinho" element={<AppLayout><Cart /></AppLayout>} />
                <Route path="/comments" element={<AppLayout><Comments /></AppLayout>} />
                <Route path="/finalizar-compra" element={<Checkout />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;