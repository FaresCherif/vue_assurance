<script setup>
import { ref,computed } from 'vue';
import ContractCard from '../components/ContractCard.vue';
import contratsData from '../data/contrats.json'
import '../assets/home.css'
import FilterBar from '@/components/FilterBar.vue';
const filtreStatut = ref('Tous')

const contratsFiltres = computed(() =>
    
    filtreStatut.value === 'Tous'
    ? contratsData
    : contratsData.filter(c => c.statut == filtreStatut.value)

)

</script>

<template>
    <FilterBar @filter-change="filtreStatut=$event"/>

    <div class="grid">
        <ContractCard 
            v-for="contratData in contratsFiltres"
            :infos="contratData"
        />
   </div>
</template>

