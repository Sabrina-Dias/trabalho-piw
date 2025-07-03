import styled from 'styled-components';
import FoodPattern from '../../assets/images/food-pattern.png';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: stretch;
  position: relative;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1E2A47;
  background-image: url(${FoodPattern});
  background-size: 500px;
  background-position: center;
  z-index: 1;
`;

export const LoginBox = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  background-color: white;
  margin-right: 80px;
  position: relative;
  z-index: 2;
  margin-left: auto;

  img {
    width: 120px;
    margin-bottom: 2.5rem;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;

  .login-button {
    background-color: #1E2A47;
    color: white;
    padding: 1rem;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    margin-top: 1.5rem;
    transition: background-color 0.2s;

    &:hover {
      background-color: #2a3a5a;
    }
  }

  .guest-link {
    text-align: center;
    margin-top: 1rem;
    color: #555;
    font-size: 0.9rem;
    background: transparent;
    border: none;
    cursor: pointer;
    text-decoration: none;
    
    &:hover {
      color: #1E2A47;
    }
  }
`;

export const InputGroup = styled.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #333;
  }

  input {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
  }

  .forgot-password {
    display: block;
    text-align: right;
    font-size: 0.8rem;
    color: #555;
    background: transparent;
    border: none;
    cursor: pointer;
    margin-top: 0.5rem;
    
    &:hover {
      color: #1E2A47;
    }
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  align-items: center;

  input {
    margin-right: 0.3rem;
  }
`;

export const Separator = styled.div`
  margin-top: 1.5rem;
  color: #555;
  font-size: 0.9rem;

  a {
    color: #1E2A47;
    font-weight: bold;
    text-decoration: none;
  }
`;