import React, { useState, useEffect } from 'react';
import { Container, Header, CategoryTabs, ProductGrid, ProductCard, SearchBar, CartInfo } from './style.js';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import { useCart } from '../../context/CartContext.js';

import { realtimedb } from '../../firebase.js';
import { ref, onValue } from 'firebase/database';

import HeroBanner from '../../components/HeroBanner/HeroBanner.js';
import InfoSection from '../../components/InfoSection/InfoSection.js';
import FoodShowcase from '../../components/FoodShowcase/FoodShowcase.js';
import BookShowcase from '../../components/BookShowcase/BookShowcase.js';

const Menu = () => {
    const { addToCart, cartTotal } = useCart();

    const [productsData, setProductsData] = useState({});
    const [booksData, setBooksData] = useState({});
    const [loading, setLoading] = useState(true);

    const [activeFoodCategory, setActiveFoodCategory] = useState('cerveja');
    const [activeBookCategory, setActiveBookCategory] = useState('romance');

    useEffect(() => {
        const productsRef = ref(realtimedb, 'products');
        const booksRef = ref(realtimedb, 'books');

        const unsubscribeProducts = onValue(productsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setProductsData(data);
            }
        });

        const unsubscribeBooks = onValue(booksRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setBooksData(data);
            }
        });

        setTimeout(() => setLoading(false), 1000);


        return () => {
            unsubscribeProducts();
            unsubscribeBooks();
        };
    }, []);

    const currentProducts = productsData[activeFoodCategory] || [];
    const currentBooks = booksData[activeBookCategory] || [];

    if (loading) {
        return <Container><h1>Carregando cardápio...</h1></Container>;
    }

    return (
        <>
            <HeroBanner />
            <InfoSection />
            <FoodShowcase />
            <Container>
                <Header>
                    <h1>Cardápio</h1>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                        <SearchBar>
                            <input type="text" placeholder="Digite aqui seu item..." />
                            <FaSearch color="#888" />
                        </SearchBar>
                        <CartInfo>
                            <span>Carrinho:</span>
                            <strong>R$ {cartTotal.toFixed(2).replace('.', ',')}</strong>
                        </CartInfo>
                    </div>
                </Header>
                <CategoryTabs>
                    <button onClick={() => setActiveFoodCategory('cerveja')} className={activeFoodCategory === 'cerveja' ? 'active' : ''}>Cerveja</button>
                    <button onClick={() => setActiveFoodCategory('pastel')} className={activeFoodCategory === 'pastel' ? 'active' : ''}>Pastel</button>
                    <button onClick={() => setActiveFoodCategory('hamburguer')} className={activeFoodCategory === 'hamburguer' ? 'active' : ''}>Hambúrguer</button>
                    <button onClick={() => setActiveFoodCategory('pizza')} className={activeFoodCategory === 'pizza' ? 'active' : ''}>Pizza</button>
                </CategoryTabs>
                <ProductGrid>
                    {currentProducts.map(product => (
                        <ProductCard key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <div>
                                <h3>{product.name}</h3>
                                <p>$ {product.price}</p>
                            </div>
                            <div className="actions">
                                <button className="cart-button" onClick={() => addToCart(product)}>
                                    <FaShoppingCart />
                                </button>
                            </div>
                        </ProductCard>
                    ))}
                </ProductGrid>

                <BookShowcase />

                {/* --- SEÇÃO DA BIBLIOTECA --- */}
                <Header style={{ marginTop: '5rem', borderTop: '2px solid #eee', paddingTop: '4rem' }}>
                    <h1>Biblioteca</h1>
                </Header>
                <CategoryTabs>
                    <button onClick={() => setActiveBookCategory('romance')} className={activeBookCategory === 'romance' ? 'active' : ''}>Romance</button>
                    <button onClick={() => setActiveBookCategory('ficcao')} className={activeBookCategory === 'ficcao' ? 'active' : ''}>Ficção</button>
                    <button onClick={() => setActiveBookCategory('drama')} className={activeBookCategory === 'drama' ? 'active' : ''}>Drama</button>
                    <button onClick={() => setActiveBookCategory('comedia')} className={activeBookCategory === 'comedia' ? 'active' : ''}>Comédia</button>
                    <button onClick={() => setActiveBookCategory('terror')} className={activeBookCategory === 'terror' ? 'active' : ''}>Terror</button>
                </CategoryTabs>
                <ProductGrid>
                    {currentBooks.map(book => (
                        <ProductCard key={book.id}>
                            <img src={book.image} alt={book.title} style={{ objectFit: 'cover', height: '220px' }} />
                            <div>
                                <h3>{book.title}</h3>
                                <span>{book.author}</span>
                                <p>$ {book.price}</p>
                            </div>
                            <div className="actions">
                                <button className="cart-button" onClick={() => addToCart(book)}>
                                    <FaShoppingCart />
                                </button>
                            </div>
                        </ProductCard>
                    ))}
                </ProductGrid>
            </Container>
        </>
    );
};

export default Menu;