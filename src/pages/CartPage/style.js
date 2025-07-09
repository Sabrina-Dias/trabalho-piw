import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 4rem;
  background-color: #f4f4f4;
  min-height: 100vh;

  .cart-summary {
    margin-top: 3rem;
    padding: 2rem;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    text-align: right;
  }

  .cart-summary h2 {
    margin-bottom: 1rem;
    color: #1E2A47;
  }

  .checkout-button {
    background-color: #1E2A47;
    color: white;
    border: none;
    padding: 1rem 2.5rem;
    font-size: 1.2rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #1E2A47;
  margin-bottom: 1.5rem;
  font-weight: bold;
`;

export const OrdersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

export const OrderCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);

  .header {
    background-color: #1E2A47;
    color: white;
    padding: 0.8rem 1rem;
    font-weight: bold;
  }

  .body {
    padding: 1rem;
    
    .item-line {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      color: #555;
    }

    /* Estilos para o controle de quantidade */
    .quantity-control {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-top: 0.5rem;
    }

    .quantity-control button {
        background-color: #eee;
        border: 1px solid #ddd;
        border-radius: 4px;
        width: 25px;
        height: 25px;
        font-weight: bold;
        cursor: pointer;
    }
  }
`;