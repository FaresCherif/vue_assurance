<script setup>
import { computed,onMounted,ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import '../assets/detailVue.css'

const route = useRoute()
const router = useRouter();
const contratsData = ref([])
const loading = ref(true)


onMounted(async () => {
    const response = await fetch('https://springassurance-production.up.railway.app/contrat')
    contratsData.value = await response.json()
    loading.value = false;
})


const contrat = computed(() => 
  contratsData.value.find(c => c.id  == route.params.contractnumber)
)




function goHome(){
    router.push(`/`);
}
</script>


<template>
  <button @click="goHome" class="btn-back">Accueil</button>
  <div v-if="loading" class="detail"></div>

  <div v-else-if="contrat" class="detail">
    <div class="card-detail">
      <div class="card-header">
        <div>
          <h1 class="numero">{{ contrat.numero }}</h1>
          <p class="titre">{{ contrat.titre }}</p>
        </div>
        <span class="badge" :class="contrat.statut === 'Actif' ? 'badge-actif' : 'badge-resilie'">
          {{ contrat.statut }}
        </span>
      </div>
      <div class="rows">
        <div class="row"><span class="row-label">Type</span><span class="row-value">{{ contrat.type }}</span></div>
        <div class="row"><span class="row-label">Titulaire</span><span class="row-value">{{ contrat.titulaire }}</span></div>
        <div class="row"><span class="row-label">Échéance</span><span class="row-value">{{ contrat.echeance }}</span></div>
        <div class="row"><span class="row-label">Prime annuelle</span><span class="row-value prime">{{ contrat.prime }} €</span></div>
      </div>
    </div>
  </div>
  <p v-else>Contrat introuvable</p>
</template>
