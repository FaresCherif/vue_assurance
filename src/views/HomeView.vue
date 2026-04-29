<script setup>
import { ref,computed } from 'vue';
import ContractCard from '../components/ContractCard.vue';
import contratsData from '../data/contrats.json'
import '../assets/home.css'

const filtreStatut = ref('Tous')

const contratsFiltres = computed(() =>
    
    filtreStatut.value === 'Tous'
    ? contratsData
    : contratsData.filter(c => c.statut == filtreStatut.value)

)

</script>

<template>

    <div class="filters">
        <button
            v-for="statut in ['Tous','Actif','Résilié']"
            :key="statut"
            class="btn-filter"
            @click="filtreStatut=statut"
        >
            {{ statut }}
        </button>
    </div>
    <div class="grid">
        <ContractCard 
            v-for="contratData in contratsFiltres"
            :infos="contratData"
        />
   </div>
</template>

