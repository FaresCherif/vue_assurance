<script setup>
import { useRouter } from 'vue-router'

import HomeRedirection from '@/components/HomeRedirection.vue';
import ContratFormulaireEmpty from '@/components/ContratFormulaireEmpty.vue';

const router = useRouter();


function goHome(){
    router.push(`/`);
}
</script>


<template>
    <HomeRedirection @go-home="goHome"/>
    <ContratFormulaireEmpty @after-validate="goHome"/>
</template>