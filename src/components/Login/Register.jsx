import React, { useState } from 'react';
import axios from 'axios';

const NewUserForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [profile, setProfile] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8081/api/users/register', {
                username,
                password,
                profile
            });
            console.log(response.data); // Affiche les données du nouvel utilisateur enregistré
            // Ajoutez ici une logique pour traiter la réponse ou rediriger l'utilisateur si nécessaire
        } catch (error) {
            console.error('Erreur lors de l\'enregistrement de l\'utilisateur :', error);
            // Ajoutez ici une logique pour gérer les erreurs
        }
    };

    return (
        <div>
            <h2>Enregistrer un nouvel utilisateur</h2>
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
                <div>
                    <label>Profil:</label>
                    <input
                        type="text"
                        value={profile}
                        onChange={(e) => setProfile(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Enregistrer</button>
            </form>
        </div>
    );
};

export default NewUserForm;
