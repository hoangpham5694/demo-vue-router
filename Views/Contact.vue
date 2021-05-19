<template>
    <div class="container">
        <h1>Contact</h1>
        <button v-on:click="handleGoToHome">Go to home</button>
    </div>

</template>

<script>
    export default {
        name: "Contact",
        methods: {
            handleGoToHome(){
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>
.container{
    background-color: antiquewhite;
}
</style>
