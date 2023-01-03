<template>
  <Navbar></Navbar>
</template>

<script>
import Navbar from '../components/Navbar'
import getUser from '@/composables/getUser';
import { useRouter } from 'vue-router';
import { ref } from '@vue/reactivity';
import { watch } from '@vue/runtime-core';

export default {
  components: { Navbar },
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

</style>