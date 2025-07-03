import styled from 'styled-components';

export const BannerWrapper = styled.section`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-top: 0;
  position: relative;
  background-color: #f3e3cb;
  padding: 3rem 0;
  margin-bottom: 0.5rem;
  

  @media (max-width: 1200px) {
    margin-left: calc(-50vw + 50%);
    margin-top: 0;
  }
`;

export const BannerContainer = styled.div`
  max-width: 1200px; 
  margin: 0 auto;
  padding: 3rem 4rem; 

  
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 2rem;
  overflow: hidden;
  background-color: #f3e3cb;


  @media (max-width: 1200px) {
    margin: 0 2rem;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 2rem;
  }
`;

export const TextContent = styled.div`
  h1 {
    font-size: 4rem;
    color: #1E2A47;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    font-weight: bold;
  }

  p {
    font-size: 1rem;
    color: #333;
    line-height: 1.6;
    max-width: 500px;
  }

  @media (max-width: 900px) {
    order: 2;
    h1 {
      font-size: 2.5rem;
    }
    p {
      margin: 0 auto;
    }
  }
`;

export const ImageContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;

  .main-image {
    position: relative;
    z-index: 3;
    width: 100%;
    max-width: 350px;
  }

  .shape-blue {
    position: absolute;
    width: 280px;
    height: 180px;
    background-color: #3d4a66;
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    transform: rotate(-15deg);
    z-index: 2;
    right: 0;
    top: 50%;
    margin-top: -90px;
  }

  .shape-yellow {
    position: absolute;
    width: 250px;
    height: 160px;
    background-color: #fdb813;
    border-radius: 50% 50% 50% 50% / 40% 40% 60% 60%;
    transform: rotate(25deg);
    z-index: 1;
    left: 0;
    top: 50%;
    margin-top: -60px;
  }

  @media (max-width: 900px) {
    order: 1;
    min-height: 250px;
  }
`;