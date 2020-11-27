export const state = () => ({
    currentSection: 1,
    formData: {
        clientID: '',
        updateType: '',
        getConsent: null,
        bereavment: null,
        bereavmentDetails: '',
        mentalHealth: '',
        mentalHealthDetails: '',
        physical: '',
        physicalDetails: '',
        other:'',
        otherDetails: '',
        will_your_circumstances_affect_your_ability_to_maintain_payments: '',
        will_your_circumstances_affect_your_ability_to_maintain_payments_Details: '',
        do_your_circumstances_mean_we_should_not_contact_you_at_a_particular_day_or_part_of_a_day: '',
        do_your_circumstances_mean_we_should_not_contact_you_at_a_particular_day_or_part_of_a_day_details: '',
        do_you_require_us_to_speak_to_any_third_party: '',
        third_party_name: '',
        third_party_relationship: '',
        third_party_dob: '',
        can_the_client_understand_remember_weigh_up_and_make_an_informed_decision: '',
        is_a_follow_up_diary_required: '',
        followUpDate: '',
        is_a_creditor_contact_diary_required: '',
        does_sst_need_to_be_notified: '',
        are_you_happy_to_proceed_with_the_information_noted: '' 
        
    }
})
export const mutations = {
    currentSectionPlus(state) {
        state.currentSection++
    },
    currentSectionMinus(state) {
        state.currentSection--
    },
    setFormData(state, val) {
        state.formData = value
    },
}
