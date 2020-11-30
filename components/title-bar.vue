<template>
<div class="navbar shadow bg-white py-5 text-center">
    <h1 class="text-2xl font-bold">
        <template v-if="$store.state.currentSection == 1">
            Client Vulnerability and Health Update
        </template>
        <template v-if="$store.state.currentSection == 2 && $store.state.formData.getConsent === 'No' || $store.state.formData.getConsent === null">
            Vulnerability
        </template>
        <template v-if="$store.state.currentSection == 2 && $store.state.formData.getConsent === 'Yes'">
            Vulnerability: Consents given
        </template>
    </h1>
</div>
</template>
