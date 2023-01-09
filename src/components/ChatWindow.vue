<template>
  <div class="chat-window">
    <div class="messages">
      <div class="single" v-for="message in formattedMessages" :key="message.id">
        <span class="created_at">{{ message.created_at }}</span>
        <span class="name">{{  message.name }}</span>
        <span class="messages">{{ message.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { db } from '@/firebase/config';
import { collection,orderBy,query,onSnapshot } from '@firebase/firestore';
import { computed } from '@vue/runtime-core';
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
    })

    return { messages,formattedMessages }
 }
}
</script>

<style>

</style>