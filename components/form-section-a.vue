<template>
<div class="card bg-white w-full max-w-7xl mx-auto shadow rounded text-left">
    <div class="bg-lightBlue py-3 ">
        <div class="max-w-4xl mx-auto"></div>
    </div>
    <div class="card__inner max-w-4xl mx-auto px-8 py-16">
        <label for="clientID" class="block text-primary font-bold pb-3">CLIENT ID</label>
        <input v-model="formData.clientID" type="text" placeholder="-- Please enter client ID --" class="block border-b-2 py-2 px-3 text-black">
        <br>
        <label for="clientID" class="block text-primary pb-3 font-bold">UPDATE TYPE</label>
        <div v-for="(type, i) in typeList" :key="i">
            <label class="inline-flex block items-center">
                <input type="radio" class="form-radio block text-primary form-radio h-4 w-4" name="radio" :value="type" v-model="formData.updateType">
                <span class="ml-2 block">{{type}}</span>
            </label>
        </div>
        <nav class="text-right pt-5">
            <button class="bg-primary outline-primary px-3 py-2 text-white rounded hover:bg-green ml-auto " :class="!formData.clientID || !formData.updateType ? 'inactive': null" @click="$store.commit('currentSectionPlus', null)">COMPLETE</button>
        </nav>
    </div>
</div>
</template>

<script>
export default {
    data: function () {
        return {
            typeList: ['Client Vulnerability or Health Notification', 'Client Potential Vulnerability', 'Client Vulnerability Ended', 'Unverified CVN']
        }
    },
    computed: {

        formData: {
            get() {
                return this.$store.state.formData
            },
            set(value) {
                this.$store.commit('setFormData', value)
            }
        },

        // clientID: {
        //     get() {
        //         return this.$store.state.formData.clientID
        //     },
        //     set(value) {
        //         this.$store.commit('setFormData', { field: 'clientID', value: value })
        //     }
        // },
        // updateType: {
        //     get() {
        //         return this.$store.state.formData.updateType
        //     },
        //     set(value) {
        //         this.$store.commit('setFormData', { field: 'updateType', value: value })
        //     }
        // }
    }
}
</script>
