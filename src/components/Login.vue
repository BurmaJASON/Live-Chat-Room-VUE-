<template>
  <form @submit.prevent="logIn">
    <label for="">EMAIL</label>
    <input type="email" placeholder="Enter your email" v-model="email">
    <label for="">PASSWORD</label>
    <input type="password" placeholder="Enter your password" v-model="password">
    <button>Submit</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  setup () {
    let email = ref('');
    let password = ref('');

    let logIn = () => {
      console.log(email.value, password.value);
    }

    return { email, password, logIn };
  }
}
</script>

<style>

</style>