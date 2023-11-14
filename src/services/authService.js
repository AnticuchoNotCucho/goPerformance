import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, {
            username,
            password,
        });
        if (response.data.token) {
            localStorage.setItem('userToken', response.data.token);
        }
        return response.data;
    } catch (error) {
        // Manejo de errores
        console.error('Error de autenticación', error);
        throw error;
    }
};

export const loginTest = async (username, password) => {
    try {
        if(username === "DoBetter" && password === "DoBetter") {
            console.log("Exitoso")
            return true;
        }
        else{
            console.log("ne ne")
            return false;
        }
    } catch (error) {
        // Manejo de errores
        console.error('Error de autenticación', error);
        throw error;
    }
};