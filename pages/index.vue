<template>
<main class="bg-background">
    <div class="navbar shadow bg-white py-5 text-center ">
        <h1 class="text-2xl font-bold">Client Vulnerability and Health Update</h1>
    </div>
    <div class="container">
        <form-section-a v-if="$store.state.currentSection == 1"></form-section-a>
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

.inactive{
  @apply bg-lightGrey;
  pointer-events: none;
}
</style>
