<template>
  <div class="chat-container">
    <Navbar></Navbar>
    <div>
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
    background-color: #2e3138;
  }
</style>