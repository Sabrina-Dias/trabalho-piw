import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import {
    CheckoutPageWrapper, CheckoutHeader, CheckoutContainer, LeftColumn, RightColumn,
    Section, ToggleButtonGroup, ToggleButton, InfoBox, BigButton, OrderSummary
} from './style';

const Checkout = () => {
    const { cartItems, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [deliveryMethod, setDeliveryMethod] = useState('retirada');
    const [paymentMethod, setPaymentMethod] = useState('site');

    const deliveryFee = deliveryMethod === 'entrega' ? 3.00 : 0;
    const finalTotal = cartTotal + deliveryFee;

    const handleFinalizeOrder = () => {
        console.log("Pedido finalizado:", { cartItems, finalTotal });

        clearCart();

        alert('Pedido finalizado com sucesso!');
        navigate('/cardapio');
    };

    return (
        <CheckoutPageWrapper>
            <CheckoutHeader>
                <h2>Finalizar Compra</h2>
                <div className="header-nav">
                    {/* <button className="active">Finalizar pedido</button>
                    <button onClick={() => navigate('/cardapio')}>Cardápios</button> */}
                </div>
            </CheckoutHeader>
            <CheckoutContainer>
                <LeftColumn>
                    <Section>
                        <h2>Finalize seu pedido</h2>
                        <ToggleButtonGroup>
                            <ToggleButton isActive={deliveryMethod === 'entrega'} onClick={() => setDeliveryMethod('entrega')}>Entrega</ToggleButton>
                            <ToggleButton isActive={deliveryMethod === 'retirada'} onClick={() => setDeliveryMethod('retirada')}>Retirada</ToggleButton>
                        </ToggleButtonGroup>
                        <InfoBox>
                            <div>
                                <h4>Rua Ficticio Paulino, 0000</h4>
                                <small>Apartamento | Quixadá-CE</small>
                            </div>
                            <button>Trocar</button>
                        </InfoBox>
                    </Section>
                    <Section>
                        <ToggleButtonGroup>
                            <ToggleButton isActive={paymentMethod === 'site'} onClick={() => setPaymentMethod('site')}>Pague pelo o site</ToggleButton>
                            <ToggleButton isActive={paymentMethod === 'entrega'} onClick={() => setPaymentMethod('entrega')}>Pague na entrega</ToggleButton>
                        </ToggleButtonGroup>
                        <InfoBox>
                            <div>
                                <h4>Pague com Pix</h4>
                                <small>Use o QR Code ou copie e cole o código</small>
                            </div>
                            <button>Trocar</button>
                        </InfoBox>
                    </Section>
                    <Section>
                        <h2>Adicione um novo cartão</h2>
                        <p>É pedido, seguro e você não perde nenhum minuto a mais quando o seu pedido chegar</p>
                        <BigButton style={{ backgroundColor: '#555' }}>Adicionar cartão</BigButton>
                    </Section>
                    <input type="text" placeholder="CPF/CNPJ na nota" style={{ padding: '1.2rem', borderRadius: '8px', border: '1px solid #ddd' }} />
                    <BigButton onClick={handleFinalizeOrder}>Finalizar Pedido</BigButton>
                </LeftColumn>
                <RightColumn>
                    <OrderSummary>
                        <h3>Lista de pedidos</h3>
                        <ul>
                            {cartItems.map(item => (
                                <li key={item.id}>
                                    <span>{item.quantity}x {item.name || item.title}</span>
                                    <span>R$ {(parseFloat(item.price.replace(',', '.')) * item.quantity).toFixed(2).replace('.', ',')}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="price-details">
                            <div>
                                <span>Subtotal:</span>
                                <span>R$ {cartTotal.toFixed(2).replace('.', ',')}</span>
                            </div>
                            <div>
                                <span>Taxa de entrega:</span>
                                <span>R$ {deliveryFee.toFixed(2).replace('.', ',')}</span>
                            </div>
                            <div className="total">
                                <span>Total:</span>
                                <span>R$ {finalTotal.toFixed(2).replace('.', ',')}</span>
                            </div>
                        </div>
                    </OrderSummary>
                </RightColumn>
            </CheckoutContainer>
        </CheckoutPageWrapper>
    );
};

export default Checkout;