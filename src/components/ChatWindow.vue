<template>
  <div class="chat-window">
    <div class="messages" ref="msgBox">
      <div class="single" v-for="message in formattedMessages" :key="message.id">
        <span class="created_at">{{ message.created_at }}</span>
        <span class="name">{{  message.name }}</span>
        <span class="messages message">{{ message.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { db } from '@/firebase/config';
import { collection,orderBy,query,onSnapshot } from '@firebase/firestore';
import { computed, onUpdated } from '@vue/runtime-core';
import { formatDistanceToNow } from 'date-fns'
export default {
 setup () { 
    let messages = ref([]);
    
    onSnapshot(query(collection(db,'messages'),orderBy('created_at')),(snap) => {

      let results = [];

      snap.docs.forEach((doc) => {
        let document = {...doc.data(), id : doc.id};

        if(doc.data().created_at) {
          results.push(document);
        };

      });

      messages.value = results;
    });

    let formattedMessages = computed(() => {
      return messages.value.map((msg) => {
        let formatTime = formatDistanceToNow(msg.created_at.toDate());

        return {...msg,created_at : formatTime};
      })
    });

    //auto scrolling feauture
    let msgBox = ref(null);
    onUpdated(() => {
      msgBox.value.scrollTop = msgBox.value.scrollHeight;
    })

    return { messages,formattedMessages,msgBox }
 }
}
</script>

<style>
  .chat-window {
    padding: 30px 20px;    
  }
  .single {
    margin: 20px 0;
  }
  .created_at {
    display: block;
    color: rgb(188, 188, 188);
    font-size: 11px;
    margin-bottom: 7px;
  }
  .name {
    font-weight: bold;
    margin-right: 6px;
  }
  .messages {
    max-height: 400px;
    overflow: auto;
  }
  .message {
    border: 1px solid #5f636b;
    border-radius: 20px;
    padding: 6px 10px;
    background-color: #5f636b;
    color: white;
  }
</style>