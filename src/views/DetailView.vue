<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import contrats from '../data/contrats.json'
import '../assets/detailVue.css'

const route = useRoute()

const contrat = computed(() => 
  contrats.find(c => c.id  == route.params.contractnumber)
)

</script>


<template>
  <div v-if="contrat" class="detail">
    <div class="card">
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
