<template>
  <div class="Test">
    <h1>test count:{{ count.value }}</h1>
    <button @click="add">add</button>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  setup () {
    const count = reactive({
      value: 0
    })
    const add = () => {
      count.value++
    }
    return { count, add }
  }
}
</script>
