import React from 'react';
import { SectionWrapper, Title, CardsContainer, InfoCard } from './style';

import ToastDrawing from '../../assets/images/toast-drawing.png';

const infoData = [
    {
        icon: ToastDrawing,
        text: 'Deixe-se levar por essa experiência única e descubra como cada mordida pode contar uma nova história!'
    },
    {
        icon: ToastDrawing,
        text: 'Esse casamento perfeito entre literatura e culinária é uma forma de celebrar a cultura e a criatividade.'
    },
    {
        icon: ToastDrawing,
        text: 'Cada página lida pode ser acompanhada por um sabor que evoca emoções e memórias.'
    }
];

const InfoSection = () => {
    return (
        <SectionWrapper>
            <Title>
                A combinação de comida e leitura criam momentos de prazer que nutrem a alma.
            </Title>
            <CardsContainer>
                {infoData.map((card, index) => (
                    <InfoCard key={index}>
                        <img src={card.icon} alt="Ilustração de pão de forma" />
                        <p>{card.text}</p>
                    </InfoCard>
                ))}
            </CardsContainer>
        </SectionWrapper>
    );
};

export default InfoSection;