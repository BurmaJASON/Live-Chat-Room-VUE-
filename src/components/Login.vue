<template>
  <form @submit.prevent="signIn">
    <label for="">EMAIL</label>
    <input type="email" placeholder="Enter your email" v-model="email">
    <label for="">PASSWORD</label>
    <input type="password" placeholder="Enter your password" v-model="password">
    <div class="error">{{ error }}</div>
    <button>Submit</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import signInC from '../composables/signInC'
export default {
  setup () {
    let email = ref('');
    let password = ref('');

    let {error,logIn} = signInC();

    let signIn = async() => {
      let res = await logIn(email.value,password.value);
      
      if(res) {
        console.log(res.user);
      }
    }

    return { email, password, signIn, error };
  }
}
</script>

<style>

</style>