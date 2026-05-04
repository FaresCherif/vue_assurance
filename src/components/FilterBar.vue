<script setup>
defineEmits(['filterChange'])
</script>

<template>
    <div class="filters">

        <select @change="$emit('filterChange',$event.target.value)">
            <option
                v-for="statut in ['Tous','Actif','Résilié']"
                :key="statut"
                class="btn-filter"
                >
            {{ statut }}
            </option>
        </select>


    </div>
</template>