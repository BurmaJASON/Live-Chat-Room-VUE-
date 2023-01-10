<template>
  <div class="info" v-if="user" >
    <span class="displayname">{{ user.displayName }}</span> <br>
    <small class="email">{{ user.email }}</small>
    <button @click="signOut" class="logout">Log Out</button>
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
  .info {
    padding: 25px;
    padding-top: 50px;
    width: 140px;
  }
  .displayname {
    font-size: 22px;
  }
  .email {
    color: gray;
  }
  .logout {
    margin-top: 20px;
  }
  
</style>