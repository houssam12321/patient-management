import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loginSuccess, setLoginSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8081/login', {
                username,
                password
            });
            console.log(response.data); // Affiche la réponse du backend
            setLoginSuccess(true); // Définit loginSuccess à true en cas de succès
            setError(''); // Efface tout message d'erreur précédent
        } catch (error) {
            console.error('Erreur de connexion :', error);
            setError('Nom d\'utilisateur ou mot de passe incorrect');
            setLoginSuccess(false); // Réinitialise loginSuccess à false en cas d'échec
        }
    };

    return (
        <div>
            <h2>Connexion</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nom d'utilisateur:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Mot de passe:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Se connecter</button>
            </form>
            {loginSuccess && <p style={{ color: 'green' }}>Connexion réussie !</p>}
        </div>
    );
};

export default LoginForm;
