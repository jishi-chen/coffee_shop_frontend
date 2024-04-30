import LoginForm from '@/models/LoginForm';
import axios, { AxiosResponse } from 'axios';

interface LoginResponse {
    token: string;
    // 其他登入成功後需要回傳的資料
}

const API_URL = 'https://localhost:44333/api';

const AuthService = {
    login: async (formData: LoginForm): Promise<LoginResponse> => {
        try {
            const response: AxiosResponse<LoginResponse> = await axios.post(
                `${API_URL}/Member/Login`,
                formData,
            );
            return response.data;
        } catch (error) {
            throw new Error('Login failed');
        }
    },
};

export default AuthService;
