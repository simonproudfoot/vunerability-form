<template>
<div class="card bg-white w-full max-w-7xl mx-auto shadow rounded text-left">
    <div class="bg-lightBlue py-3">
        <div class="max-w-4xl mx-auto px-8">
            Client ref: <b>{{$store.state.formData.clientID}}</b>
        </div>
    </div>
    <div class="card__inner max-w-4xl mx-auto px-8 py-16">
        <div class="block mb-6 relative">
            <label class="block text-primary  font-bold">BEREAVEMENT</label>
            <p class="pb-3">Confirm who passed away and impact to them. Adv of SST if needed.</p>
            <div v-for="(a, i) in yn" :key="i">
                <label class="inline-flex block items-center">
                    <input type="radio" class="form-radio block text-primary form-radio h-4 w-4" name="radio1" :value="a" v-model="formData.bereavment">
                    <span class="ml-2 block">{{a}}</span>
                </label>
            </div>
            <textarea v-if="formData.bereavment == 'Yes'" v-model="formData.bereavmentDetails" class="form-textarea mt-1 block w-full" rows="3" placeholder="Further details"></textarea>
        </div>
        <div class="block my-6 relative">
            <label class="block text-primary font-bold">MENTAL HEALTH</label>
            <p class="pb-3">Confirm diagnoses, when diagnosed, medication and if any support / counselling in place.</p>
            <div v-for="(b, i) in yn" :key="i">
                <label class="inline-flex block items-center">
                    <input type="radio" class="form-radio block text-primary form-radio h-4 w-4" name="radio2" :value="b" v-model="formData.mentalHealth">
                    <span class="ml-2 block">{{b}}</span>
                </label>
            </div>
            <textarea v-if="formData.mentalHealth == 'Yes'" v-model="formData.mentalHealthDetails" class="form-textarea mt-1 block w-full" rows="3" placeholder="Further details"></textarea>
        </div>
        <div class="block my-6 relative">
            <label class="block text-primary font-bold">PHYSICAL</label>
            <p class="pb-3">What is the injury, recovery period and impact to client?</p>
            <div v-for="(c, i) in yn" :key="i">
                <label class="inline-flex block items-center">
                    <input type="radio" class="form-radio block text-primary form-radio h-4 w-4" name="radio3" :value="c" v-model="formData.physical">
                    <span class="ml-2 block">{{c}}</span>
                </label>
            </div>
            <textarea v-if="formData.physical == 'Yes'" v-model="formData.physicalDetails" class="form-textarea mt-1 block w-full" rows="3" placeholder="Further details"></textarea>
        </div>
        <div class="block mt-6 relative">
            <label class="block text-primary font-bold">OTHER</label>
            <p class="pb-3">Details of situation that means client is vulnerable and how long this will be an issue.</p>
            <div v-for="(d, i) in yn" :key="i">
                <label class="inline-flex block items-center">
                    <input type="radio" class="form-radio block text-primary form-radio h-4 w-4" name="radio4" :value="d" v-model="formData.other">
                    <span class="ml-2 block">{{d}}</span>
                </label>
            </div>
            <textarea v-if="formData.other == 'Yes'" v-model="formData.otherDetails" class="form-textarea mt-1 block w-full" rows="3" placeholder="Further details"></textarea>
        </div>
    </div>
    <template v-if="formData.bereavment && formData.mentalHealth && formData.physical && formData.other">
    <div class="bg-lightGreen py-6">
        <div class="max-w-4xl mx-auto relative px-8">
            <span class="numberBlock absolute -mt-10">
                <img src="~static/comment.svg" />
            </span>
            "Now, I'm going to ask you a short series of questions that will help me understand your circumstances better."
        </div>
    </div>
    
    <div class="card__inner max-w-4xl mx-auto px-8 py-16">
        <div class="block mb-6 relative">
            <label class="block font-bold">"Will your circumstances affect your ability to maintain payments?"</label>
            <p class="pb-3">If so, how long for? Request medical evidence for MH CVN's in the form of letter from Dr, hospital, therapist or recognized medical establishment as creditors will need this to update their records.</p>
            <div v-for="(a, i) in ynn" :key="i">
                <label class="inline-flex block items-center">
                    <input type="radio" class="form-radio block text-primary form-radio h-4 w-4" name="radio5" :value="a" v-model="formData.will_your_circumstances_affect_your_ability_to_maintain_payments">
                    <span class="ml-2 block">{{a}}</span>
                </label>
            </div>
            <textarea v-if="formData.bereavment == 'Yes'" v-model="formData.will_your_circumstances_affect_your_ability_to_maintain_payments_Details" class="form-textarea mt-1 block w-full" rows="3" placeholder="Further details"></textarea>
        </div>
    </div>

    </template>
</div>
</template>

<script>
export default {
    data: function () {
        return {
            yn: ['Yes', 'No'],
            ynn: ['Yes', 'No', 'Not applicable'],
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
    },
}
</script>
