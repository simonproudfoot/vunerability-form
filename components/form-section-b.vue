<template>
    <div class="card bg-white w-full max-w-7xl mx-auto shadow rounded text-left">
        <div class="bg-lightBlue py-3">
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
                <p>"I'd like to put a note on your file so that if any of my colleagues speak to you in the future they can understand your situation better and that way we don't keep asking you the same questions. We will also like to make your creditors aware
                    if we believe it will assist the management of your account."</p>
            </div>
            <div class="inline-block my-6 relative">
                <span class="numberBlock absolute">
                            <img src="~static/step-3.svg" />
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
        </div>
        <!-- FORM LOGIC -->
        <div v-if="formData.getConsent === 'No'">
            <div class="bg-lightGreen caption py-6">
                <div class="max-w-4xl mx-auto relative px-8">
                    <span class="numberBlock absolute -mt-10">
                                <img src="~static/comment.svg" />
                            </span>
                    <p class="mb-5">"Can I just ask what concerns you have about us recording this information?"</p>
                    <p>"We won't share this information with any outside organisations if you do not want us to. It may just help us to manage your file better and can potentially help avoid the possibility of creditors taking further action."</p>
                </div>
            </div>
            <div class="card__inner max-w-4xl mx-auto px-8 py-16">
                <p class="font-bold">Deal with clients queries appropriately and if the client still does not want you to record this, then do not continue with the vulnerable system and return to the original call.</p>
                <br>
                <br>
                <label class="font-bold">WOULD YOU LIKE ME TO:</label>
                <label class="block mt-2 items-center">
                            <input type="checkbox" class="form-checkbox h-6 w-6 text-primary" v-model="formData.consent_note_records" @click="formData.consent_no_permission = false">
                            <span class="ml-3 text-lg">Note our records</span>
                        </label>
                <label class="block mt-2 items-center">
                            <input type="checkbox" class="form-checkbox h-6 w-6 text-primary" v-model="formData.consent_inform_creditors" @click="formData.consent_no_permission = false">
                            <span class="ml-3 text-lg">Inform creditors</span>
                        </label>
                <div class="w-40 py-5">
                    <div class="grid gap-2 grid-cols-3">
                        <span class="block bg-lightGrey my-3" style="height: 1px"></span>
                        <p class="text-center text-lightGrey">or</p>
                        <span class="block bg-lightGrey my-3" style="height: 1px"></span>
                    </div>
                </div>
                <label class="block items-center">
                            <input type="checkbox" class="form-checkbox h-6 w-6 text-primary" v-model="formData.consent_no_permission" @click="formData.consent_note_records = false, formData.consent_inform_creditors = false">
                            <span class="ml-3 text-lg">No permission to record details</span>
                        </label>
                <p class="font-bold py-10">Where the severity of the customer's situation means we have a duty to record the information, then speak to a manager for further guidance.</p>
    
                <nav class="pt-5 grid grid-cols-2">
                    <button class="bg-primary outline-primary px-3 py-2 text-white rounded hover:bg-green mr-auto" @click="goBack">PREVIOUS</button>
                    <button class="bg-primary outline-primary px-3 py-2 text-white rounded hover:bg-green ml-auto" :class="!validate ? 'inactive': null" @click="$store.commit('currentSectionPlus', null)">NEXT ></button>
                </nav>
            </div>
    
        </div>
    
    
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            yn: ['Yes', 'No'],
            typeList: ['Client Vulnerability or Health Notification', 'Client Potential Vulnerability', 'Client Vulnerability Ended', 'Unverified CVN']
        }
    },
    methods: {
        goBack() {
            // this.$store.commit('currentSectionMinus')
            this.formData.getConsent = null
        }
    },
    mounted() {
       this.toTop()
    }
}
</script>
