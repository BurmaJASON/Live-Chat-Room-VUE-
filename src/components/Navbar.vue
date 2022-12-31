<template>
  <div class="container">
    <p>user name</p>
    <span>user logged in email</span>
    <button @click="logOut">Log Out</button>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { auth } from '@/firebase/config';
import { signOut } from '@firebase/auth';
export default {
    setup () {
        let error = ref(null);
        let logOut = async() => {
            try {
                await  signOut(auth);
                console.log('user logout');
            }catch (err) {
                error.value = err.message;
                console.log(error.value);
            }
        }

        return { logOut,error }
    }
}
</script>

<style>

</style>