<template>
  <form>
    <textarea placeholder="text message and hit enter to send.." v-model="message" @keypress.enter="handleSubmit" cols="55" rows="1"></textarea>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '@/composables/getUser';
import { timestamp } from '@/firebase/config';
import useCollection from '../composables/useCollection'
export default {
    setup() {
        let message = ref('');
        let { user } = getUser();
        let { error,addDocFunc } = useCollection("messages");

        let handleSubmit = async() => {
            let chat = {
                message : message.value,
                name : user.value.displayName,
                created_at  : timestamp
            };
            await addDocFunc(chat);
            message.value = '';
        }

        return { message, handleSubmit }
    }
}
</script>

<style>
  form {
    margin: 10px;
  }
  textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 30px;
    font-family: inherit;
    outline: none;
  }
</style>