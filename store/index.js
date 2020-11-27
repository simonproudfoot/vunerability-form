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
        
    }
})
export const mutations = {
    currentSectionPlus(state) {
        state.currentSection++
    },
    setFormData(state, val) {
        state.formData = value
    },
}
