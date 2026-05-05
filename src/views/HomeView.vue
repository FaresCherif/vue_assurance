<script setup>
import { ref,watch } from 'vue';
import { useRouter } from 'vue-router'
import ContractCard from '../components/ContractCard.vue';
import api from '@/api/axios'

import '../assets/home.css'
import FilterBar from '@/components/FilterBar.vue';
const filtreStatut = ref('Tous')

const contratsData = ref([])


watch(filtreStatut, async (newStatut) => {
    updateCardsDisplay(newStatut);
}, { immediate: true })


async function updateCardsDisplay(newStatut){
    if (newStatut === 'Tous') {
        const response = await api.get('/contrat')
        contratsData.value = response.data
    } else {
        const response = await api.get(`/contrat/statut/${newStatut}`)
        contratsData.value = response.data
    }

}

const router = useRouter();

function goToNewContrat() {
  router.push(`/add`)
}

</script>

<template>
    <FilterBar @filter-change="filtreStatut=$event"/>

    <div class="grid_general" v-if="contratsData">
        <TransitionGroup name="fade" tag="div" class="grid" >

            <ContractCard 
                v-for="(contratData, index) in contratsData"
                :key="contratData.id"
                :infos="contratData"
                :style="{ transitionDelay: `${index * 50}ms` }"
                @after-delete="updateCardsDisplay(filtreStatut)"
            />
        </TransitionGroup>
    </div>
   <button @click="goToNewContrat">Nouveau contrat</button>
</template>

