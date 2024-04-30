<template>
    <div>
        <h1>Login Page</h1>
        <form @submit.prevent="login">
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="formData.username" required />
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="formData.password" required />
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref } from 'vue';
    import AuthService from '../services/AuthService';
    import LoginForm from '@/models/LoginForm';

    export default defineComponent({
        setup() {
            const formData = ref<LoginForm>({ username: '', password: '' });

            const login = async () => {
                try {
                    const data = await AuthService.login(formData.value);
                    // 登入成功後的處理，例如導航至首頁
                    console.log(data);
                } catch (error) {
                    // 登入失敗的處理，例如顯示錯誤訊息
                    console.error(error);
                }
            };

            return { formData, login };
        },
    });
</script>
