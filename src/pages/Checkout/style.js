import styled from 'styled-components';

export const CheckoutPageWrapper = styled.div`
  background-color: #f4f4f4;
  min-height: 100vh;
`;

export const CheckoutHeader = styled.header`
  background-color: #1E2A47;
  color: white;
  padding: 1rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .header-nav button {
    background: transparent;
    border: 1px solid white;
    color: white;
    padding: 0.8rem 1.5rem;
    margin-left: 1rem;
    border-radius: 20px;
    cursor: pointer;
    font-size: 1rem;
    
    &.active {
      background-color: white;
      color: #1E2A47;
      font-weight: bold;
    }
  }
`;

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  max-width: 1300px;
  margin: 2rem auto;
  padding: 0 2rem;
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const RightColumn = styled.div``;

export const Section = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);

  > h2 {
    font-size: 1.5rem;
    color: #1E2A47;
    margin-bottom: 1.5rem;
  }
`;

export const ToggleButtonGroup = styled.div`
  background: #eee;
  border-radius: 8px;
  display: flex;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

export const ToggleButton = styled.button`
  flex: 1;
  padding: 1rem;
  border: none;
  background: ${({ isActive }) => (isActive ? '#1E2A47' : 'transparent')};
  color: ${({ isActive }) => (isActive ? 'white' : '#555')};
  border-radius: 6px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

export const InfoBox = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background: transparent;
    border: none;
    color: #1E2A47;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const BigButton = styled.button`
    width: 100%;
    background-color: #1E2A47;
    color: white;
    border: none;
    padding: 1.2rem;
    font-size: 1.2rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 1rem;
`;

export const OrderSummary = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);

  h3 {
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
  }

  li {
    display: flex;
    justify-content: space-between;
    padding: 0.8rem 0;
    border-bottom: 1px solid #f0f0f0;
  }

  .price-details {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 2px solid #f0f0f0;

    div {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
    }
    
    .total {
        font-size: 1.2rem;
        font-weight: bold;
    }
  }
`;