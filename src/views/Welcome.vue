<template>
    <div class="container">
        <img src="../assets/83bc8b88cf6bc4b4e04d153a418cde62.jpg" alt="" class="defaultImage">
        
        <div class="nav">
            <span :class="{ borderbottom: showLoginForm }" @click="showLoginForm = !showLoginForm">Login</span>           
            <span :class="{ borderbottom: !showLoginForm }" @click="showLoginForm = !showLoginForm">Sign Up</span>
        </div>
        <div class="welcome">
            <div v-if="showLoginForm">
                <Login></Login>
            </div>
            <div v-else>
                <SignUp></SignUp>
            </div>
        </div>
    </div>
    
</template>

<script>

import SignUp from '../components/SignUp'
import Login from '../components/Login'
import { ref } from '@vue/reactivity';

export default {
  components: { SignUp, Login },

  setup() {
    let showLoginForm = ref(true);

    return { showLoginForm }
  }

}
</script>

<style>
.defaultImage{
    width: 110px;
    height: 110px;
    border-radius: 100%;
    position: absolute;
    top: 4%;
    left: 45%;
    transform: rotate(-1deg);
}
 .nav{
    margin: 0 30px;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid rgb(78, 78, 78);
    padding-top: 55px;
 }
 .nav span {
    display: inline-block;
    width: 145px;
    padding: 5px 0px;
    cursor: pointer;
    font-weight: bold;
 }
 .nav span:hover{
    color: #6f7582;
 }
 .nav .borderbottom {
    border-bottom: 2px solid white;
 }

 .welcome {
    text-align: center;
    padding: 10px 0px;
 }
 .welcome form {
    width: 300px;
    margin: 10px auto;
 }
 .welcome label {
    text-align: start;
    display: block;
    margin: 25px 0 0px;
    font-size: 12px;
    padding-left: 10px;
 }

 .welcome input {
    width: 90%;
    padding: 10px;
    border-radius: 10px;
    border: none;
    outline: none;
    background-color: #545e6a;
 }
 .welcome button {
    margin: 25px auto 10px auto;
 }


</style>