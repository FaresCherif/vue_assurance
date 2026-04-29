<script setup>
import ContractCard from '../components/ContractCard.vue';
import contratsData from '../data/contrats.json'
import '../assets/home.css'
</script>

<template>

    <div class="grid">
        <ContractCard 
            v-for="contratData in contratsData"
            :infos="contratData"
        />
   </div>
</template>

