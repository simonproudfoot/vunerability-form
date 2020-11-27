<template>
<div class="card bg-white w-full max-w-7xl mx-auto shadow rounded text-left">
    <div class="bg-lightBlue py-3 ">
        <div class="max-w-4xl mx-auto px-8">
            Client ref: <b>{{$store.state.formData.clientID}}</b>
        </div>
    </div>
    <div class="card__inner max-w-4xl mx-auto px-8 py-16">
        <div class="inline-block mb-6 relative">
            <span class="numberBlock absolute">
                <img src="~static/step-1.svg" />
            </span>
            <h3 for="clientID" class="block text-primary font-bold pb-3">THANK THE CLIENT</h3>
            <p>"Thanks for telling me that, it's really helpful as it will allow us to deal with your account better."</p>
        </div>
        <div class="inline-block my-6 relative">
            <span class="numberBlock absolute">
                <img src="~static/step-2.svg" />
            </span>
            <h3 for="clientID" class="block text-primary font-bold pb-3">EXPLAIN</h3>
            <p>"I'd like to put a note on your file so that if any of my colleagues speak to you in the future they can understand your situation better and that way we don't keep asking you the same questions. We will also like to make your creditors aware if we believe it will assist the management of your account."</p>
        </div>
        <div class="inline-block my-6 relative">
            <span class="numberBlock absolute">
                <img src="~static/step-2.svg" />
            </span>
            <h3 for="clientID" class="block text-primary font-bold pb-3">GET CONSENT</h3>
            <p>"Are you happy for me to put a note on your file and inform your creditors?"</p>
            <br>
            <div v-for="(type, i) in yn" :key="i">
                <label class="inline-flex block items-center">
                    <input type="radio" class="form-radio block text-primary form-radio h-4 w-4" name="radio" :value="type" v-model="formData.getConsent">
                    <span class="ml-2 block">{{type}}</span>
                </label>
            </div>
        </div>
        <!-- FORM LOGIC -->
        <div v-if="getConsent === 'No'">
            nonon
        </div>
    </div>
</div>
</template>
<script>
export default {
    data: function () {
        return {
            yn: ['Yes', 'No'],
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
        // getConsent: {
        //     get() {
        //         return this.$store.state.formData.getConsent
        //     },
        //     set(value) {
        //         this.$store.commit('setFormData', { field: 'getConsent', value: value })
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
    },
}
</script>
