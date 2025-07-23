import styled from 'styled-components';

export const CommentsPageWrapper = styled.div`
  background-color: #3d4a66; /* Cor de fundo principal */
  color: white;
  min-height: 100vh;
`;

export const CommentsHeader = styled.header`
  background-color: #1E2A47;
  padding: 1rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background: transparent;
    border: none;
    color: white;
    font-size: 1rem;
    cursor: pointer;

    &.active {
      background-color: white;
      color: #1E2A47;
      padding: 0.5rem 1rem;
      border-radius: 20px;
    }
  }
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  gap: 3rem;
  padding: 4rem;
  max-width: 1400px;
  margin: 0 auto;

  /* Inverte a ordem das colunas para seções específicas */
  &.reverse {
    grid-template-columns: 2fr 1fr;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    &.reverse {
      grid-template-columns: 1fr;
    }
  }
`;

export const SectionContent = styled.div`
  h2 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
`;

export const DecorativeImage = styled.img`
  max-width: 100%;
  width: 350px;
  justify-self: center;
`;

export const CategoryTabs = styled.nav`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  background-color: #2c3850;
  padding: 0.5rem;
  border-radius: 8px;
  
  button {
    flex: 1;
    background: transparent;
    border: none;
    color: #ccc;
    padding: 0.8rem;
    cursor: pointer;
    font-size: 1rem;
    border-radius: 6px;

    &.active {
      background-color: #1E2A47;
      color: white;
      font-weight: bold;
    }
  }
`;

export const CommentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export const CommentCard = styled.div`
  background-color: white;
  color: #333;
  padding: 1.5rem;
  border-radius: 8px;

  .user-info {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 1rem;
  }
  
  .stars {
    color: #fdb813;
  }
`;