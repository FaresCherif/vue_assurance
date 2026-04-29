<script setup>
const props = defineProps({
    infos: {
        type: Object,
        required: true,
        default(){
            return {
                id : 10,
                title : "Default title",
                description : "Default description"
            }
        }
    }
})

</script>

<template>
    <div class="contract_presentation"> 
        <h1>{{ infos.title }}</h1>
        <p>{{ infos.description }}</p>
    </div>
</template>