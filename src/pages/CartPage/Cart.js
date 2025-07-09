import React from 'react';
import { useCart } from '../../context/CartContext';
import { Container, SectionTitle, OrdersGrid, OrderCard } from './style';
import { FaTrash } from 'react-icons/fa';

const Cart = () => {
  const { cartItems, cartTotal, updateQuantity, removeFromCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <Container>
        <SectionTitle>Seu carrinho está vazio.</SectionTitle>
        <p>Volte ao cardápio para adicionar itens!</p>
      </Container>
    );
  }

  return (
    <Container>
      <SectionTitle>Meu Carrinho</SectionTitle>
      <OrdersGrid>
        {cartItems.map(item => (
          <OrderCard key={item.id}>
            <div className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>{item.name || item.title}</span>
              <FaTrash
                style={{ cursor: 'pointer', color: '#ffb3b3' }}
                onClick={() => removeFromCart(item.id)}
              />
            </div>
            <div className="body">
              <div className="item-line" style={{ justifyContent: 'space-between' }}>
                <img src={item.image} alt={item.name || item.title} style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                <div style={{ textAlign: 'right' }}>
                  <p><strong>Preço:</strong> R$ {item.price}</p>
                  <div className='quantity-control'>
                    <span>Qtd: </span>
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <strong>{item.quantity}</strong>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
              </div>
            </div>
          </OrderCard>
        ))}
      </OrdersGrid>

      <div className='cart-summary'>
        <h2>Total: R$ {cartTotal.toFixed(2).replace('.', ',')}</h2>
        <button className='checkout-button'>Finalizar Compra</button>
      </div>
    </Container>
  );
};

export default Cart;