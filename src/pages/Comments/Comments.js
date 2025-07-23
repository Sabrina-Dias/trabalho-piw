import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import {
    CommentsPageWrapper, Section, SectionContent, DecorativeImage,
    CategoryTabs, CommentsGrid, CommentCard
} from './style';

import HamburguerImg from '../../assets/images/hamburguer.png';
import SucoImg from '../../assets/images/suco-laranja.png';
import LivroImg from '../../assets/images/yellow-book.png';
import UserAvatar from '../../assets/images/user-avatar.png';

const commentsData = {
    geral: [{ id: 1, name: 'Marcia Santana', text: 'Degustar um prato delicioso...' }],
    itens: {
        pastel: [{ id: 2, name: 'Marcia Santana', text: 'O pastel de queijo é incrível!' }],
        hamburguer: [{ id: 3, name: 'Carlos Dias', text: 'O X-Burger é o melhor da cidade.' }],
    },
    livros: {
        romance: [{ id: 4, name: 'Ana Souza', text: 'Chorei com este livro, perfeito.' }],
        ficcao: [{ id: 5, name: 'Pedro Lima', text: 'Uma viagem para outro mundo.' }],
    }
};

const Comments = () => {
    // const navigate = useNavigate();
    const [activeItemCategory, setActiveItemCategory] = useState('pastel');
    const [activeBookCategory, setActiveBookCategory] = useState('romance');

    return (
        <CommentsPageWrapper>
            {/* <CommentsHeader>
                <button onClick={() => navigate(-1)}>Voltar</button>
                <button className="active">Comentários</button>
                <button onClick={() => navigate('/login')}>Sair</button>
            </CommentsHeader> */}

            <Section>
                <DecorativeImage src={HamburguerImg} alt="Hambúrguer" />
                <SectionContent>
                    <h2>Comentários</h2>
                    <CommentsGrid>
                        {[...commentsData.geral, ...commentsData.geral, ...commentsData.geral, ...commentsData.geral].map((comment, index) => (
                            <CommentCard key={index}>
                                <div className="user-info">
                                    <img src={UserAvatar} alt={comment.name} />
                                    <div>
                                        <h4>{comment.name}</h4>
                                        <div className="stars">★★★★★</div>
                                    </div>
                                </div>
                                <p>{comment.text}</p>
                            </CommentCard>
                        ))}
                    </CommentsGrid>
                </SectionContent>
            </Section>

            <Section className="reverse">
                <SectionContent>
                    <h2>Comentários por itens da loja</h2>
                    <CategoryTabs>
                        <button className={activeItemCategory === 'pastel' ? 'active' : ''} onClick={() => setActiveItemCategory('pastel')}>Pastel</button>
                        <button className={activeItemCategory === 'hamburguer' ? 'active' : ''} onClick={() => setActiveItemCategory('hamburguer')}>Hambúrguer</button>
                    </CategoryTabs>
                    <CommentsGrid>
                        {commentsData.itens[activeItemCategory]?.map(comment => (
                            <CommentCard key={comment.id}>
                                <div className="user-info">
                                    <img src={UserAvatar} alt={comment.name} />
                                    <div>
                                        <h4>{comment.name}</h4>
                                        <div className="stars">★★★★★</div>
                                    </div>
                                </div>
                                <p>{comment.text}</p>
                            </CommentCard>
                        ))}
                    </CommentsGrid>
                </SectionContent>
                <DecorativeImage src={SucoImg} alt="Suco de Laranja" />
            </Section>

            <Section>
                <DecorativeImage src={LivroImg} alt="Livro" />
                <SectionContent>
                    <h2>Comentários por livros da loja</h2>
                    <CategoryTabs>
                        <button className={activeBookCategory === 'romance' ? 'active' : ''} onClick={() => setActiveBookCategory('romance')}>Romance</button>
                        <button className={activeBookCategory === 'ficcao' ? 'active' : ''} onClick={() => setActiveBookCategory('ficcao')}>Ficção</button>
                    </CategoryTabs>
                    <CommentsGrid>
                        {commentsData.livros[activeBookCategory]?.map(comment => (
                            <CommentCard key={comment.id}>
                                <div className="user-info">
                                    <img src={UserAvatar} alt={comment.name} />
                                    <div>
                                        <h4>{comment.name}</h4>
                                        <div className="stars">★★★★★</div>
                                    </div>
                                </div>
                                <p>{comment.text}</p>
                            </CommentCard>
                        ))}
                    </CommentsGrid>
                </SectionContent>
            </Section>

        </CommentsPageWrapper>
    );
};

export default Comments;