import React from 'react';
import { BannerWrapper, BannerContainer, TextContent, ImageContent } from './style.js';
import BurgerDrawing from '../../assets/images/burger-drawing.png';

const HeroBanner = () => {
    return (
        <BannerWrapper>
            <BannerContainer>
                <TextContent>
                    <h1>Sabores que contam historrias!</h1>
                    <p>
                        A união entre comida e leitura proporciona uma experiência sensorial única, alimentando tanto o corpo quanto a mente. Cada prato pode evocar emoções e memórias, tornando a leitura uma viagem gastronômica.
                    </p>
                </TextContent>
                <ImageContent>
                    <div className="shape-blue"></div>
                    <div className="shape-yellow"></div>
                    <img
                        src={BurgerDrawing}
                        alt="Ilustração de um hambúrguer"
                        className="main-image"
                    />
                </ImageContent>
            </BannerContainer>
        </BannerWrapper>
    );
};

export default HeroBanner;