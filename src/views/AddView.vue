<script setup>
import { useRouter } from 'vue-router'

import HomeRedirection from '@/components/HomeRedirection.vue';

const router = useRouter();


function goHome(){
    router.push(`/`);
}
</script>


<template>
    <HomeRedirection @go-home="goHome"/>
    <h1>Nouveau contrat</h1>
    
</template>