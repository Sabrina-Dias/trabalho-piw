import styled from 'styled-components';

export const SectionWrapper = styled.section`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-top: -2rem; 
  position: relative; 
  background-color: #3d4a66; 
  padding: 4rem 2rem;
  text-align: center;
  margin-top: -2.5rem;
  position: relative;
  z-index: -1; 
`;

export const Title = styled.h2`
  color: white;
  font-size: 2rem;
  max-width: 600px;
  margin: 0 auto 3rem auto;
  font-weight: bold;
  line-height: 1.4;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

export const InfoCard = styled.div`
  background-color: #2c3850; 
  padding: 2rem;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #f0f0f0;
  
  img {
    width: 120px;
    margin-bottom: 1.5rem;
  }

  p {
    line-height: 1.6;
    font-size: 1rem;
  }
`;