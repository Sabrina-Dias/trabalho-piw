import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;

  h1 {
    font-size: 3.5rem; 
    color: #1E2A47;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 0.5rem 1rem;

  input {
    border: none;
    outline: none;
    font-size: 1rem;
  }
`;

export const CartInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  strong {
    font-size: 1.2rem;
    color: #1E2A47;
  }
`;

export const CategoryTabs = styled.nav`
  display: flex;
  gap: 1rem;
  margin-bottom: 2.5rem;
  background-color: #1E2A47;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  overflow-x: auto;

  button {
    background: transparent;
    border: none;
    color: #ccc;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    white-space: nowrap;
    
    &.active {
      color: white;
      font-weight: bold;
      border-bottom: 3px solid white;
    }
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 2rem;
`;

export const ProductCard = styled.div`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s, box-shadow 0.2s, background-color 0.3s, border-color 0.3s;

  &:hover {
    background-color: #1E2A47;
    border-color: #FDB813;
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    
    /* Todos os textos ficam brancos no hover */
    h3, p, span {
      color: white;
    }
  }

  img {
    max-width: 100%;
    height: 150px;
    object-fit: contain;
    margin-bottom: 1rem;
  }
  
  h3 {
    font-size: 1.1rem;
    color: #333;
    text-transform: uppercase; 
    min-height: 40px; 
  }

  span {
    display: block;
    font-size: 0.9rem;
    color: #666;
    margin: 0.25rem 0 0.75rem 0;
    transition: color 0.3s;
  }

  p {
    font-size: 1.3rem;
    font-weight: bold;
    color: #1E2A47;
    margin: 0.5rem 0 1rem 0;
    transition: color 0.3s;
  }
  
  .actions {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .cart-button {
    background-color: #3d4a66; 
    color: white;
    border: none;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    font-size: 1.2rem;
    display: grid;
    place-items: center;
  }
`;