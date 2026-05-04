<script setup>
defineEmits(['goHome'])
</script>

<template>
  <button @click="$emit('goHome')" class="btn-back">Accueil</button>
</template>