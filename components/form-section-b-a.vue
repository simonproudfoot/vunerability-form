<template>
<div class="card bg-white w-full max-w-7xl mx-auto shadow rounded text-left">
    <div class="bg-lightBlue py-3">
        <div class="max-w-4xl mx-auto px-8">
            Client ref: <b>{{$store.state.formData.clientID}}</b>
        </div>
    </div>
    <div ref="countRadio" class="card__inner max-w-4xl mx-auto px-8 py-16">
        <div class="block mb-10 relative">
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
        <div class="block my-10 relative">
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
        <div class="block my-10 relative">
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
    <div class="bg-lightGreen caption py-6">
        <div class="max-w-4xl mx-auto relative px-8">
            <span class="numberBlock absolute -mt-10">
                <img src="~static/comment.svg" />
            </span> "Now, I'm going to ask you a short series of questions that will help me understand your circumstances better."
        </div>
    </div>
    <div class="card__inner max-w-4xl mx-auto px-8 py-16">

          <div class=" py-10">
            <span class="max-w-4xl relative">
                <span class="noteBlock absolute text-purple font-bold ">
                    Note
                </span>
                <p class="font-bold">If applicable select YES:</p>
            </span>
            </div>


        <div class="block mb-10 relative">
            <label class="block font-bold">"Will your circumstances affect your ability to maintain payments?"</label>
            <p class="pb-3">If so, how long for? Request medical evidence for MH CVN's in the form of letter from Dr, hospital, therapist or recognized medical establishment as creditors will need this to update their records.</p>
            <div v-for="(a, i) in ynn" :key="i">
                <label class="inline-flex block items-center">
                    <input type="radio" class="form-radio block text-primary form-radio h-4 w-4" name="radio5" :value="a" v-model="formData.will_your_circumstances_affect_your_ability_to_maintain_payments">
                    <span class="ml-2 block">{{a}}</span>
                </label>
            </div>
            <textarea v-if="formData.will_your_circumstances_affect_your_ability_to_maintain_payments == 'Yes'" v-model="formData.will_your_circumstances_affect_your_ability_to_maintain_payments_Details" class="form-textarea mt-1 block w-full" rows="3" placeholder="Further details"></textarea>
        </div>
        <div class="block my-10 relative">
            <label class="block font-bold">"Do your circumstances mean we should not contact you at a particular day or part of a day?"</label>
            <p class="pb-3">I.e. morning / afternoon / evening. Also, is telephone, email or letter best?</p>
            <div v-for="(c, i) in ynn" :key="i">
                <label class="inline-flex block items-center">
                    <input type="radio" class="form-radio block text-primary form-radio h-4 w-4" name="radio6" :value="c" v-model="formData.do_your_circumstances_mean_we_should_not_contact_you_at_a_particular_day_or_part_of_a_day">
                    <span class="ml-2 block">{{c}}</span>
                </label>
            </div>
            <textarea v-if="formData.do_your_circumstances_mean_we_should_not_contact_you_at_a_particular_day_or_part_of_a_day == 'Yes'" v-model="formData.do_your_circumstances_mean_we_should_not_contact_you_at_a_particular_day_or_part_of_a_day_details" class="form-textarea mt-1 block w-full" rows="3" placeholder="Further details"></textarea>
        </div>
        <div class="block mt-10 mb-5 relative">
            <label class="block font-bold">"Do you require us to speak to any third party?"</label>
            <p class="pb-3">If applicable care worker / partner / friend?</p>
            <div v-for="(c, i) in ynn" :key="i">
                <label class="inline-flex block items-center">
                    <input type="radio" class="form-radio block text-primary form-radio h-4 w-4" name="radio7" :value="c" v-model="formData.do_you_require_us_to_speak_to_any_third_party">
                    <span class="ml-2 block">{{c}}</span>
                </label>
            </div>
        </div>
        <div v-if="formData.do_you_require_us_to_speak_to_any_third_party == 'Yes'" class="pl-6 max-w-md mb-5">
            <label class="block font-bold">Name of third party</label>
            <input v-model="formData.third_party_name" type="text" class="" placeholder="Please enter name of 3rd party">
            <br>
            <label class="block font-bold">Relationship to client</label>
            <input v-model="formData.third_party_relationship" type="text" class="" placeholder="Please enter relationship to client">
            <br>
            <label class="block font-bold">Date of birth</label>
            <client-only>
                <div>
                    <date-picker v-model="formData.third_party_dob" placeholder="Please select date of birth" format="dd/MM/yyyy">
                    
                    </date-picker>
                </div>
                <!-- <date-picker v-model="formData.third_party_dob" placeholder="Please select date of birth" format="dd/MM/yyyy" /> -->

            </client-only>
        </div>
        <div class="block my-10 relative">
            <label class="block font-bold">Can the client understand, remember, weigh up and make an informed decision?</label>
            <div v-for="(c, i) in yn" :key="i">
                <label class="inline-flex block items-center">
                    <input type="radio" class="form-radio block text-primary form-radio h-4 w-4" name="radio8" :value="c" v-model="formData.can_the_client_understand_remember_weigh_up_and_make_an_informed_decision">
                    <span class="ml-2 block">{{c}}</span>
                </label>
            </div>
        </div>
        <div class="block my-10 relative">
            <label class="block font-bold">Is a follow up diary required?</label>
            <div v-for="(c, i) in yn" :key="i">
                <label class="inline-flex block items-center">
                    <input type="radio" class="form-radio block text-primary form-radio h-4 w-4" name="radio9" :value="c" v-model="formData.is_a_follow_up_diary_required">
                    <span class="ml-2 block">{{c}}</span>
                </label>
            </div>
            <div class="pl-6 pt-2">
                <client-only>
                    <date-picker v-if="formData.is_a_follow_up_diary_required == 'Yes'" v-model="formData.followUpDate" placeholder="Please select date for follow up" format="dd/MM/yyyy" p />
                </client-only>
            </div>
            <div class="block my-10 relative">
                <label class="block font-bold">Is a creditor contact diary required?</label>
                <div v-for="(c, i) in yn" :key="i">
                    <label class="inline-flex block items-center">
                        <input type="radio" class="form-radio block text-primary form-radio h-4 w-4" name="radio10" :value="c" v-model="formData.is_a_creditor_contact_diary_required">
                        <span class="ml-2 block">{{c}}</span>
                    </label>
                </div>
            </div>
            <div class="block mt-10 relative">
                <label class="block font-bold">Does SST need to be notified?</label>
                <div v-for="(c, i) in yn" :key="i">
                    <label class="inline-flex block items-center">
                        <input type="radio" class="form-radio block text-primary form-radio h-4 w-4" name="radio11" :value="c" v-model="formData.does_sst_need_to_be_notified">
                        <span class="ml-2 block">{{c}}</span>
                    </label>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-lightGreen caption py-6">
        <div class="max-w-4xl mx-auto relative px-8">
            <span class="numberBlock absolute -mt-10">
                <img src="~static/comment.svg" />
            </span> "Thank you for answering the questions."
        </div>
    </div>
    <div class="card__inner max-w-4xl mx-auto px-8 pb-16">
        <div class="block my-10 relative">
            <label class="block font-bold">Are you happy to proceed with the information noted?</label>
            <div v-for="(c, i) in yn" :key="i">
                <label class="inline-flex block items-center">
                    <input type="radio" class="form-radio block text-primary form-radio h-4 w-4" name="radio12" :value="c" v-model="formData.are_you_happy_to_proceed_with_the_information_noted">
                    <span class="ml-2 block">{{c}}</span>
                </label>
            </div>
        </div>
        <nav class="pt-5 grid grid-cols-2">
            <button class="bg-primary outline-primary px-3 py-2 text-white rounded hover:bg-green mr-auto" @click="goBack">PREVIOUS</button>
            <button class="bg-primary outline-primary px-3 py-2 text-white rounded hover:bg-green ml-auto" :class="!validate ? 'inactive': null" @click="$store.commit('currentSectionPlus', null)">NEXT ></button>
        </nav>
    </div>
</div>
</template>

<script>
export default {
    data: function () {
        return {
            yn: ['Yes', 'No'],
            ynn: ['Yes', 'No', 'Not applicable'],
            date_today: new Date()
        }
    },
    methods: {
        goBack() {
            this.formData.getConsent = null
        }
    },
    computed: {
        validate() {
            var section = [
                this.formData.bereavment,
                this.formData.mentalHealth,
                this.formData.physical,
                this.formData.other,
                this.formData.will_your_circumstances_affect_your_ability_to_maintain_payments,
                this.formData.do_your_circumstances_mean_we_should_not_contact_you_at_a_particular_day_or_part_of_a_day,
                this.formData.do_you_require_us_to_speak_to_any_third_party,
                this.formData.can_the_client_understand_remember_weigh_up_and_make_an_informed_decision,
                this.formData.is_a_follow_up_diary_required,
                this.formData.is_a_creditor_contact_diary_required,
                this.formData.does_sst_need_to_be_notified,
                this.formData.are_you_happy_to_proceed_with_the_information_noted
            ]
            return section.includes("") || section.includes(null) ? false : true
        }
    },
    mounted() {
        this.toTop()
    }
}
</script>
