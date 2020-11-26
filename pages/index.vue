<template>
<main class="bg-background ">
    <div class="navbar shadow z-50 bg-white py-5 text-center w-full fixed">
        <h1 class="text-2xl font-bold">Client Vulnerability and Health Update</h1>
    </div>
    <div class="container pt-8">
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
    align-items: center;
    text-align: center;
}

.title {
    font-family:
        'Quicksand',
        'Source Sans Pro',
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        Roboto,
        'Helvetica Neue',
        Arial,
        sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}

.inactive {
    @apply bg-lightGrey;
    pointer-events: none;
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
