<template>
  <form @submit.prevent="signUp">
    <label for="">NAME</label>
    <input type="text" placeholder="Enter your username" v-model="displayName">
    <label for="">EMAIL</label>
    <input type="email" placeholder="Enter your email" v-model="email">
    <label for="">PASSWORD</label>
    <input type="password" placeholder="Enter your password" v-model="password">
    <div v-if="error" class="error">{{ error }}</div>
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import signUpC  from '@/composables/signUpC'

export default {
  setup() {
    let displayName = ref('');
    let email = ref('');
    let password = ref('');

    let {error,createAccount} = signUpC();

    let signUp = async () => {
      let res = await createAccount(email.value,password.value,displayName.value);

      if(res) {
        console.log(res.user);
      }
    }

    return { displayName, email, password, signUp, error };
  }
}
</script>

<style>

</style>