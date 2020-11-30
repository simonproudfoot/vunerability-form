<template>
<div>
    <!-- <div class="navbar shadow relative block z-50 bg-white py-5 text-center w-full">
        <h1 class="text-2xl font-bold">Client Vulnerability and Health Update</h1>
    </div> -->
    <title-bar></title-bar>
    <transition name="slide-down">
        <div class="bg-orange absolute z-40 w-full py-5 px-5 text-center font-bold text-white block h-auto" v-if="$store.state.currentSection !== 1">
            WARNING: Do not save changes or recalculate on Debtsolv during or after the use of this system. File must be closed without saving changes.
        </div>
    </transition>
    <Nuxt />
</div>
</template>
<style>
html {
    font-family: Arial,sans-serif;
    font-size: 1rem;
    
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}
*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
}
</style>
