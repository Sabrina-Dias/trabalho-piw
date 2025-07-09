import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { auth, db } from '../../firebase';

import { Container, RegisterBox, Background, Form, InputGroup, BackToLogin } from './style.js';
import Logo from '../../assets/images/logo-burguer.png';

const Register = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        if (password !== confirmPassword) {
            setError('As senhas não coincidem.');
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(db, 'users', user.uid), {
                uid: user.uid,
                name: name,
                email: email,
                role: 'cliente',
            });

            alert('Usuário cadastrado com sucesso!');
            navigate('/login');

        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
            if (error.code === 'auth/email-already-in-use') {
                setError('Este email já está em uso.');
            } else if (error.code === 'auth/invalid-email') {
                setError('Email inválido.');
            } else if (error.code === 'auth/weak-password') {
                setError('A senha deve ter pelo menos 6 caracteres.');
            } else {
                setError('Erro ao cadastrar usuário. Tente novamente.');
            }
        }
    };

    return (
        <Container>
            <Background />
            <RegisterBox>
                <img
                    src={Logo}
                    alt="Logo Hamburgueria"
                    style={{ /* ... */ }}
                />
                <h2 style={{ color: '#1E2A47', marginBottom: '2rem' }}>Crie sua Conta</h2>
                <Form onSubmit={handleRegister}>
                    <InputGroup>
                        <label htmlFor="name">Nome Completo:</label>
                        <input type="text" id="name" placeholder="Seu nome completo" required />
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" placeholder="seu@email.com" required />
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="password">Senha:</label>
                        <input type="password" id="password" placeholder="Crie uma senha forte" required />
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="confirmPassword">Confirmar Senha:</label>
                        <input type="password" id="confirmPassword" placeholder="Repita a senha" required />
                    </InputGroup>

                    {error && <p style={{ color: 'red', textAlign: 'center', marginBottom: '1rem' }}>{error}</p>}

                    <button type="submit" className="register-button">CADASTRAR</button>
                </Form>
                <BackToLogin>
                    Já tem uma conta? <Link to="/login">Entre</Link>
                </BackToLogin>
            </RegisterBox>
        </Container>
    );
};

export default Register;