<template>
<div class="navbar shadow bg-white py-5 text-center ">
    <h1 class="text-2xl font-bold">
        <template v-if="$store.state.currentSection == 1">
            Client Vulnerability and Health Update
        </template>
        <template v-if="$store.state.currentSection == 2">
            Vulnerability
        </template>
    </h1>
</div>
</template>
