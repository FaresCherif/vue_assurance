<script setup>
import ContractCard from '../components/ContractCard.vue';
import contratsData from '../data/contrats.json'
import { reactive } from 'vue'

</script>

<template>

  <ContractCard 
    v-for="contratData in contratsData"
    :infos="contratData"
   />
</template>