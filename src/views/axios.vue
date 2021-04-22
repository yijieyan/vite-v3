<template>
  <div>vue3</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import axios from '../utils/axios'

export default defineComponent({
  name: 'Home',
  setup() {
    axios
      .get('/users/XPoet')
      .then((res) => console.log('res: ', res.data))
      .catch((err) => console.log('err: ', err))
  }
})
</script>
