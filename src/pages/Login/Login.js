import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

import { Container, LoginBox, Background, Form, InputGroup, Separator } from './style.js';
import Logo from '../../assets/images/logo-burguer.png';

const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/cardapio');
        } catch (err) {
            console.error('Erro ao fazer login:', err);
            setError('Credenciais inválidas. Verifique seu email e senha.');
        }
    };

    const handleForgotPassword = () => {
        console.log("Redirecionando para recuperação de senha...");
    };

    const handleGuestAccess = () => {
        console.log("Entrando como visitante...");
        navigate('/cardapio');
    };

    return (
        <Container>
            <Background />
            <LoginBox>
                <img
                    src={Logo}
                    alt="Logo Hamburgueria"
                    style={{
                        width: '60%',
                        maxWidth: '200px',
                        height: 'auto',
                        display: 'block',
                        margin: '20px auto 30px auto'
                    }}
                />
                <Form onSubmit={handleLogin}>
                    <InputGroup>
                        <label htmlFor="email">Usuário:</label>
                        <input type="email" id="email" placeholder="exemplo@usuario.com" required />
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="password">Senha:</label>
                        <input type="password" id="password" required />
                        <button type="button" className="forgot-password" onClick={handleForgotPassword}>
                            Esqueci minha senha
                        </button>
                    </InputGroup>

                    {error && <p style={{ color: 'red', textAlign: 'center', marginBottom: '1rem' }}>{error}</p>}

                    <button type="submit" className="login-button">ENTRAR</button>
                    <button type="button" className="guest-link" onClick={handleGuestAccess}>
                        Entrar como visitante
                    </button>
                </Form>

                <Separator>
                    Não tem uma conta? <Link to="/register">Cadastre-se</Link>
                </Separator>
            </LoginBox>
        </Container>
    );
};

export default Login;