<script setup>
import { ref,computed,onMounted } from 'vue';
import { useRoute } from 'vue-router'

import '../assets/contratFormulaire.css';
import api from '@/api/axios';

const form = ref({
    numero: '',
    titre: '',
    type: '',
    statut: 'Actif',
    titulaire: '',
    prime: null,
    echeance: ''
})

const loading = ref(true)
const route = useRoute()

onMounted(async () => {
    const response = await api.get(`/contrat/${route.params.contractnumber}`)
    form.value = await response.data
    console.log(form.value)
    loading.value = false;
})

const formulaireValide = computed(() => 
    form.value.numero &&
    form.value.titre &&
    form.value.type &&
    form.value.statut &&
    form.value.titulaire &&
    form.value.prime &&
    form.value.echeance
)

const emit = defineEmits(['afterValidate'])

async function updateContrat() {
    await api.put('/contrat/update', form.value);
    emit('afterValidate');
}
</script>


<template>
    <div v-if="loading" class="detail"></div>

    <div v-else-if="form" class="form-container">
        <h2>Mise à jour du contrat</h2>

        <div class="form-group">
            <label>Numéro</label>
            <input v-model="form.numero" placeholder="AUT-20241" />
        </div>

        <div class="form-group">
            <label>Titre</label>
            <input v-model="form.titre" placeholder="Renault Clio IV" />
        </div>

        <div class="form-group">
            <label>Type</label>
            <select v-model="form.type">
                <option value="">-- Choisir --</option>
                <option value="Auto">Auto</option>
                <option value="Habitation">Habitation</option>
                <option value="Santé">Santé</option>
            </select>
        </div>

        <div class="form-group">
            <label>Statut</label>
            <select v-model="form.statut">
                <option value="Actif">Actif</option>
                <option value="Résilié">Résilié</option>
            </select>
        </div>

        <div class="form-group">
            <label>Titulaire</label>
            <input v-model="form.titulaire" placeholder="Jean Dupont" />
        </div>

        <div class="form-group">
            <label>Prime annuelle (€)</label>
            <input v-model.number="form.prime" type="number" placeholder="420" />
        </div>

        <div class="form-group">
            <label>Échéance</label>
            <input v-model="form.echeance" type="date" />
        </div>

        <button :disabled="!formulaireValide" @click="updateContrat">Met à jour le contrat</button>
    </div>
</template>