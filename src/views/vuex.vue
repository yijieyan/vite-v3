<template>
  <div>
    vuex
    <p>{{ count }}</p>
    <p>getter:{{ count1 }}</p>
    <div>
      <button @click="handleAddClick">加</button>
      <button @click="handleSupClick">减</button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'Home',
  setup(props, ctx) {
    let store = useStore()
    let count = computed(() => store.state.test.count)
    let count1 = computed(() => store.getters.getCount)
    const handleAddClick = () => {
      store.dispatch('addCount')
    }
    const handleSupClick = () => {
      store.dispatch('supCount')
    }
    return {
      count,
      count1,
      handleAddClick,
      handleSupClick
    }
  }
})
</script>
