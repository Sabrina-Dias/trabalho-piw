import React from 'react';
import {
    TransitionWrapper,
    CollageContainer,
    OpenBookImage,
    BlueBookImage,
    YellowBookImage
} from './style';

import openBookFoliage from '../../assets/images/open-book.png';
import blueBook from '../../assets/images/blue-book.png';
import yellowBook from '../../assets/images/yellow-book.png';

const BookShowcase = () => {
    return (
        <TransitionWrapper>
            <CollageContainer>
                <BlueBookImage src={blueBook} alt="Livro azul com mancha de tinta" />
                <YellowBookImage src={yellowBook} alt="Livro amarelo com mancha de tinta" />
                <OpenBookImage src={openBookFoliage} alt="Livro aberto com folhagens saindo" />
            </CollageContainer>
        </TransitionWrapper>
    );
};

export default BookShowcase;