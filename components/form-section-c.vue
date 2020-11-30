<template>
<div class="card bg-white w-full max-w-7xl mx-auto shadow rounded text-left">
    <div class="bg-lightBlue py-3">
        <div class="max-w-4xl mx-auto px-8">
            Client ref: <b>{{$store.state.formData.clientID}}</b>
        </div>
    </div>
    <div ref="countRadio" class="card__inner max-w-4xl mx-auto px-8 py-16">
        <h1 class="text-5xl">What's next?</h1>
    </div>
</div>
</template>

<script>
export default {}
</script>

<style>
</style>
