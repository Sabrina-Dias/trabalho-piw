import React from 'react';
import AppRoutes from './routes';
import GlobalStyle from './styles/global';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <GlobalStyle />
        <AppRoutes />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;