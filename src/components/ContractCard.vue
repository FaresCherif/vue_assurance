<script setup>
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

</script>

<template>
    <div class="contract_presentation"> 
        <h1>{{ infos.type }}</h1>
        <p>{{ infos.titulaire }}</p>
    </div>
</template>