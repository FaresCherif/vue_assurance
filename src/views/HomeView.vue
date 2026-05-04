<script setup>
import { ref,watch } from 'vue';
import ContractCard from '../components/ContractCard.vue';
import api from '@/api/axios'

import '../assets/home.css'
import FilterBar from '@/components/FilterBar.vue';
const filtreStatut = ref('Tous')

const contratsData = ref([])


watch(filtreStatut, async (newStatut) => {
    if (newStatut === 'Tous') {
        const response = await api.get('/contrat')
        contratsData.value = response.data
    } else {
        const response = await api.get(`/contrat/statut/${newStatut}`)
        contratsData.value = response.data
    }
}, { immediate: true })



</script>

<template>
    <FilterBar @filter-change="filtreStatut=$event"/>

    <div class="grid" v-if="contratsData">
        <ContractCard 
            v-for="contratData in contratsData"
            :infos="contratData"
        />
   </div>
</template>

