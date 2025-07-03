import styled from 'styled-components';
import FoodPattern from '../../assets/images/food-pattern3.png';

export const TransitionWrapper = styled.section`
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-top: -2rem;
  position: relative;
  height: 400px;
  background: linear-gradient(to right, #fdb813, #ff8c00);
  overflow: hidden;
  margin-top: 5rem; 

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${FoodPattern});
    background-size: 400px;
    opacity: 0.15;
    z-index: 1;
  }
`;

export const CollageContainer = styled.div`
  position: relative;
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;
`;

export const OpenBookImage = styled.img`
  position: absolute;
  width: 500px;
  bottom: -80px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
`;

export const BlueBookImage = styled.img`
  position: absolute;
  width: 300px;
  top: 60px;
  left: 5%; 
  transform: rotate(15deg);
  z-index: 2;
`;

export const YellowBookImage = styled.img`
  position: absolute;
  width: 300px;
  top: 80px;
  right: 5%;
  transform: rotate(105deg);
  z-index: 2;
`;