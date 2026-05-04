<script setup>
import { ref } from 'vue';

import '../assets/contratFormulaire.css';

const form = ref({
    numero: '',
    titre: '',
    type: '',
    statut: 'Actif',
    titulaire: '',
    prime: null,
    echeance: ''
})

</script>


<template>

    <div class="form-container">
        <h2>Nouveau contrat</h2>

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

        <button @click="creerContrat">Créer le contrat</button>
    </div>
</template>