<template>
  <div class="chat-container">
    <Navbar></Navbar>
    <div class="chat">
      <ChatWindow></ChatWindow>
      <TypeChat></TypeChat>
    </div>
  </div>
</template>

<script>
import ChatWindow from '../components/ChatWindow'
import TypeChat from '../components/TypeChat'
import Navbar from '../components/Navbar'
import getUser from '@/composables/getUser';
import { useRouter } from 'vue-router';
import { ref } from '@vue/reactivity';
import { watch } from '@vue/runtime-core';

export default {
  components: {
    ChatWindow,
    TypeChat, Navbar },
  setup () {
    let router = useRouter();
    let { user } = getUser();

    watch(user, () => {
      if(!user.value) {
        router.push('/');
      }
    });

    return { user }

    
  }
}
</script>

<style>
  .chat-container {
    display: flex;
    width: 90%;
    max-width: 800px;
    margin: 80px auto;
    border-radius: 20px;
    box-shadow: 2px 4px 6px rgba(28, 6, 49, 0.1);
    background-color: #2e3138;
    /* position: relative; */
}
.chat {
  padding: 5px;
  border-left: 0.2px solid rgb(0, 0, 0);
  border-radius: 75px;
}


 
  
</style>