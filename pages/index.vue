<template>
<main class="bg-background ">
    <div class="container py-12">
        <transition name="slide-up" mode="out-in">
            <form-section-a v-if="$store.state.currentSection == 1"></form-section-a>
            <form-section-b v-if="$store.state.currentSection == 2 && !$store.state.formData.getConsent || $store.state.currentSection == 2 && $store.state.formData.getConsent == 'No'"></form-section-b>
            <form-section-b-a v-if="$store.state.currentSection == 2 && $store.state.formData.getConsent === 'Yes'" />
        </transition>
    </div>
    <pre>
    {{$store.state.formData}}
    </pre>
</main>
</template>
<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: start;
    text-align: center;
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
    left: -50px;
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
</style>
