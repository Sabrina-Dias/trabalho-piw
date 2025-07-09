import styled from 'styled-components';
import FoodPattern from '../../assets/images/food-pattern3.png';

export const ShowcaseWrapper = styled.section`
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-top: -2rem;
  position: relative;
  height: 450px;
  background: linear-gradient(to right, #fdb813, #ff8c00);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

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

export const FoodContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 900px;
    height: 100%;
`;

export const CollageContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 900px;
    height: 100%;
`;

export const SplashImage = styled.img`
    position: absolute;
    width: 600px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
`;

export const PlateImage = styled.img`
    position: absolute;
    width: 800px;
    max-width: 90%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
`;

export const EsfihaRightImage = styled.img`
    position: absolute;
    width: 180px;
    top: 55%;
    right: 10%;
    z-index: 2;
`;

export const EsfihaLeftImage = styled.img`
    position: absolute;
    width: 180px;
    top: 55%;
    left: 10%;
    z-index: 2;
`;