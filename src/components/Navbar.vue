<template>
  <div class="" v-if="user" >
    <p>{{ user.displayName }}</p>
    <p>{{ user.email }}</p>
    <button @click="signOut">Log Out</button>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { auth } from '@/firebase/config';
import getUser from '../composables/getUser'
import logoutUser from  '../composables/logoutUser'
export default {
    setup () {
        let { user } = getUser();
        
        let { error, logout } = logoutUser();

        let signOut = async () => {
            await logout();
        }

        



        return { user, error, signOut }
    }
}
</script>

<style>

</style>