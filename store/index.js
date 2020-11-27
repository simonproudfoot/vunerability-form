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
        will_your_circumstances_affect_your_ability_to_maintain_payments_Details: ''
        
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
