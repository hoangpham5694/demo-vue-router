<template>
    <div class="container">
        <h1>Home screen</h1>
        <button v-on:click="handleGoToContact">Go to contact</button>
    </div>

</template>

<script>
    export default {
        name: "Home",
        methods:{
            handleGoToContact(){
                this.$router.push('/contact')
            }
        }
    }
</script>

<style scoped>
    .container{
        background-color: #FBFFE9;
    }
</style>
