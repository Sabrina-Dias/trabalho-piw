import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #3d4a66; 
  color: white;
  padding-top: 4rem;
`;

export const TopSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    width: 400px;
    position: relative;
    z-index: 2;
  }

  &::before {
    content: '';
    position: absolute;
    width: 80%;
    height: 80%;
    background-color: #2c3850;
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    transform: rotate(15deg);
    z-index: 1;
  }
`;

export const TextContainer = styled.div`
  h2 {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    line-height: 1.2;

    span {
      color: #fdb813; /* Amarelo */
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    max-width: 500px;
  }
`;

export const CommentsSection = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`;

export const CommentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const CommentCard = styled.div`
  background-color: #fff;
  color: #333;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: left;

  .user-info {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 1rem;
  }

  .user-details h4 {
    margin: 0;
  }

  .stars {
    color: #fdb813;
  }
`;

export const LoadMoreContainer = styled.div`
  background-color: #fdb813;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  button {
    background-color: #1E2A47;
    color: white;
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    font-size: 2.5rem;
    line-height: 60px;
    cursor: pointer;
  }
`;