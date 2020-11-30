<template>
<main class="bg-background" :class="$store.state.currentSection !== 1 ? 'pt-20' : null ">
    <div class="container px-4 py-12">
        <transition name="slide-up" mode="out-in">
            <form-section-a v-if="$store.state.currentSection == 1"></form-section-a>
            <form-section-b v-if="$store.state.currentSection == 2 && !$store.state.formData.getConsent || $store.state.currentSection == 2 && $store.state.formData.getConsent == 'No'"></form-section-b>
            <form-section-b-a v-if="$store.state.currentSection == 2 && $store.state.formData.getConsent === 'Yes'" />
        </transition>
    </div>
    <pre style="overflow: hidden">
    {{$store.state.formData}}
    </pre>
</main>
</template>
<script>
import smoothscroll from 'smoothscroll-polyfill';
export default {
    mounted() {
        smoothscroll.polyfill();
    },
}
</script>
<style>
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: start;
    text-align: center;
}
input,
textarea {
    @apply border;
    @apply mt-1;
    @apply block;
    @apply w-full;
    @apply py-2;
    @apply px-3;
    @apply border-gray-900 !important
}
@media (max-width: 640px) {
    .card__inner {
        padding-left: 80px;
        padding-right: 80px;
    }
}
@media (min-width: 640px) {
    .card__inner {
        padding-left: 100px;
        padding-right: 100px;
    }
}
@media (max-width: 640px) {
    .caption {
        padding-left: 80px;
    }
}
@media (min-width: 640px) {
    .caption {
        padding-left: 100px;
    }
}
.inactive {
    @apply bg-lightGrey;
    pointer-events: none;
}
.vdp-datepicker input {
    @apply max-w-md;
    @apply border;
    @apply px-3;
    @apply py-2;
    @apply w-full;
    @apply rounded;
}
.numberBlock {
    width: 35px;
    height: auto;
    left: -43px;
    top: 0;
}
.slide-up-enter-active {
    transition: all .3s ease;
}
.slide-up-leave-active {
    transition: all .3s ease;
}
.slide-up-enter,
.slide-up-leave-to {
    opacity: 0;
    transform: translateY(10px);
}
.slide-down-enter-active {
    transition: all .3s ease;
}
.slide-down-leave-active {
    transition: all .3s ease;
}
.slide-down-enter,
.slide-down-leave-to {
    opacity: 0;
    transform: translateY(-100px);
}
</style>
