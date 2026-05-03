<script setup>
import { ref,computed,onMounted } from 'vue';
import ContractCard from '../components/ContractCard.vue';
import '../assets/home.css'
import FilterBar from '@/components/FilterBar.vue';
const filtreStatut = ref('Tous')

const contratsData = ref([])

onMounted(async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/contrat`)
    contratsData.value = await response.json()
})


const contratsFiltres = computed(() =>
    
    filtreStatut.value === 'Tous'
    ? contratsData.value
    : contratsData.value.filter(c => c.statut == filtreStatut.value)

)

</script>

<template>
    <FilterBar @filter-change="filtreStatut=$event"/>

    <div class="grid" v-if="contratsFiltres">
        <ContractCard 
            v-for="contratData in contratsFiltres"
            :infos="contratData"
        />
   </div>
</template>

