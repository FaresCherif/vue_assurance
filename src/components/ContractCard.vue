<script setup>
import '../assets/contractCard.css'
import { useRouter } from 'vue-router'

const props = defineProps({
    infos: {
        type: Object,
        required: true,
        default(){
            return {
                id : 10,
                type : "Default type",
                titulaire : "Default titulaire"
            }
        }
    }
})

const router = useRouter();

function goToDetail() {
  router.push(`/detail/${props.infos.id}`)
}

</script>

<template>
  <div class="card" @click="goToDetail">
    <div class="card-top">
      <span class="type-badge">{{ infos.type }}</span>
      <span class="status">
          <span class="dot" :class="infos.statut === 'Actif' ? 'dot_on' : 'dot_off'"/>
          {{ infos.statut }}
      </span>
    </div>
    <div class="card-title">{{ infos.titre }}</div>
    <div class="card-sub">{{ infos.titulaire }}</div>
  </div>
</template>