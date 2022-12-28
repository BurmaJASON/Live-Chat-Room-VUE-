<template>
  <form @submit.prevent="signUp">
    <label for="">NAME</label>
    <input type="text" placeholder="Enter your username" v-model="displayName">
    <label for="">EMAIL</label>
    <input type="email" placeholder="Enter your email" v-model="email">
    <label for="">PASSWORD</label>
    <input type="password" placeholder="Enter your password" v-model="password">
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  setup() {
    let displayName = ref('');
    let email = ref('');
    let password = ref('');

    let signUp = () => {
      console.log(displayName.value,email.value,password.value);
    }

    return { displayName, email, password, signUp };
  }
}
</script>

<style>

</style>