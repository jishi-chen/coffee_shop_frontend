<template>
    <HelloWorld :msg="msg"></HelloWorld>
    <router-link to="/">Home</router-link>
</template>

<script lang="ts">
    import HelloWorld from '../components/HelloWorld.vue';
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'InfoView',
        components: { HelloWorld },
        setup() {
            return {
                msg: 'Information',
            };
        },
    });
</script>
