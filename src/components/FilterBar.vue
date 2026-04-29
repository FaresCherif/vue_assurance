<script setup>
defineEmits(['filterChange'])
</script>

<template>
    <div class="filters">
        <button
            v-for="statut in ['Tous','Actif','Résilié']"
            :key="statut"
            class="btn-filter"
            @click="$emit('filterChange',statut)"
        >
            {{ statut }}
        </button>
    </div>
</template>