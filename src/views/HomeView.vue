<script setup>
import ContractCard from '../components/ContractCard.vue';
import { reactive } from 'vue'

const contractCard1 = reactive({
    id:1,        
    title : 'Card1 title',
    description:'Card1 description',
})

</script>

<template>

  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>

  <ContractCard :infos="contractCard1"/>
</template>