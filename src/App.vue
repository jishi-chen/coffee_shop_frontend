<template>
    <router-link to="/login">登入</router-link>
    <div>
        <a href="*">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="*">
            <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
    </div>
    <router-view />
    <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
    .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
    }
    .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.vue:hover {
        filter: drop-shadow(0 0 2em #42b883aa);
    }
</style>
