<template>
<nav>
    <ul>
        <li>
            <router-link to="/">Home</router-link>
        </li>
        <li>
            <router-link to="/contact">Contact</router-link>
        </li>
    </ul>


</nav>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>
    nav{
        background-color: black;
        overflow: hidden;
    }
    ul{
        list-style: none;
        padding: 0;
        margin: 0;
    }
    ul li{
        float: left
    }
    li a{
        color: white;
        display: block;
        text-align: center;
        padding: 16px;
        text-decoration: none;
    }
    li a:hover{
        background-color: #2c3e50;
    }
</style>
