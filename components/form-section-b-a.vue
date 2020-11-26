<template>
<div class="card bg-white w-full max-w-7xl mx-auto shadow rounded text-left">
    <div class="bg-lightBlue py-3 ">
        <div class="max-w-4xl mx-auto px-8">
            Client ref: <b>{{$store.state.formData.clientID}}</b>
        </div>
    </div>
    <div class="card__inner max-w-4xl mx-auto px-8 py-16">
        <div class="block mb-6 relative">
            <label for="clientID" class="block text-primary  font-bold">BEREAVEMENT</label>
            <p class="pb-3">Confirm who passed away and impact to them. Adv of SST if needed.</p>
            <div v-for="(type, i) in yn" :key="i">
                <label class="inline-flex block items-center">
                    <input type="radio" class="form-radio block text-primary form-radio h-4 w-4" name="radio" :value="type" v-model="bereavment">
                    <span class="ml-2 block">{{type}}</span>
                </label>
            </div>
            <textarea v-if="bereavment == 'Yes'" v-model="bereavmentDetails" class="form-textarea mt-1 block w-full" rows="3" placeholder="Further details"></textarea>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data: function () {
        return {
            yn: ['Yes', 'No'],
        }
    },
    computed: {
        bereavment: {
            get() {
                return this.$store.state.formData.bereavment
            },
            set(value) {
                this.$store.commit('setFormData', { field: 'bereavment', value: value })
            }
        },
          bereavmentDetails: {
            get() {
                return this.$store.state.formData.bereavmentDetails
            },
            set(value) {
                this.$store.commit('setFormData', { field: 'bereavmentDetails', value: value })
            }
        },
    },
}
</script>

<style>
</style>
