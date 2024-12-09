import axios from "axios";


export const login = async (email, password) => {
    try {
        const response = await axios.post("http://localhost:8000/admin/login", {
            email,
            password
        });

       
        const { token, login, msg } = response.data;

        if (login) {
            console.log("Login bem-sucedido:", msg);

         
            localStorage.setItem("superUserToken", token);

            return { success: true, token };
        } else {
            console.warn("Falha no login:", msg);
            return { success: false, message: msg };
        }
    } catch (error) {
        console.error("Erro ao fazer login:", error.response?.data?.msg || error.message);
        return { success: false, message: error.response?.data?.msg || "Erro desconhecido" };
    }
};

export const getToken = () => {
    const token = localStorage.getItem("superUserToken");
    return token;
}

export const clearToken = () => {
    localStorage.removeItem("superUserToken");
}