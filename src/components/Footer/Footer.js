import React from 'react';
import { FaStar } from 'react-icons/fa';
import {
    FooterContainer,
    TopSection,
    ImageContainer,
    TextContainer,
    CommentsSection,
    CommentsGrid,
    CommentCard,
    LoadMoreContainer
} from './style.js';

import HamburguerImg from '../../assets/images/hamburguer.png';
import UserImg from '../../assets/images/user-avatar.png';

const commentsData = [
    {
        name: 'Marcia Santana',
        rating: 5,
        comment: 'Degustar um prato delicioso enquanto mergulho nas páginas de um livro cria uma atmosfera mágica.'
    },
    {
        name: 'Carlos Pereira',
        rating: 5,
        comment: 'A combinação de boa comida e uma grande história é simplesmente imbatível. Recomendo a todos!'
    },
    {
        name: 'Ana Costa',
        rating: 5,
        comment: 'Nunca pensei que um lanche pudesse me conectar tanto com a leitura. Experiência fantástica.'
    },
];

const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, i) => <FaStar key={i} />);
};

const Footer = () => {
    return (
        <FooterContainer>
            <TopSection>
                <ImageContainer>
                    <img src={HamburguerImg} alt="Hambúrguer delicioso" />
                </ImageContainer>
                <TextContainer>
                    <h2>Vamos, <span>experimentar?</span></h2>
                    <p>
                        Ao saborear uma refeição inspirada em histórias, como um prato mencionado em um romance ou um lanche típico de uma época retratada em um clássico, você não apenas se alimenta, mas também amplia sua conexão com a narrativa. Esse casamento perfeito entre literatura e culinária é uma forma de celebrar a cultura e a criatividade, proporcionando momentos de prazer que nutrem a alma.
                    </p>
                </TextContainer>
            </TopSection>

            <CommentsSection>
                <h2>Comentários</h2>
                <CommentsGrid>
                    {commentsData.map((review, index) => (
                        <CommentCard key={index}>
                            <div className="user-info">
                                <img src={UserImg} alt={review.name} />
                                <div className="user-details">
                                    <h4>{review.name}</h4>
                                    <div className="stars">{renderStars(review.rating)}</div>
                                </div>
                            </div>
                            <p>{review.comment}</p>
                        </CommentCard>
                    ))}
                </CommentsGrid>
            </CommentsSection>

            <LoadMoreContainer>
                <button>+</button>
            </LoadMoreContainer>
        </FooterContainer>
    );
};

export default Footer;