import React from 'react';
import {
    ShowcaseWrapper,
    CollageContainer,
    PlateImage,
    EsfihaRightImage,
    EsfihaLeftImage
} from './style';

import PlateWithCutleryImg from '../../assets/images/plate.png';
import EsfihaRightImg from '../../assets/images/esfirra.png';
import EsfihaLeftImg from '../../assets/images/esfirra-queijo.png';


const FoodShowcase = () => {
    return (
        <ShowcaseWrapper>
            <CollageContainer>
                <PlateImage src={PlateWithCutleryImg} alt="Prato com hambúrguer, fritas, garfo e faca" />

                <EsfihaRightImage src={EsfihaRightImg} alt="Esfiha de carne" />
                <EsfihaLeftImage src={EsfihaLeftImg} alt="Esfiha de queijo" />
            </CollageContainer>
        </ShowcaseWrapper>
    );
};

export default FoodShowcase;