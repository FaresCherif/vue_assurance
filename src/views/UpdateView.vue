<script setup>
import { useRouter } from 'vue-router'

import HomeRedirection from '@/components/HomeRedirection.vue';
import ContratFormulaireUpdate from '@/components/ContratFormulaireUpdate.vue';

const router = useRouter();


function goHome(){
    router.push(`/`);
}
</script>


<template>
    <HomeRedirection @go-home="goHome"/>
    <ContratFormulaireUpdate @after-validate="goHome"/>
</template>