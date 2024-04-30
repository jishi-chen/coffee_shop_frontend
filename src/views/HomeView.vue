<template>
    <HelloWorld :msg="msg"></HelloWorld>
    <router-link to="/info">Info</router-link>
</template>

<script lang="ts">
    import HelloWorld from '../components/HelloWorld.vue';
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'HomeView',
        components: { HelloWorld },
        setup() {
            return {
                msg: 'test Home',
            };
        },
    });
</script>
